import { AppProvider, useApp } from './context/AppContext';
import Header from './components/layout/Header';
import BottomNavigation from './components/layout/BottomNavigation';
import PostModal from './components/common/PostModal';
import Home from './pages/Home/Home';
import Reels from './pages/Reels/Reels';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';
import Likes from './pages/Likes/Likes';

function AppContent() {
  const { state } = useApp();

  const renderCurrentView = () => {
    switch (state.currentView) {
      case 'feed':
        return <Home />;
      case 'reels':
        return <Reels />;
      case 'search':
        return <Search />;
      case 'profile':
        return <Profile />;
      case 'likes':
        return <Likes />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="max-w-md mx-auto flex flex-col h-screen overflow-hidden" style={{backgroundColor: '#ccdbd9'}}>
      <Header />

      <main className={`flex-grow overflow-y-auto hide-scrollbar ${state.currentView === 'reels' ? 'bg-black' : ''
        }`} style={{backgroundColor: state.currentView === 'reels' ? '#000000' : '#ccdbd9'}}>
        {renderCurrentView()}
      </main>

      <BottomNavigation />
      <PostModal />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;