// GitScroll Constants

// App Configuration
export const APP_CONFIG = {
  name: 'GitScroll',
  version: '1.0.0',
  description: 'Developer-focused social platform',
  author: 'GitScroll Team'
};

// API Configuration
export const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  retryAttempts: 3
};

// Storage Keys
export const STORAGE_KEYS = {
  user: 'gitscroll_user',
  token: 'gitscroll_token',
  theme: 'gitscroll_theme',
  preferences: 'gitscroll_preferences',
  drafts: 'gitscroll_drafts',
  recentSearches: 'gitscroll_recent_searches'
};

// Programming Languages
export const PROGRAMMING_LANGUAGES = {
  javascript: { name: 'JavaScript', color: '#f1e05a', extension: '.js' },
  typescript: { name: 'TypeScript', color: '#3178c6', extension: '.ts' },
  python: { name: 'Python', color: '#3572a5', extension: '.py' },
  java: { name: 'Java', color: '#b07219', extension: '.java' },
  csharp: { name: 'C#', color: '#239120', extension: '.cs' },
  cpp: { name: 'C++', color: '#f34b7d', extension: '.cpp' },
  c: { name: 'C', color: '#555555', extension: '.c' },
  php: { name: 'PHP', color: '#777bb4', extension: '.php' },
  ruby: { name: 'Ruby', color: '#701516', extension: '.rb' },
  go: { name: 'Go', color: '#00add8', extension: '.go' },
  rust: { name: 'Rust', color: '#dea584', extension: '.rs' },
  swift: { name: 'Swift', color: '#ffac45', extension: '.swift' },
  kotlin: { name: 'Kotlin', color: '#f18e33', extension: '.kt' },
  dart: { name: 'Dart', color: '#00b4ab', extension: '.dart' },
  scala: { name: 'Scala', color: '#c22d40', extension: '.scala' },
  r: { name: 'R', color: '#198ce7', extension: '.r' },
  matlab: { name: 'MATLAB', color: '#e16737', extension: '.m' },
  shell: { name: 'Shell', color: '#89e051', extension: '.sh' },
  powershell: { name: 'PowerShell', color: '#012456', extension: '.ps1' },
  sql: { name: 'SQL', color: '#e38c00', extension: '.sql' },
  html: { name: 'HTML', color: '#e34c26', extension: '.html' },
  css: { name: 'CSS', color: '#1572b6', extension: '.css' },
  scss: { name: 'SCSS', color: '#cf649a', extension: '.scss' },
  vue: { name: 'Vue', color: '#4fc08d', extension: '.vue' },
  react: { name: 'React', color: '#61dafb', extension: '.jsx' },
  angular: { name: 'Angular', color: '#dd0031', extension: '.ts' },
  svelte: { name: 'Svelte', color: '#ff3e00', extension: '.svelte' },
  dockerfile: { name: 'Dockerfile', color: '#384d54', extension: 'Dockerfile' },
  yaml: { name: 'YAML', color: '#cb171e', extension: '.yml' },
  json: { name: 'JSON', color: '#292929', extension: '.json' },
  xml: { name: 'XML', color: '#0060ac', extension: '.xml' },
  markdown: { name: 'Markdown', color: '#083fa1', extension: '.md' }
};

// File Size Limits
export const FILE_LIMITS = {
  avatar: 5 * 1024 * 1024, // 5MB
  post: 10 * 1024 * 1024, // 10MB
  code: 1 * 1024 * 1024, // 1MB
  document: 50 * 1024 * 1024 // 50MB
};

// Validation Rules
export const VALIDATION_RULES = {
  username: {
    minLength: 3,
    maxLength: 30,
    pattern: /^[a-zA-Z0-9_-]+$/
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: {
    minLength: 8,
    maxLength: 128,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true
  },
  repositoryName: {
    minLength: 1,
    maxLength: 100,
    pattern: /^[a-zA-Z0-9._-]+$/
  },
  postContent: {
    maxLength: 2000
  },
  commentContent: {
    maxLength: 500
  }
};

// Time Constants
export const TIME_CONSTANTS = {
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  year: 365 * 24 * 60 * 60 * 1000
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503
};

// Error Messages
export const ERROR_MESSAGES = {
  network: 'Network error. Please check your connection.',
  unauthorized: 'You are not authorized to perform this action.',
  notFound: 'The requested resource was not found.',
  serverError: 'Server error. Please try again later.',
  validation: 'Please check your input and try again.',
  fileSize: 'File size exceeds the maximum limit.',
  fileType: 'File type is not supported.',
  rateLimited: 'Too many requests. Please wait before trying again.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  login: 'Successfully logged in!',
  logout: 'Successfully logged out!',
  register: 'Account created successfully!',
  postCreated: 'Post created successfully!',
  postUpdated: 'Post updated successfully!',
  postDeleted: 'Post deleted successfully!',
  profileUpdated: 'Profile updated successfully!',
  passwordChanged: 'Password changed successfully!',
  emailVerified: 'Email verified successfully!'
};

// Navigation Routes
export const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  profile: '/profile',
  settings: '/settings',
  search: '/search',
  notifications: '/notifications',
  messages: '/messages',
  repositories: '/repositories',
  followers: '/followers',
  following: '/following'
};

// Theme Configuration
export const THEME_CONFIG = {
  colors: {
    primary: '#ccdbd9',
    accent: '#ef4444',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
};

// Feature Flags
export const FEATURE_FLAGS = {
  enableMessaging: true,
  enableNotifications: true,
  enableDarkMode: false,
  enableAnalytics: true,
  enableBetaFeatures: false
};

// Default Values
export const DEFAULTS = {
  postsPerPage: 10,
  commentsPerPage: 20,
  searchResultsPerPage: 15,
  contributionGraphWeeks: 17,
  maxRecentSearches: 10,
  sessionTimeout: 24 * 60 * 60 * 1000, // 24 hours
  autoSaveInterval: 30 * 1000 // 30 seconds
};