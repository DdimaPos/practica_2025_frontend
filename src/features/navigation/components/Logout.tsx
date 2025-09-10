import { LogOut } from "lucide-react"; 

export default function Logout() { 
 

  return (
    <button 
      className="flex items-center gap-2 hover:text-black transition-colors duration-300 cursor-pointer"
    >
      <LogOut className="w-5 h-5" /> Log out
    </button>
  );
}
