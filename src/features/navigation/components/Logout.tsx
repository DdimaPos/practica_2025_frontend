import {LogOut} from 'lucide-react';

export default function Logout() {
  return (
    <button className='flex cursor-pointer items-center gap-2 transition-colors duration-300 hover:text-black'>
      <LogOut className='h-5 w-5' /> Log out
    </button>
  );
}
