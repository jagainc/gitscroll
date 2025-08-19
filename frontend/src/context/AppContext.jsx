import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  currentView: 'feed',
  selectedPost: null,
  isModalOpen: false,
  posts: [],
  stories: [],
  reels: []
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_VIEW':
      return { ...state, currentView: action.payload };
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    case 'SET_STORIES':
      return { ...state, stories: action.payload };
    case 'SET_REELS':
      return { ...state, reels: action.payload };
    case 'OPEN_POST_MODAL':
      return { ...state, selectedPost: action.payload, isModalOpen: true };
    case 'CLOSE_POST_MODAL':
      return { ...state, selectedPost: null, isModalOpen: false };
    case 'TOGGLE_LIKE':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload
            ? { ...post, likes: post.likes + (post.isLiked ? -1 : 1), isLiked: !post.isLiked }
            : post
        )
      };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}