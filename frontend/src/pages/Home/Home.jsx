import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { posts } from '../../data/mockData';
import Stories from '../../components/common/Stories';
import Post from '../../components/common/Post';

export default function Home() {
  const { state, dispatch } = useApp();

  useEffect(() => {
    dispatch({ type: 'SET_POSTS', payload: posts });
  }, [dispatch]);

  return (
    <div>
      {/* Stories */}
      <Stories />
      
      {/* Posts Feed */}
      <div className="space-y-2 bg-gray-100">
        {state.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}