'use client';

import {useInfiniteScroll} from './hooks/useInfiniteScroll';
import PostList from '../postList';
import {PostProp} from './types/post';

interface Props {
  posts: PostProp;
  loadMoreHandler: () => void;
}

export default function Posts({posts, loadMoreHandler}: Props) {
  const loaderRef = useInfiniteScroll(loadMoreHandler);

  return (
    <>
      <PostList posts={posts} loadMoreHandler={loadMoreHandler} />

      <div
        ref={loaderRef}
        className='flex h-10 items-center justify-center text-gray-500'
      >
        Loading more...
      </div>
    </>
  );
}
