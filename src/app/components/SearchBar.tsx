import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  return (
    <div className="flex justify-between w-full pr-15"> 
        <div className="flex rounded-md border border-gray-300 px-3 py-2 w-4/6 bg-white">
            <input  type="text" placeholder="Search..." className="flex-1  outline-none text-sm placeholder-gray-500"  />
            <Filter className="h-5 w-5 text-gray-500 cursor-pointer hover:text-black transition-colors" />
        </div>
        
        <div className="">
            <Button variant="secondary" className="w-full bg-[#0F172A] text-white">Write a new post</Button>
        </div>
    </div>


  );
}
