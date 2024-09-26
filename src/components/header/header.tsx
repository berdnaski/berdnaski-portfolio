import { SidebarSheet } from "../sidebar/siderbar-sheet";
import { Card, CardContent } from "../ui/card";

interface HeaderProps {
  className?: string;
  onMenuToggle?: (isVisible: boolean) => void; 
}

export function Header({ className = "", onMenuToggle }: HeaderProps) {
  return (
    <Card className={`border-0 ${className}`}>
      <CardContent className="flex flex-row items-center justify-between p-4 bg-[#161616] border-0">
        <div>
          <h1 className="text-2xl font-bold text-purple-400">
            Erick Berdnaski <span className="text-zinc-200">| DEV</span>
          </h1>
        </div>

        <SidebarSheet onToggle={onMenuToggle} />
      </CardContent>
    </Card>
  );
}
