// GitScroll Validation Utilities

import { VALIDATION_RULES, PROGRAMMING_LANGUAGES } from './constants';

/**
 * Validates an email address
 * @param {string} email - Email to validate
 * @returns {object} - Validation result with isValid and error
 */
export const validateEmail = (email) => {
    if (!email) {
        return { isValid: false, error: 'Email is required' };
    }

    if (!VALIDATION_RULES.email.pattern.test(email)) {
        return { isValid: false, error: 'Please enter a valid email address' };
    }

    return { isValid: true, error: null };
};

/**
 * Validates a username
 * @param {string} username - Username to validate
 * @returns {object} - Validation result with isValid and error
 */
export const validateUsername = (username) => {
    if (!username) {
        return { isValid: false, error: 'Username is required' };
    }

    if (username.length < VALIDATION_RULES.username.minLength) {
        return { isValid: false, error: `Username must be at least ${VALIDATION_RULES.username.minLength} characters` };
    }

    if (username.length > VALIDATION_RULES.username.maxLength) {
        return { isValid: false, error: `Username must be no more than ${VALIDATION_RULES.username.maxLength} characters` };
    }

    if (!VALIDATION_RULES.username.pattern.test(username)) {
        return { isValid: false, error: 'Username can only contain letters, numbers, underscores, and hyphens' };
    }

    return { isValid: true, error: null };
};

/**
 * Validates a password
 * @param {string} password - Password to validate
 * @returns {object} - Validation result with isValid, error, and strength
 */
export const validatePassword = (password) => {
    if (!password) {
        return { isValid: false, error: 'Password is required', strength: 0 };
    }

    const rules = VALIDATION_RULES.password;
    const errors = [];
    let strength = 0;

    if (password.length < rules.minLength) {
        errors.push(`Password must be at least ${rules.minLength} characters`);
    } else {
        strength += 1;
    }

    if (password.length > rules.maxLength) {
        errors.push(`Password must be no more than ${rules.maxLength} characters`);
    }

    if (rules.requireUppercase && !/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
    } else if (rules.requireUppercase) {
        strength += 1;
    }

    if (rules.requireLowercase && !/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
    } else if (rules.requireLowercase) {
        strength += 1;
    }

    if (rules.requireNumbers && !/\d/.test(password)) {
        errors.push('Password must contain at least one number');
    } else if (rules.requireNumbers) {
        strength += 1;
    }

    if (rules.requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push('Password must contain at least one special character');
    } else if (rules.requireSpecialChars) {
        strength += 1;
    }

    return {
        isValid: errors.length === 0,
        error: errors.length > 0 ? errors[0] : null,
        strength: Math.min(strength, 5),
        allErrors: errors
    };
};

/**
 * Validates a repository name
 * @param {string} name - Repository name to validate
 * @returns {object} - Validation result with isValid and error
 */
export const validateRepositoryName = (name) => {
    if (!name) {
        return { isValid: false, error: 'Repository name is required' };
    }

    if (name.length < VALIDATION_RULES.repositoryName.minLength) {
        return { isValid: false, error: 'Repository name cannot be empty' };
    }

    if (name.length > VALIDATION_RULES.repositoryName.maxLength) {
        return { isValid: false, error: `Repository name must be no more than ${VALIDATION_RULES.repositoryName.maxLength} characters` };
    }

    if (!VALIDATION_RULES.repositoryName.pattern.test(name)) {
        return { isValid: false, error: 'Repository name can only contain letters, numbers, dots, underscores, and hyphens' };
    }

    // Check for reserved names
    const reservedNames = ['api', 'www', 'admin', 'root', 'null', 'undefined'];
    if (reservedNames.includes(name.toLowerCase())) {
        return { isValid: false, error: 'This repository name is reserved' };
    }

    return { isValid: true, error: null };
};

/**
 * Validates post content
 * @param {string} content - Post content to validate
 * @returns {object} - Validation result with isValid and error
 */
export const validatePostContent = (content) => {
    if (!content || content.trim().length === 0) {
        return { isValid: false, error: 'Post content is required' };
    }

    if (content.length > VALIDATION_RULES.postContent.maxLength) {
        return { isValid: false, error: `Post content must be no more than ${VALIDATION_RULES.postContent.maxLength} characters` };
    }

    return { isValid: true, error: null };
};

