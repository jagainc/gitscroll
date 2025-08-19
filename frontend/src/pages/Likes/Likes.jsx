import { useState, useEffect } from 'react';

export default function Likes() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Generate GitHub-style notifications
    const generateNotifications = () => {
      const activities = [
        {
          id: 1,
          type: 'fork',
          user: 'sarah_dev',
          avatar: 'https://placehold.co/40x40/3498DB/FFFFFF?text=SD',
          action: 'forked your repository',
          target: 'react-todo-app',
          time: '2m ago',
          icon: 'fork'
        },
        {
          id: 2,
          type: 'like',
          user: 'code_ninja',
          avatar: 'https://placehold.co/40x40/E74C3C/FFFFFF?text=CN',
          action: 'liked your post',
          target: 'JavaScript async/await patterns',
          time: '5m ago',
          icon: 'heart'
        },
        {
          id: 3,
          type: 'commit',
          user: 'github',
          avatar: 'https://placehold.co/40x40/333333/FFFFFF?text=GH',
          action: 'New commit in',
          target: 'awesome-project',
          commit: 'feat: add user authentication',
          time: '12m ago',
          icon: 'commit'
        },
        {
          id: 4,
          type: 'star',
          user: 'dev_master',
          avatar: 'https://placehold.co/40x40/F1C40F/FFFFFF?text=DM',
          action: 'starred your repository',
          target: 'python-ml-toolkit',
          time: '1h ago',
          icon: 'star'
        },
        {
          id: 5,
          type: 'follow',
          user: 'react_guru',
          avatar: 'https://placehold.co/40x40/9B59B6/FFFFFF?text=RG',
          action: 'started following you',
          target: '',
          time: '2h ago',
          icon: 'user'
        },
        {
          id: 6,
          type: 'fork',
          user: 'fullstack_joe',
          avatar: 'https://placehold.co/40x40/2ECC71/FFFFFF?text=FJ',
          action: 'forked your repository',
          target: 'node-express-api',
          time: '3h ago',
          icon: 'fork'
        },
        {
          id: 7,
          type: 'pr',
          user: 'open_source_fan',
          avatar: 'https://placehold.co/40x40/1ABC9C/FFFFFF?text=OS',
          action: 'opened a pull request in',
          target: 'vue-dashboard',
          time: '4h ago',
          icon: 'pr'
        },
        {
          id: 8,
          type: 'like',
          user: 'js_wizard',
          avatar: 'https://placehold.co/40x40/E67E22/FFFFFF?text=JW',
          action: 'liked your code snippet',
          target: 'Redux state management',
          time: '6h ago',
          icon: 'heart'
        },
        {
          id: 9,
          type: 'commit',
          user: 'github',
          avatar: 'https://placehold.co/40x40/333333/FFFFFF?text=GH',
          action: 'New commit in',
          target: 'mobile-app-project',
          commit: 'fix: resolve memory leak in components',
          time: '8h ago',
          icon: 'commit'
        },
        {
          id: 10,
          type: 'mention',
          user: 'team_lead',
          avatar: 'https://placehold.co/40x40/8E44AD/FFFFFF?text=TL',
          action: 'mentioned you in',
          target: 'code review discussion',
          time: '1d ago',
          icon: 'mention'
        }
      ];
      setNotifications(activities);
    };

    generateNotifications();
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'fork':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
            <circle cx="12" cy="18" r="3"></circle>
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="18" cy="6" r="3"></circle>
            <path d="m18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path>
            <path d="m12 12v3"></path>
          </svg>
        );
      case 'heart':
      case 'like':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        );
      case 'star':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
          </svg>
        );
      case 'commit':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M1.05 12H7"></path>
            <path d="M17.01 12h5.95"></path>
          </svg>
        );
      case 'pr':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
            <circle cx="18" cy="18" r="3"></circle>
            <circle cx="6" cy="6" r="3"></circle>
            <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
            <line x1="6" y1="9" x2="6" y2="21"></line>
          </svg>
        );
      case 'user':
      case 'follow':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        );
      case 'mention':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        );
    }
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Activity</h2>

        <div className="space-y-3">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors bg-white">
              {/* User Avatar */}
              <img
                src={notification.avatar}
                className="w-10 h-10 rounded-full flex-shrink-0"
                alt={notification.user}
              />

              {/* Notification Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  {getIcon(notification.type)}
                  <span className="text-sm font-medium text-gray-900">
                    {notification.user}
                  </span>
                  <span className="text-sm text-gray-600">
                    {notification.action}
                  </span>
                </div>

                {notification.target && (
                  <p className="text-sm font-medium text-gray-800 mb-1">
                    {notification.target}
                  </p>
                )}

                {notification.commit && (
                  <p className="text-xs text-gray-600 font-mono bg-gray-100 px-2 py-1 rounded mb-1">
                    {notification.commit}
                  </p>
                )}

                <p className="text-xs text-gray-500">
                  {notification.time}
                </p>
              </div>

              {/* Action Button */}
              <div className="flex-shrink-0">
                {notification.type === 'follow' ? (
                  <button className="px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors">
                    Follow Back
                  </button>
                ) : notification.type === 'pr' ? (
                  <button className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                    Review
                  </button>
                ) : (
                  <button className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                    View
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}