import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TQ</span>
            </div>
            <span className="text-xl font-bold bg-tech-gradient bg-clip-text text-transparent">
              TechQuickReview
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Smartphones
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Laptops
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Gaming
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Accessories
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;