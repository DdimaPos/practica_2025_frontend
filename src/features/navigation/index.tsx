import Link from 'next/link';
import {
  User,
  Settings,
  BookOpen,
  Users2,
  Github,
  DollarSign,
  PlusCircle,
  Layers,
  House,
} from 'lucide-react';
import Logout from './components/Logout';

export default function Navbar() {
  return (
    <div className='flex h-screen flex-col items-center justify-center border-r p-15'>
      <nav className='flex flex-col gap-15 text-center text-[#818181]'>
        <div className='flex flex-col gap-5'>
          <Link
            href='/'
            className='flex items-center gap-2 transition-colors duration-300 hover:text-black'
          >
            <House /> Go to main
          </Link>
          <Link
            href='/profile'
            className='flex items-center gap-2 transition-colors duration-300 hover:text-black'
          >
            <User className='h-5 w-5' /> Profile
          </Link>
          <Link
            href='/settings'
            className='flex items-center gap-2 transition-colors duration-300 hover:text-black'
          >
            <Settings className='h-5 w-5' /> Settings
          </Link>
        </div>

        <div className='flex flex-col gap-5'>
          <Link
            href='/students'
            className='flex items-center gap-2 transition-colors duration-300 hover:text-black'
          >
            <Users2 className='h-5 w-5' /> Students
          </Link>
          <Link
            href='/professors'
            className='flex items-center gap-2 transition-colors duration-300 hover:text-black'
          >
            <BookOpen className='h-5 w-5' /> Professors
          </Link>
          <Link
            href='/clubs'
            className='flex items-center gap-2 transition-colors duration-300 hover:text-black'
          >
            <Layers className='h-5 w-5' /> Clubs
          </Link>
          <Link
            href='/channels'
            className='flex items-center gap-2 transition-colors duration-300 hover:text-black'
          >
            <Layers className='h-5 w-5' /> All Channels
          </Link>
          <Link
            href='/create-channel'
            className='flex items-center gap-2 transition-colors duration-300 hover:text-black'
          >
            <PlusCircle className='h-5 w-5' /> Create Channel
          </Link>
        </div>

        <div className='flex flex-col gap-5'>
          <Link
            href='https://github.com/DdimaPos/practica_2025_documentation_vault'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 transition-colors duration-300 hover:text-black'
          >
            <Github className='h-5 w-5' /> Github
          </Link>
          <Link
            href='https://github.com/DdimaPos/practica_2025_documentation_vault'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 transition-colors duration-300 hover:text-black'
          >
            <DollarSign className='h-5 w-5' /> Support
          </Link>
        </div>

        <Logout />
      </nav>
    </div>
  );
}