/**
 * Validates comment content
 * @param {string} content - Comment content to validate
 * @returns {object} - Validation result with isValid and error
 */
export const validateCommentContent = (content) => {
    if (!content || content.trim().length === 0) {
        return { isValid: false, error: 'Comment cannot be empty' };
    }

    if (content.length > VALIDATION_RULES.commentContent.maxLength) {
        return { isValid: false, error: `Comment must be no more than ${VALIDATION_RULES.commentContent.maxLength} characters` };
    }

    return { isValid: true, error: null };
};

/**
 * Validates a URL
 * @param {string} url - URL to validate
 * @returns {object} - Validation result with isValid and error
 */
export const validateUrl = (url) => {
    if (!url) {
        return { isValid: false, error: 'URL is required' };
    }

    try {
        new URL(url);
        return { isValid: true, error: null };
    } catch {
        return { isValid: false, error: 'Please enter a valid URL' };
    }
};

/**
 * Validates a GitHub username
 * @param {string} username - GitHub username to validate
 * @returns {object} - Validation result with isValid and error
 */
export const validateGitHubUsername = (username) => {
    if (!username) {
        return { isValid: false, error: 'GitHub username is required' };
    }

    // GitHub username rules
    if (username.length > 39) {
        return { isValid: false, error: 'GitHub username must be no more than 39 characters' };
    }

    if (!/^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(username)) {
        return { isValid: false, error: 'GitHub username can only contain alphanumeric characters and hyphens, and cannot start or end with a hyphen' };
    }

    return { isValid: true, error: null };
};

/**
 * Validates file upload
 * @param {File} file - File to validate
 * @param {object} options - Validation options
 * @returns {object} - Validation result with isValid and error
 */
export const validateFile = (file, options = {}) => {
    const {
        maxSize = 10 * 1024 * 1024, // 10MB default
        allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
        allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
    } = options;

    if (!file) {
        return { isValid: false, error: 'File is required' };
    }

    if (file.size > maxSize) {
        return { isValid: false, error: `File size must be less than ${formatFileSize(maxSize)}` };
    }

    if (!allowedTypes.includes(file.type)) {
        return { isValid: false, error: `File type ${file.type} is not allowed` };
    }

    const extension = '.' + file.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(extension)) {
        return { isValid: false, error: `File extension ${extension} is not allowed` };
    }

    return { isValid: true, error: null };
};

/**
 * Validates programming language
 * @param {string} language - Programming language to validate
 * @returns {object} - Validation result with isValid and error
 */
export const validateProgrammingLanguage = (language) => {
    if (!language) {
        return { isValid: false, error: 'Programming language is required' };
    }

    const normalizedLanguage = language.toLowerCase();
    if (!PROGRAMMING_LANGUAGES[normalizedLanguage]) {
        return { isValid: false, error: 'Unsupported programming language' };
    }

    return { isValid: true, error: null };
};

/**
 * Validates code snippet
 * @param {string} code - Code to validate
 * @param {string} language - Programming language
 * @returns {object} - Validation result with isValid and error
 */
export const validateCodeSnippet = (code, language) => {
    if (!code || code.trim().length === 0) {
        return { isValid: false, error: 'Code snippet is required' };
    }

    if (code.length > 10000) { // 10KB limit for code snippets
        return { isValid: false, error: 'Code snippet is too long (max 10KB)' };
    }

    const languageValidation = validateProgrammingLanguage(language);
    if (!languageValidation.isValid) {
        return languageValidation;
    }

    return { isValid: true, error: null };
};

/**
 * Validates form data using multiple validators
 * @param {object} data - Form data to validate
 * @param {object} validators - Object with field validators
 * @returns {object} - Validation result with isValid and errors
 */
export const validateForm = (data, validators) => {
    const errors = {};
    let isValid = true;

    Object.keys(validators).forEach(field => {
        const validator = validators[field];
        const value = data[field];

        if (typeof validator === 'function') {
            const result = validator(value);
            if (!result.isValid) {
                errors[field] = result.error;
                isValid = false;
            }
        }
    });

    return { isValid, errors };
};

/**
 * Helper function to format file size
 * @param {number} bytes - File size in bytes
 * @returns {string} - Formatted file size
 */
const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};