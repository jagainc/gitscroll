import { useApp } from '../../context/AppContext';

export default function Post({ post }) {
  const { dispatch } = useApp();

  const handleLike = () => {
    dispatch({ type: 'TOGGLE_LIKE', payload: post.id });
  };

  const handleCommentClick = () => {
    dispatch({ type: 'OPEN_POST_MODAL', payload: post });
  };

  const handleImageClick = () => {
    dispatch({ type: 'OPEN_POST_MODAL', payload: post });
  };

  return (
    <div className="border-b border-gray-300" style={{backgroundColor: '#ccdbd9'}}>
      {/* Post Header */}
      <div className="flex items-center p-3">
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
        <button className="ml-auto text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </button>
      </div>

      {/* Post Image */}
      <div>
        <img 
          src={post.postImg} 
          className="w-full object-cover cursor-pointer" 
          alt={`Post by ${post.username}`}
          onClick={handleImageClick}
        />
      </div>

      {/* Post Actions */}
      <div className="p-3">
        <div className="flex items-center space-x-4 mb-2">
          <button onClick={handleLike} className="like-btn">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill={post.isLiked ? "red" : "none"} 
              stroke={post.isLiked ? "red" : "currentColor"} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-7 h-7 hover:text-gray-500"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button onClick={handleCommentClick} className="comment-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 hover:text-gray-500">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 hover:text-gray-500">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
          <button className="ml-auto fork-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 hover:text-gray-500">
              <circle cx="12" cy="18" r="3"></circle>
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="18" cy="6" r="3"></circle>
              <path d="m18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path>
              <path d="m12 12v3"></path>
            </svg>
          </button>
        </div>

        {/* Likes Count */}
        <p className="text-sm font-semibold">{post.likes.toLocaleString()} likes</p>
        
        {/* Caption */}
        <p className="text-sm mt-1">
          <span className="font-semibold">{post.username}</span> {post.caption}
        </p>
        
        {/* Comments */}
        <button 
          onClick={handleCommentClick}
          className="text-sm text-gray-500 mt-2"
        >
          View all {post.comments.length} comments
        </button>
        
        {/* Time */}
        <p className="text-gray-400 text-xs mt-2 uppercase">{post.time}</p>
      </div>

      {/* Comment Input */}
      <div className="border-t border-gray-200 px-3 py-2">
        <form className="flex items-center">
          <input 
            type="text" 
            className="w-full bg-transparent focus:outline-none text-sm" 
            placeholder="Add a comment..." 
          />
          <button 
            type="submit" 
            className="text-blue-500 font-semibold text-sm ml-4 opacity-50"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}