// GitScroll Storage Utilities

import { STORAGE_KEYS } from './constants';

/**
 * Safely gets item from localStorage
 */
export const getFromStorage = (key, defaultValue = null) => {
  try {
    if (typeof window === 'undefined') return defaultValue;
    
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;
    
    return JSON.parse(item);
  } catch (error) {
    console.error(`Error getting item from localStorage:`, error);
    return defaultValue;
  }
};

/**
 * Safely sets item in localStorage
 */
export const setToStorage = (key, value) => {
  try {
    if (typeof window === 'undefined') return false;
    
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error setting item to localStorage:`, error);
    return false;
  }
};

/**
 * Removes item from localStorage
 */
export const removeFromStorage = (key) => {
  try {
    if (typeof window === 'undefined') return false;
    
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing item from localStorage:`, error);
    return false;
  }
};

/**
 * Clears all localStorage
 */
export const clearStorage = () => {
  try {
    if (typeof window === 'undefined') return false;
    
    localStorage.clear();
    return true;
  } catch (error) {
    console.error(`Error clearing localStorage:`, error);
    return false;
  }
};

/**
 * Gets user data from storage
 */
export const getUser = () => {
  return getFromStorage(STORAGE_KEYS.user);
};

/**
 * Sets user data in storage
 */
export const setUser = (userData) => {
  return setToStorage(STORAGE_KEYS.user, userData);
};

/**
 * Removes user data from storage
 */
export const removeUser = () => {
  return removeFromStorage(STORAGE_KEYS.user);
};

/**
 * Gets auth token from storage
 */
export const getToken = () => {
  return getFromStorage(STORAGE_KEYS.token);
};

/**
 * Sets auth token in storage
 */
export const setToken = (token) => {
  return setToStorage(STORAGE_KEYS.token, token);
};

/**
 * Removes auth token from storage
 */
export const removeToken = () => {
  return removeFromStorage(STORAGE_KEYS.token);
};

/**
 * Gets user preferences from storage
 */
export const getPreferences = () => {
  return getFromStorage(STORAGE_KEYS.preferences, {
    theme: 'light',
    notifications: true,
    language: 'en'
  });
};

/**
 * Sets user preferences in storage
 */
export const setPreferences = (preferences) => {
  const current = getPreferences();
  return setToStorage(STORAGE_KEYS.preferences, { ...current, ...preferences });
};

/**
 * Gets draft posts from storage
 */
export const getDrafts = () => {
  return getFromStorage(STORAGE_KEYS.drafts, []);
};

/**
 * Saves draft post to storage
 */
export const saveDraft = (draft) => {
  const drafts = getDrafts();
  const existingIndex = drafts.findIndex(d => d.id === draft.id);
  
  if (existingIndex >= 0) {
    drafts[existingIndex] = { ...draft, updatedAt: new Date().toISOString() };
  } else {
    drafts.push({ ...draft, id: Date.now(), createdAt: new Date().toISOString() });
  }
  
  return setToStorage(STORAGE_KEYS.drafts, drafts);
};

/**
 * Removes draft from storage
 */
export const removeDraft = (draftId) => {
  const drafts = getDrafts();
  const filtered = drafts.filter(d => d.id !== draftId);
  return setToStorage(STORAGE_KEYS.drafts, filtered);
};

/**
 * Gets recent searches from storage
 */
export const getRecentSearches = () => {
  return getFromStorage(STORAGE_KEYS.recentSearches, []);
};

/**
 * Adds search to recent searches
 */
export const addRecentSearch = (query) => {
  if (!query || query.trim().length === 0) return false;
  
  const searches = getRecentSearches();
  const trimmedQuery = query.trim();
  
  // Remove if already exists
  const filtered = searches.filter(s => s.query !== trimmedQuery);
  
  // Add to beginning
  filtered.unshift({
    query: trimmedQuery,
    timestamp: new Date().toISOString()
  });
  
  // Keep only last 10 searches
  const limited = filtered.slice(0, 10);
  
  return setToStorage(STORAGE_KEYS.recentSearches, limited);
};

/**
 * Clears recent searches
 */
export const clearRecentSearches = () => {
  return setToStorage(STORAGE_KEYS.recentSearches, []);
};

/**
 * Gets storage usage information
 */
export const getStorageInfo = () => {
  if (typeof window === 'undefined') return null;
  
  try {
    const used = new Blob(Object.values(localStorage)).size;
    const quota = 5 * 1024 * 1024; // 5MB typical limit
    
    return {
      used,
      quota,
      available: quota - used,
      percentage: (used / quota) * 100
    };
  } catch (error) {
    console.error('Error getting storage info:', error);
    return null;
  }
};

/**
 * Checks if localStorage is available
 */
export const isStorageAvailable = () => {
  try {
    if (typeof window === 'undefined') return false;
    
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
};

/**
 * Migrates old storage keys to new format
 */
export const migrateStorage = (migrations = {}) => {
  if (!isStorageAvailable()) return false;
  
  try {
    Object.entries(migrations).forEach(([oldKey, newKey]) => {
      const value = localStorage.getItem(oldKey);
      if (value !== null) {
        localStorage.setItem(newKey, value);
        localStorage.removeItem(oldKey);
      }
    });
    return true;
  } catch (error) {
    console.error('Error migrating storage:', error);
    return false;
  }
};

/**
 * Exports all GitScroll data from storage
 */
export const exportData = () => {
  if (!isStorageAvailable()) return null;
  
  try {
    const data = {};
    Object.values(STORAGE_KEYS).forEach(key => {
      const value = getFromStorage(key);
      if (value !== null) {
        data[key] = value;
      }
    });
    
    return {
      ...data,
      exportedAt: new Date().toISOString(),
      version: '1.0.0'
    };
  } catch (error) {
    console.error('Error exporting data:', error);
    return null;
  }
};

/**
 * Imports GitScroll data to storage
 */
export const importData = (data) => {
  if (!isStorageAvailable() || !data) return false;
  
  try {
    Object.entries(data).forEach(([key, value]) => {
      if (Object.values(STORAGE_KEYS).includes(key)) {
        setToStorage(key, value);
      }
    });
    return true;
  } catch (error) {
    console.error('Error importing data:', error);
    return false;
  }
};