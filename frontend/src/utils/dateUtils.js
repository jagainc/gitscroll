// GitScroll Date Utilities

import { TIME_CONSTANTS } from './constants';

/**
 * Formats a date to a relative time string (e.g., "2 hours ago")
 * @param {Date|string|number} date - Date to format
 * @returns {string} - Formatted relative time
 */
export const formatRelativeTime = (date) => {
  const now = new Date();
  const targetDate = new Date(date);
  const diffMs = now - targetDate;
  
  if (diffMs < TIME_CONSTANTS.minute) {
    return 'just now';
  }
  
  if (diffMs < TIME_CONSTANTS.hour) {
    const minutes = Math.floor(diffMs / TIME_CONSTANTS.minute);
    return `${minutes}m ago`;
  }
  
  if (diffMs < TIME_CONSTANTS.day) {
    const hours = Math.floor(diffMs / TIME_CONSTANTS.hour);
    return `${hours}h ago`;
  }
  
  if (diffMs < TIME_CONSTANTS.week) {
    const days = Math.floor(diffMs / TIME_CONSTANTS.day);
    return `${days}d ago`;
  }
  
  if (diffMs < TIME_CONSTANTS.month) {
    const weeks = Math.floor(diffMs / TIME_CONSTANTS.week);
    return `${weeks}w ago`;
  }
  
  if (diffMs < TIME_CONSTANTS.year) {
    const months = Math.floor(diffMs / TIME_CONSTANTS.month);
    return `${months}mo ago`;
  }
  
  const years = Math.floor(diffMs / TIME_CONSTANTS.year);
  return `${years}y ago`;
};

/**
 * Formats a date for display in posts/comments
 * @param {Date|string|number} date - Date to format
 * @returns {string} - Formatted date string
 */
