'use client';

import {usePosts} from './hooks/usePosts';
import {useInfiniteScroll} from './hooks/useInfiniteScroll';
import PostList from '../postList';

export default function Posts() {
  const {posts, loading, loadMore} = usePosts();
  const loaderRef = useInfiniteScroll(loadMore);

  if (loading) return <p>Loading posts...</p>;

  return (
    <>
      <PostList posts={posts} />

      <div
        ref={loaderRef}
        className='flex h-10 items-center justify-center text-gray-500'
      >
        Loading more...
      </div>
    </>
  );
}
