import { useState } from 'react';

export default function MessagingModal({ isOpen, onClose }) {
  const [currentView, setCurrentView] = useState('messages'); // 'messages' or 'chat'
  const [selectedUser, setSelectedUser] = useState(null);

  // Mock data for messages
  const messages = [
    { 
      username: 'react_dev', 
      img: 'https://placehold.co/64x64/61DAFB/FFFFFF?text=RD', 
      lastMessage: 'Hey! Check out this React hook I built', 
      time: '1h', 
      unread: true 
    },
    { 
      username: 'python_guru', 
      img: 'https://placehold.co/64x64/3776AB/FFFFFF?text=PG', 
      lastMessage: 'The ML model is working perfectly now!', 
      time: '3h', 
      unread: false 
    },
    { 
      username: 'js_ninja', 
      img: 'https://placehold.co/64x64/F7DF1E/000000?text=JS', 
      lastMessage: 'Sent you the code snippet for async/await', 
      time: 'yesterday', 
      unread: false 
    },
    { 
      username: 'vue_master', 
      img: 'https://placehold.co/64x64/4FC08D/FFFFFF?text=VM', 
      lastMessage: 'New Vue 3 composition API is amazing!', 
      time: '2d', 
      unread: true 
    },
    { 
      username: 'docker_fan', 
      img: 'https://placehold.co/64x64/2496ED/FFFFFF?text=DF', 
      lastMessage: 'Container deployment successful 🚀', 
      time: '3d', 
      unread: false 
    }
  ];

  // Mock chat history
  const chatHistory = {
    'react_dev': [
      { sender: 'react_dev', text: 'Hey! Check out this React hook I built', time: '2:30 PM' },
      { sender: 'me', text: 'Looks awesome! How does it handle state updates?', time: '2:32 PM' },
      { sender: 'react_dev', text: 'It uses useReducer internally for complex state logic', time: '2:35 PM' },
      { sender: 'me', text: 'Smart approach! Mind if I fork your repo?', time: '2:36 PM' },
      { sender: 'react_dev', text: 'Of course! Feel free to contribute too 😊', time: '2:38 PM' }
    ],
    'python_guru': [
      { sender: 'python_guru', text: 'The ML model is working perfectly now!', time: '11:15 AM' },
      { sender: 'me', text: 'That\'s great! What accuracy did you achieve?', time: '11:20 AM' },
      { sender: 'python_guru', text: '94.2% on the test set. Pretty happy with it!', time: '11:22 AM' }
    ],
    'js_ninja': [
      { sender: 'js_ninja', text: 'Sent you the code snippet for async/await', time: 'Yesterday' },
      { sender: 'me', text: 'Thanks! This will help with my API calls', time: 'Yesterday' }
    ],
    'vue_master': [
      { sender: 'vue_master', text: 'New Vue 3 composition API is amazing!', time: '2 days ago' },
      { sender: 'me', text: 'I need to try it out. Any good tutorials?', time: '2 days ago' },
      { sender: 'vue_master', text: 'Check out the official docs, they\'re really well done', time: '2 days ago' }
    ],
    'docker_fan': [
      { sender: 'docker_fan', text: 'Container deployment successful 🚀', time: '3 days ago' }
    ]
  };

  const handleUserClick = (username) => {
    setSelectedUser(username);
    setCurrentView('chat');
  };

  const handleBackToMessages = () => {
    setCurrentView('messages');
    setSelectedUser(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md h-[600px] flex flex-col overflow-hidden">
        
        {/* Messages List View */}
        {currentView === 'messages' && (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200" style={{backgroundColor: '#ccdbd9'}}>
              <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  onClick={() => handleUserClick(message.username)}
                  className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                >
                  <img 
                    src={message.img} 
                    className="w-12 h-12 rounded-full" 
                    alt={message.username} 
                  />
                  <div className="ml-3 flex-grow min-w-0">
                    <p className="font-semibold text-sm text-gray-900">{message.username}</p>
                    <p className={`text-xs truncate ${message.unread ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                      {message.lastMessage}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <p className="text-xs text-gray-400">{message.time}</p>
                    {message.unread && (
                      <div className="mt-1 w-2 h-2 bg-blue-500 rounded-full ml-auto"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Chat View */}
        {currentView === 'chat' && selectedUser && (
          <>
            {/* Chat Header */}
            <div className="flex items-center p-4 border-b border-gray-200" style={{backgroundColor: '#ccdbd9'}}>
              <button 
                onClick={handleBackToMessages}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors mr-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <img 
                src={messages.find(m => m.username === selectedUser)?.img} 
                className="w-8 h-8 rounded-full" 
                alt={selectedUser} 
              />
              <p className="ml-3 font-semibold text-gray-900">{selectedUser}</p>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors ml-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {(chatHistory[selectedUser] || []).map((msg, index) => {
                const isMe = msg.sender === 'me';
                return (
                  <div key={index} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                      isMe 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-900'
                    }`}>
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-1 ${isMe ? 'text-blue-100' : 'text-gray-500'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                />
                <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}