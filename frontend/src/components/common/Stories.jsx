import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { stories } from '../../data/mockData';

export default function Stories() {
  const { dispatch } = useApp();

  useEffect(() => {
    dispatch({ type: 'SET_STORIES', payload: stories });
  }, [dispatch]);

  return (
    <div className="border-b border-gray-300 p-4" style={{backgroundColor: '#ccdbd9'}}>
      <div className="flex space-x-3 overflow-x-auto hide-scrollbar pb-2">
        {/* Your Reel */}
        <div className="flex-shrink-0">
          <div className="relative w-24 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg border-2 border-dashed border-gray-400 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors">
            <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            <span className="text-white text-xs font-medium">Create</span>
          </div>
          <p className="text-xs text-center mt-2 text-gray-600 font-medium">Your Reel</p>
        </div>

        {/* Developer Reels */}
        {stories.map((story, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="relative w-24 h-32 rounded-lg overflow-hidden cursor-pointer group">
              {/* Reel Background with Tech Theme */}
              <div className={`w-full h-full bg-gradient-to-br ${index % 4 === 0 ? 'from-blue-600 to-blue-800' :
                  index % 4 === 1 ? 'from-green-600 to-green-800' :
                    index % 4 === 2 ? 'from-purple-600 to-purple-800' :
                      'from-orange-600 to-orange-800'
                } flex flex-col items-center justify-center relative`}>

                {/* Film Strip Holes */}
                <div className="absolute left-1 top-2 w-1 h-1 bg-black rounded-full opacity-30"></div>
                <div className="absolute left-1 top-6 w-1 h-1 bg-black rounded-full opacity-30"></div>
                <div className="absolute left-1 bottom-6 w-1 h-1 bg-black rounded-full opacity-30"></div>
                <div className="absolute left-1 bottom-2 w-1 h-1 bg-black rounded-full opacity-30"></div>

                <div className="absolute right-1 top-2 w-1 h-1 bg-black rounded-full opacity-30"></div>
                <div className="absolute right-1 top-6 w-1 h-1 bg-black rounded-full opacity-30"></div>
                <div className="absolute right-1 bottom-6 w-1 h-1 bg-black rounded-full opacity-30"></div>
                <div className="absolute right-1 bottom-2 w-1 h-1 bg-black rounded-full opacity-30"></div>

                {/* Tech Icon */}
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-sm">
                    {story.username.slice(0, 2).toUpperCase()}
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white bg-opacity-0 group-hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <polygon points="5,3 19,12 5,21"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-center mt-2 text-gray-700 font-medium truncate w-24">{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}