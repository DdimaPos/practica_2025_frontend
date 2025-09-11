import Posts from '@/features/postList';
import axios from 'axios';

const loadMoreHandler = () => {};

export default async function Home() {
  const res = await axios.get('https://example.com/api/posts');
  const posts = res.data;

  console.log(posts);

  return (
    <div className='flex justify-between py-2'>
      <div className='scrollbar-hide mb-4 max-h-[80vh] w-6/9 overflow-y-auto rounded-lg bg-white p-4 shadow-sm'>
        <Posts posts={posts} loadMoreHandler={loadMoreHandler} />
      </div>

      <div className='w-1/5 bg-white'></div>
    </div>
  );
}
