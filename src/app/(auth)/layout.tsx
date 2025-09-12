import {TopBar} from '@/components/generic/TopBar';

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <TopBar className='h-[10vh]' />
      <main className='flex h-[90vh] items-center justify-center'>
        {children}
      </main>
    </>
  );
}
