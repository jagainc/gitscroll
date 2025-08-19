// GitScroll Formatting Utilities

/**
 * Formats a number with appropriate suffixes (K, M, B)
 */
export const formatNumber = (num, precision = 1) => {
  if (num === null || num === undefined || isNaN(num)) return '0';
  
  const absNum = Math.abs(num);
  
  if (absNum >= 1000000000) return (num / 1000000000).toFixed(precision) + 'B';
  if (absNum >= 1000000) return (num / 1000000).toFixed(precision) + 'M';
  if (absNum >= 1000) return (num / 1000).toFixed(precision) + 'K';
  
  return num.toString();
};

/**
 * Formats file size in bytes to human readable format
 */
export const formatFileSize = (bytes, precision = 2) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
};

/**
 * Formats repository names for display
 */
export const formatRepositoryName = (owner, name) => {
  if (!owner || !name) return '';
  return `${owner}/${name}`;
};

/**
 * Formats commit hash for display (shortened)
 */
export const formatCommitHash = (hash, length = 7) => {
  if (!hash) return '';
  return hash.substring(0, length);
};

/**
 * Formats username with @ prefix
 */
export const formatUsername = (username) => {
  if (!username) return '';
  return username.startsWith('@') ? username : `@${username}`;
};

/**
 * Truncates text with ellipsis
 */
export const truncateText = (text, maxLength, suffix = '...') => {
  if (!text || text.length <= maxLength) return text || '';
  return text.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Capitalizes the first letter of a string
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Formats contribution count for display
 */
export const formatContributionCount = (count) => {
  if (count === 0) return 'No contributions';
  if (count === 1) return '1 contribution';
  return `${formatNumber(count)} contributions`;
};

/**
 * Formats programming language name for display
 */
export const formatLanguageName = (language) => {
  if (!language) return 'Unknown';
  
  const languageMap = {
    'js': 'JavaScript',
    'ts': 'TypeScript',
    'py': 'Python',
    'rb': 'Ruby',
    'cpp': 'C++',
    'cs': 'C#',
    'php': 'PHP',
    'go': 'Go',
    'rs': 'Rust',
    'kt': 'Kotlin',
    'swift': 'Swift',
    'java': 'Java',
    'html': 'HTML',
    'css': 'CSS',
    'scss': 'SCSS',
    'sql': 'SQL',
    'sh': 'Shell',
    'md': 'Markdown',
    'json': 'JSON',
    'xml': 'XML',
    'yaml': 'YAML',
    'yml': 'YAML'
  };
  
  return languageMap[language.toLowerCase()] || capitalize(language);
};