export const formatPostDate = (date) => {
  const targetDate = new Date(date);
  const now = new Date();
  const diffMs = now - targetDate;
  
  // If less than 24 hours, show relative time
  if (diffMs < TIME_CONSTANTS.day) {
    return formatRelativeTime(date);
  }
  
  // If this year, show month and day
  if (targetDate.getFullYear() === now.getFullYear()) {
    return targetDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  }
  
  // Otherwise show full date
  return targetDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Formats a date for commit timestamps
 * @param {Date|string|number} date - Date to format
 * @returns {string} - Formatted commit date
 */
export const formatCommitDate = (date) => {
  const targetDate = new Date(date);
  const now = new Date();
  const diffMs = now - targetDate;
  
  if (diffMs < TIME_CONSTANTS.day) {
    return formatRelativeTime(date);
  }
  
  return targetDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Formats a date for chat messages
 * @param {Date|string|number} date - Date to format
 * @returns {string} - Formatted chat time
 */
export const formatChatTime = (date) => {
  const targetDate = new Date(date);
  const now = new Date();
  const diffMs = now - targetDate;
  
  // If today, show time
  if (diffMs < TIME_CONSTANTS.day && targetDate.toDateString() === now.toDateString()) {
    return targetDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }
  
  // If yesterday
  const yesterday = new Date(now - TIME_CONSTANTS.day);
  if (targetDate.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  }
  
  // If this week, show day name
  if (diffMs < TIME_CONSTANTS.week) {
    return targetDate.toLocaleDateString('en-US', { weekday: 'long' });
  }
  
  // Otherwise show date
  return targetDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Gets the start and end dates for a contribution graph
 * @param {number} weeks - Number of weeks to show (default 17)
 * @returns {object} - Object with startDate and endDate
 */
export const getContributionDateRange = (weeks = 17) => {
  const endDate = new Date();
  const startDate = new Date(endDate - (weeks * TIME_CONSTANTS.week));
  
  // Adjust to start on Sunday
  const dayOfWeek = startDate.getDay();
  startDate.setDate(startDate.getDate() - dayOfWeek);
  
  return { startDate, endDate };
};

/**
 * Generates an array of dates for a contribution graph
 * @param {number} weeks - Number of weeks to generate
 * @returns {Array} - Array of date objects with week and day info
 */
export const generateContributionDates = (weeks = 17) => {
  const { startDate } = getContributionDateRange(weeks);
  const dates = [];
  
  for (let week = 0; week < weeks; week++) {
    for (let day = 0; day < 7; day++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + (week * 7) + day);
      
      dates.push({
        date,
        week,
        day,
        dateString: date.toISOString().split('T')[0]
      });
    }
  }
  
  return dates;
};

/**
 * Checks if a date is today
 * @param {Date|string|number} date - Date to check
 * @returns {boolean} - True if date is today
 */
export const isToday = (date) => {
  const targetDate = new Date(date);
  const today = new Date();
  return targetDate.toDateString() === today.toDateString();
};

/**
 * Checks if a date is yesterday
 * @param {Date|string|number} date - Date to check
 * @returns {boolean} - True if date is yesterday
 */
export const isYesterday = (date) => {
  const targetDate = new Date(date);
  const yesterday = new Date(Date.now() - TIME_CONSTANTS.day);
  return targetDate.toDateString() === yesterday.toDateString();
};

/**
 * Checks if a date is this week
 * @param {Date|string|number} date - Date to check
 * @returns {boolean} - True if date is this week
 */
export const isThisWeek = (date) => {
  const targetDate = new Date(date);
  const now = new Date();
  const diffMs = now - targetDate;
  return diffMs < TIME_CONSTANTS.week && diffMs >= 0;
};

/**
 * Gets the week number of the year
 * @param {Date|string|number} date - Date to get week number for
 * @returns {number} - Week number (1-53)
 */
export const getWeekNumber = (date) => {
  const targetDate = new Date(date);
  const firstDayOfYear = new Date(targetDate.getFullYear(), 0, 1);
  const pastDaysOfYear = (targetDate - firstDayOfYear) / TIME_CONSTANTS.day;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

/**
 * Formats duration in milliseconds to human readable format
 * @param {number} ms - Duration in milliseconds
 * @returns {string} - Formatted duration
 */
export const formatDuration = (ms) => {
  if (ms < TIME_CONSTANTS.second) {
    return `${ms}ms`;
  }
  
  if (ms < TIME_CONSTANTS.minute) {
    const seconds = Math.floor(ms / TIME_CONSTANTS.second);
    return `${seconds}s`;
  }
  
  if (ms < TIME_CONSTANTS.hour) {
    const minutes = Math.floor(ms / TIME_CONSTANTS.minute);
    const seconds = Math.floor((ms % TIME_CONSTANTS.minute) / TIME_CONSTANTS.second);
    return seconds > 0 ? `${minutes}m ${seconds}s` : `${minutes}m`;
  }
  
  const hours = Math.floor(ms / TIME_CONSTANTS.hour);
  const minutes = Math.floor((ms % TIME_CONSTANTS.hour) / TIME_CONSTANTS.minute);
  return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
};

/**
 * Parses various date formats into a Date object
 * @param {string|number|Date} input - Date input to parse
 * @returns {Date|null} - Parsed date or null if invalid
 */
export const parseDate = (input) => {
  if (!input) return null;
  
  if (input instanceof Date) {
    return isNaN(input.getTime()) ? null : input;
  }
  
  const date = new Date(input);
  return isNaN(date.getTime()) ? null : date;
};

/**
 * Gets timezone offset in hours
 * @returns {number} - Timezone offset in hours
 */
export const getTimezoneOffset = () => {
  return -new Date().getTimezoneOffset() / 60;
};

/**
 * Converts UTC date to local timezone
 * @param {Date|string|number} utcDate - UTC date
 * @returns {Date} - Local date
 */
export const utcToLocal = (utcDate) => {
  const date = new Date(utcDate);
  return new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
};

/**
 * Converts local date to UTC
 * @param {Date|string|number} localDate - Local date
 * @returns {Date} - UTC date
 */
export const localToUtc = (localDate) => {
  const date = new Date(localDate);
  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
};