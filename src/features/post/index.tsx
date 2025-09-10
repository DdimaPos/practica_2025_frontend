import { Calendar, ArrowUp, ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type PostProps = {
  author: string;
  title: string;
  content: string;
  created_at: string;
  rating: number;
  photo: string;
};

export default function PostCard({
  author,
  title,
  content,
  created_at,
  rating,
  photo,
}: PostProps) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm mb-3">
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={photo} alt={author} />
          <AvatarFallback>{author.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <p className="font-semibold text-sm">@{author}</p>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-700">{content}</p>

          <div className="mt-3 flex items-center justify-between text-gray-500 text-xs">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(created_at).toLocaleString()}
            </div>
            <div className="flex items-center gap-2">
              <ArrowUp className="h-4 w-4 cursor-pointer hover:text-black" />
              <span>{rating}</span>
              <ArrowDown className="h-4 w-4 cursor-pointer hover:text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
