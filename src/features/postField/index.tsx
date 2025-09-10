'use client';

import PostCard from '../post';
import { usePosts } from '../postField/hooks/usePosts';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';

export default function Posts() {
  const { posts, loading, loadMore } = usePosts();
  const loaderRef = useInfiniteScroll(loadMore);

  if (loading) return <p>Loading posts...</p>;
  if (posts.length === 0) return <p>Still no posts here.</p>;

  return (
    <>
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}

      <div
        ref={loaderRef}
        className='flex h-10 items-center justify-center text-gray-500'
      >
        Loading more...
      </div>
    </>
  );
}
