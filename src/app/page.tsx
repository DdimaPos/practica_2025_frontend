import Posts from '@/features/postField';

export default function Home() {

  return (
    <div className='flex justify-between py-2'>
      <div className='mb-4 max-h-[80vh] w-5/8 overflow-y-auto rounded-lg bg-white p-4 shadow-sm scrollbar-hide'>
        <Posts />
      </div>

      <div className='w-1/5 bg-white'></div>
    </div>
  );
}
