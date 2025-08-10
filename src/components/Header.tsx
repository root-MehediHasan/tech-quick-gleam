import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Add your search logic here
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">TQ</span>
          </div>
          <span className="text-xl font-bold bg-tech-gradient bg-clip-text text-transparent">
            TechQuickReview
          </span>
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Reviews
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Smartphones
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Laptops
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Gaming
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
            Accessories
          </a>
        </nav>

        {/* Right side - Search and Menu */}
        <div className="flex items-center space-x-2">
          {/* Modern Search */}
          <div className="relative">
            {!isSearchOpen ? (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="hover:bg-accent"
              >
                <Search className="h-5 w-5" />
              </Button>
            ) : (
              <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search reviews, products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-10 h-9 bg-background/50 border-border focus:border-primary transition-colors"
                    autoFocus
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 hover:bg-accent"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            )}
          </div>
          
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;