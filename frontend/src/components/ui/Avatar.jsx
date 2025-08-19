import { useState } from 'react';

export default function Avatar({ 
  src, 
  alt, 
  size = 'md', 
  fallback, 
  className = '',
  onClick,
  showOnlineStatus = false,
  isOnline = false
}) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
    '2xl': 'w-20 h-20 text-2xl'
  };

  const statusSizes = {
    xs: 'w-2 h-2 -bottom-0 -right-0',
    sm: 'w-2 h-2 -bottom-0 -right-0',
    md: 'w-3 h-3 -bottom-0.5 -right-0.5',
    lg: 'w-3 h-3 -bottom-0.5 -right-0.5',
    xl: 'w-4 h-4 -bottom-1 -right-1',
    '2xl': 'w-4 h-4 -bottom-1 -right-1'
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const renderFallback = () => {
    if (fallback) {
      return fallback;
    }
    
    const initials = alt ? alt.split(' ').map(name => name[0]).join('').toUpperCase().slice(0, 2) : '?';
    return (
      <div className={`${sizeClasses[size]} bg-gray-500 rounded-full flex items-center justify-center text-white font-medium ${className}`}>
        {initials}
      </div>
    );
  };

  return (
    <div className={`relative inline-block ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
      {!imageError && src ? (
        <img
          src={src}
          alt={alt}
          className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
          onError={handleImageError}
        />
      ) : (
        renderFallback()
      )}
      
      {showOnlineStatus && (
        <div className={`absolute ${statusSizes[size]} ${isOnline ? 'bg-green-500' : 'bg-gray-400'} rounded-full border-2 border-white`}></div>
      )}
    </div>
  );
}