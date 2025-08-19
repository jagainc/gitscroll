import { useApp } from '../../context/AppContext';

export default function PostModal() {
  const { state, dispatch } = useApp();

  if (!state.isModalOpen || !state.selectedPost) {
    return null;
  }

  const post = state.selectedPost;

  const closeModal = () => {
    dispatch({ type: 'CLOSE_POST_MODAL' });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
      onClick={handleBackdropClick}
    >
      <div className="rounded-lg w-11/12 max-w-sm h-auto max-h-[90vh] flex flex-col overflow-hidden" style={{backgroundColor: '#ccdbd9'}}>
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <img 
              src={post.profileImg} 
              className="w-8 h-8 rounded-full" 
              alt={post.username} 
            />
            <div className="ml-3">
              <p className="text-sm font-semibold">{post.username}</p>
              {post.location && (
                <p className="text-xs text-gray-500">{post.location}</p>
              )}
            </div>
          </div>
          <button onClick={closeModal} className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Image */}
        <div className="flex-shrink-0">
          <img 
            src={post.postImg} 
            className="w-full object-cover" 
            alt={`Post by ${post.username}`} 
          />
        </div>

        {/* Modal Content */}
        <div className="flex-grow overflow-y-auto p-4">
          {/* Caption */}
          <div className="mb-4">
            <p className="text-sm">
              <span className="font-semibold">{post.username}</span> {post.caption}
            </p>
            <p className="text-gray-400 text-xs mt-2 uppercase">{post.time}</p>
          </div>

          {/* Comments */}
          <div className="space-y-3">
            {post.comments.map((comment, index) => (
              <div key={index} className="flex">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                <div className="ml-3 flex-grow">
                  <p className="text-sm">
                    <span className="font-semibold">{comment.username}</span> {comment.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center space-x-4 mb-3">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          
          <p className="text-sm font-semibold mb-2">{post.likes.toLocaleString()} likes</p>
          
          <form className="flex items-center">
            <input 
              type="text" 
              className="w-full bg-transparent focus:outline-none text-sm border-none" 
              placeholder="Add a comment..." 
            />
            <button 
              type="submit" 
              className="text-blue-500 font-semibold text-sm ml-4"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}