import { useApp } from '../../context/AppContext';
import { useState } from 'react';
import MessagingModal from '../common/MessagingModal';

export default function Header() {
  const { state } = useApp();
  const [isMessagingOpen, setIsMessagingOpen] = useState(false);

  if (state.currentView === 'reels') {
    return null; // Hide header on reels view
  }

  return (
    <header className="border-b border-gray-300 z-10 px-4" style={{ backgroundColor: '#ccdbd9' }}>
      <div className="flex justify-between items-center h-14">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-red-600 tracking-tight">
            GitScroll
          </h1>
        </div>

        {/* Navigation Icons */}
        <nav className="flex items-center">
          <button
            onClick={() => setIsMessagingOpen(true)}
            className="text-gray-800 relative"
          >
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <path d="M8 10h8"></path>
                <path d="M8 14h6"></path>
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </button>
        </nav>
      </div>

      {/* Messaging Modal */}
      <MessagingModal
        isOpen={isMessagingOpen}
        onClose={() => setIsMessagingOpen(false)}
      />
    </header>
  );
}