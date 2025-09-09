import Link from "next/link";
import {  User, Settings, BookOpen, Users2, Github, DollarSign, PlusCircle, Layers, House} from "lucide-react";
import Logout from "./Logout";

export default function Navbar() {
  return (
    <div className="h-screen border-r flex flex-col p-15 justify-center items-center"> 
      <nav className="flex flex-col gap-15 text-[#818181] text-center">
        
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-2 hover:text-black transition-colors duration-300">
            <House /> Go to main
          </Link>
          <Link href="/profile" className="flex items-center gap-2 hover:text-black transition-colors duration-300">
            <User className="w-5 h-5" /> Profile
          </Link>
          <Link href="/settings" className="flex items-center gap-2 hover:text-black transition-colors duration-300">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </div>

        <div className="flex flex-col gap-5"> 
          <Link href="/students" className="flex items-center gap-2 hover:text-black transition-colors duration-300">
            <Users2 className="w-5 h-5" /> Students
          </Link>
          <Link href="/professors" className="flex items-center gap-2 hover:text-black transition-colors duration-300">
            <BookOpen className="w-5 h-5" /> Professors
          </Link>
          <Link href="/clubs" className="flex items-center gap-2 hover:text-black transition-colors duration-300">
            <Layers className="w-5 h-5" /> Clubs
          </Link>
          <Link href="/channels" className="flex items-center gap-2 hover:text-black transition-colors duration-300">
            <Layers className="w-5 h-5" /> All Channels
          </Link>
          <Link href="/create-channel" className="flex items-center gap-2 hover:text-black transition-colors duration-300">
            <PlusCircle className="w-5 h-5" /> Create Channel
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <Link href="https://github.com/DdimaPos/practica_2025_documentation_vault"      target="_blank"     rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-black transition-colors duration-300" >
            <Github className="w-5 h-5" /> Github
          </Link>
          <Link href="https://github.com/DdimaPos/practica_2025_documentation_vault"      target="_blank"     rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-black transition-colors duration-300" >
            <DollarSign className="w-5 h-5" /> Support
          </Link>
        </div>

        <Logout />
      </nav>
    </div>
  );
}
