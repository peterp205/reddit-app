import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// 1. Import your Post component (you'll create this next!)
import Post from '../../components/Post/Post.js';
import { 
  fetchHotPosts, 
  selectPosts, 
  selectStatus, 
  selectError 
} from '../redditSlice';

function Posts() {
  const dispatch = useDispatch();
  // 2. Use the selectors you created in Step 3
  const posts = useSelector(selectPosts);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchHotPosts());
    }
  }, [status, dispatch]); // Add dependencies for best practice

  // 3. Handle loading and error states
  if (status === 'loading') {
    return <div className="loader">Loading posts...</div>;
  }

  if (status === 'failed') {
    return <div className="error">Error: {error}</div>;
  }

  if (status === 'succeeded' && posts.length === 0) {
    return <div className="no-posts">No posts found for this search term.</div>;
  }

  // 4. Final return: Render the list of posts
  return (
    <section className="posts-list">
      {posts.map((post) => (
        // Render a <Post /> component for each item in the array
        // We pass the entire 'post' object as a prop
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}

export default Posts;