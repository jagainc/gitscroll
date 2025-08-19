import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { reels } from '../../data/mockData';

export default function Reels() {
  const { state, dispatch } = useApp();

  useEffect(() => {
    dispatch({ type: 'SET_REELS', payload: reels });
  }, [dispatch]);

  return (
    <div className="h-full bg-black reels-container overflow-y-auto">
      {state.reels.map((reel) => (
        <div key={reel.id} className="reel-item h-full flex-shrink-0 relative">
          <img 
            src={reel.videoUrl} 
            className="w-full h-full object-cover" 
            alt={`Reel by ${reel.username}`} 
          />
          
          {/* Bottom overlay with user info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex items-center mb-2">
              <img 
                src={reel.profileImg} 
                className="w-8 h-8 rounded-full border-2 border-white" 
                alt={reel.username} 
              />
              <p className="ml-2 font-semibold text-sm">{reel.username}</p>
              <button className="ml-4 border border-white rounded px-2 py-0.5 text-xs font-semibold">
                Follow
              </button>
            </div>
            <p className="text-sm">{reel.caption}</p>
          </div>

          {/* Right side actions */}
          <div className="absolute bottom-14 right-0 p-4 flex flex-col items-center space-y-4 text-white">
            <button className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span className="text-xs font-semibold">{reel.likes}</span>
            </button>
            
            <button className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span className="text-xs font-semibold">{reel.comments}</span>
            </button>
            
            <button className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              <span className="text-xs font-semibold">{reel.shares}</span>
            </button>
            
            <button className="mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}