import PostCard from './components/PostCard';
import {PostProp} from './types/post';

type PostListProps = {
  posts: PostProp[];
};

export default function PostList({posts}: PostListProps) {
  if (!posts || posts.length === 0) {
    return <p>Still no posts here.</p>;
  }

  return (
    <>
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </>
  );
}
