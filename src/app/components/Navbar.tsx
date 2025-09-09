"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-screen border-r flex flex-col p-15 justify-center items-center"> 
        <nav className="flex flex-col gap-15 text-[#818181] text-center">
            <div className="flex flex-col gap-5">
            <Link href="/" className="hover:text-black transition-colors duration-300">Go to main</Link>
            <Link href="/profile" className="hover:text-black transition-colors duration-300">Profile Item</Link>
            <Link href="/settings" className="hover:text-black transition-colors duration-300">Settings</Link>   
            </div>
            
            <div className="flex flex-col gap-5"> 
            <Link href="/students" className="hover:text-black transition-colors duration-300">Students</Link>
            <Link href="/professors" className="hover:text-black transition-colors duration-300">Professors</Link>
            <Link href="/clubs" className="hover:text-black transition-colors duration-300">Clubs</Link>
            <Link href="/channels" className="hover:text-black transition-colors duration-300">All Channels</Link>
            <Link href="/create-channel" className="hover:text-black transition-colors duration-300">Create Channel</Link>
            </div>

            <div className="flex flex-col gap-5">
            <Link href="https://github.com" className="hover:text-black transition-colors duration-300">Github</Link>
            <Link href="/support" className="hover:text-black transition-colors duration-300">Support</Link>
            </div>

            <Link href="/logout" className="hover:text-black transition-colors duration-300">Log in/out</Link>
        </nav>
    </div>

  );
}
