import { useApp } from '../../context/AppContext';

const navItems = [
  {
    id: 'feed',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    )
  },
  {
    id: 'search',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    )
  },
  {
    id: 'reels',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    id: 'likes',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    )
  }
];

export default function BottomNavigation() {
  const { state, dispatch } = useApp();

  const handleNavClick = (viewId) => {
    dispatch({ type: 'SET_VIEW', payload: viewId });
  };

  return (
    <footer className="border-t border-gray-300 flex-shrink-0" style={{backgroundColor: '#ccdbd9'}}>
      <nav className="flex justify-around items-center h-14">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`nav-btn p-2 ${state.currentView === item.id ? 'text-black' : 'text-gray-500'}`}
          >
            {item.icon}
          </button>
        ))}
        <button
          onClick={() => handleNavClick('profile')}
          className="nav-btn p-2"
        >
          <img 
            src="https://placehold.co/28x28/EFEFEF/333333?text=Me" 
            className="w-7 h-7 rounded-full" 
            alt="My Profile" 
          />
        </button>
      </nav>
    </footer>
  );
}