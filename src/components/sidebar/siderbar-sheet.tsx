import { Button } from "@/components/ui/button"; 
import { Link } from "react-router-dom"; 
import Eu from "../../assets/erick.jpeg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Cpu, House, MenuIcon, Presentation, User } from "lucide-react";
import { useEffect } from "react";

interface SidebarSheetProps {
  onToggle?: (isVisible: boolean) => void; 
}

export function SidebarSheet({ onToggle }: SidebarSheetProps) {
  useEffect(() => {
    if (onToggle) {
      onToggle(true); 
    }

    return () => {
      if (onToggle) {
        onToggle(false);
      }
    };
  }, [onToggle]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="bg-purple-700 border-black hover:bg-purple-600">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#121212] border-l-purple-300 text-white">
        <SheetHeader>
          <SheetTitle className="text-left text-purple-300 font-bold">Menu</SheetTitle>
        </SheetHeader>

        <div className="flex items-center justify-between gap-3 border-b border-b-purple-300 border-solid py-5">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={Eu} />
            </Avatar>
            <div className="text-zinc-200 font-semibold">
              <p className="font-bold">Erick</p>
              <p className="text-xs">berdnaski1177@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-5 text-zinc-200 font-bold">
          <Link to="/about">
            <Button className="justify-start gap-2 hover:bg-purple-300" variant="ghost">
              <User size={18} />
              Sobre mim
            </Button>
          </Link>

          <Link to="/projects">
            <Button className="justify-start gap-2 hover:bg-purple-300" variant="ghost">
              <Presentation size={18} />
              Projetos
            </Button>
          </Link>

          <Link to="/contact">
            <Button className="justify-start gap-2 hover:bg-purple-300" variant="ghost">
              <Cpu size={18} />
              Contato
            </Button>
          </Link>

          <Link to="/services">
            <Button className="justify-start gap-2 hover:bg-purple-300" variant="ghost">
              <Cpu size={18} />
              Serviços
            </Button>
          </Link>

          <Link to="/">
            <Button className="justify-start gap-2 hover:bg-purple-300" variant="ghost">
              <House size={18} />
              Home
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
