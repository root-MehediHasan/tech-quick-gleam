import { Button } from "@/components/ui/button";
import { Search, Menu, X, Smartphone, Laptop, Gamepad2, Headphones, Star, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsSearchFocused(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filteredSuggestions: string[] = [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      setIsSearchOpen(false);
      setIsSearchFocused(false);
      // Add your search logic here
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    console.log("Searching for:", suggestion);
    setIsSearchOpen(false);
    setIsSearchFocused(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2 flex-shrink-0 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">TQ</span>
          </div>
          <span className="text-xl font-bold bg-tech-gradient bg-clip-text text-transparent">
            TechQuickReview
          </span>
        </a>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium">
                <Smartphone className="h-4 w-4" />
                <span>Smartphones</span>
                <ChevronDown className="h-3 w-3 opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 bg-background border border-border shadow-lg">
              <DropdownMenuLabel className="text-xs text-muted-foreground">Browse Smartphones</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Apple iPhone</DropdownMenuItem>
              <DropdownMenuItem>Samsung Galaxy</DropdownMenuItem>
              <DropdownMenuItem>Google Pixel</DropdownMenuItem>
              <DropdownMenuItem>OnePlus</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Best Deals</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium">
                <Laptop className="h-4 w-4" />
                <span>Laptops</span>
                <ChevronDown className="h-3 w-3 opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 bg-background border border-border shadow-lg">
              <DropdownMenuLabel className="text-xs text-muted-foreground">Browse Laptops</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>MacBooks</DropdownMenuItem>
              <DropdownMenuItem>Windows Ultrabooks</DropdownMenuItem>
              <DropdownMenuItem>Gaming Laptops</DropdownMenuItem>
              <DropdownMenuItem>Chromebooks</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Best Deals</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium">
            <Gamepad2 className="h-4 w-4" />
            <span>Gaming</span>
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium">
            <Headphones className="h-4 w-4" />
            <span>Accessories</span>
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium">
            <Star className="h-4 w-4" />
            <span>Reviews</span>
          </a>
        </nav>

        {/* Right side - Search and Menu */}
        <div className="flex items-center space-x-2">
          {/* Desktop Search Button */}
          <div className="relative z-50 hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setIsSearchOpen(true);
                setIsSearchFocused(true);
              }}
              className="hover:bg-accent hover:scale-105 transition-all duration-200"
              aria-label="Open search"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Mobile Search Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            variant="ghost" 
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-md hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-5 h-5 relative flex flex-col justify-center">
              <span 
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                }`}
              />
              <span 
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Desktop Search Overlay */}
      {isSearchOpen && !isMobileMenuOpen && (
        <div className="hidden md:block">
          <div className="fixed inset-0 z-[60]" onClick={() => { setIsSearchOpen(false); setIsSearchFocused(false); }}>
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
          </div>
          <div className="fixed left-1/2 -translate-x-1/2 top-20 z-[70] w-full max-w-3xl px-4">
            <div className="rounded-2xl border border-primary/30 shadow-xl bg-background animate-enter">
              <form onSubmit={handleSearch}>
                <div className="relative p-3">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search reviews, guides, products, and more..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="h-12 w-full pl-12 pr-12 bg-transparent border-2 border-primary/40 rounded-xl focus-visible:ring-primary/30"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-accent/50 rounded-full"
                    onClick={() => { setIsSearchOpen(false); setSearchQuery(""); setIsSearchFocused(false); }}
                    aria-label="Close search"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </form>
              <div className="border-t border-border">
                <div className="p-4 space-y-6 max-h-[420px] overflow-y-auto">

                  {filteredSuggestions.length > 0 && (
                    <div>
                      <div className="text-xs text-muted-foreground mb-2">Suggestions</div>
                      {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
                        <button key={index} onClick={() => handleSuggestionClick(suggestion)} className="w-full text-left p-2 hover:bg-accent/50 rounded-lg transition-colors flex items-center space-x-2 text-sm">
                          <Search className="h-3 w-3 text-muted-foreground" />
                          <span>{suggestion}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Quick access</div>
                    <div className="grid grid-cols-2 gap-3">
                      <a href="#" className="group rounded-xl border border-border p-3 hover:bg-accent/40 transition-colors flex items-start gap-3">
                        <Smartphone className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Phone Reviews</div>
                          <div className="text-xs text-muted-foreground">Latest smartphones</div>
                        </div>
                      </a>
                      <a href="#" className="group rounded-xl border border-border p-3 hover:bg-accent/40 transition-colors flex items-start gap-3">
                        <Laptop className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Laptop Reviews</div>
                          <div className="text-xs text-muted-foreground">Gaming & productivity</div>
                        </div>
                      </a>
                      <a href="#" className="group rounded-xl border border-border p-3 hover:bg-accent/40 transition-colors flex items-start gap-3">
                        <Star className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Buying Guides</div>
                          <div className="text-xs text-muted-foreground">Expert recommendations</div>
                        </div>
                      </a>
                      <a href="#" className="group rounded-xl border border-border p-3 hover:bg-accent/40 transition-colors flex items-start gap-3">
                        <Gamepad2 className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Tech News</div>
                          <div className="text-xs text-muted-foreground">Latest updates</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-border bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-1">
            <a href="#" className="flex items-center gap-3 py-3 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200 transform hover:translate-x-1">
              <Star className="h-4 w-4" />
              Reviews
            </a>
            <a href="#" className="flex items-center gap-3 py-3 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200 transform hover:translate-x-1">
              <Smartphone className="h-4 w-4" />
              Smartphones
            </a>
            <a href="#" className="flex items-center gap-3 py-3 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200 transform hover:translate-x-1">
              <Laptop className="h-4 w-4" />
              Laptops
            </a>
            <a href="#" className="flex items-center gap-3 py-3 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200 transform hover:translate-x-1">
              <Gamepad2 className="h-4 w-4" />
              Gaming
            </a>
            <a href="#" className="flex items-center gap-3 py-3 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-200 transform hover:translate-x-1">
              <Headphones className="h-4 w-4" />
              Accessories
            </a>
          </nav>
        </div>
      </div>
      
      {/* Mobile Search Overlay */}
      {isSearchOpen && !isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-[60]" onClick={() => { setIsSearchOpen(false); setIsSearchFocused(false); }}>
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
          </div>
          <div className="fixed left-1/2 -translate-x-1/2 top-20 z-[70] w-full max-w-sm px-4">
            <div className="rounded-2xl border border-primary/30 shadow-xl bg-background animate-enter">
              <form onSubmit={handleSearch}>
                <div className="relative p-3">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search reviews, products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="h-12 w-full pl-12 pr-12 bg-transparent border-2 border-primary/40 rounded-xl focus-visible:ring-primary/30"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-accent/50 rounded-full"
                    onClick={() => { setIsSearchOpen(false); setSearchQuery(""); setIsSearchFocused(false); }}
                    aria-label="Close search"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </form>
              <div className="border-t border-border">
                <div className="p-4 space-y-4 max-h-[300px] overflow-y-auto">
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Quick access</div>
                    <div className="grid grid-cols-1 gap-2">
                      <a href="#" className="group rounded-xl border border-border p-3 hover:bg-accent/40 transition-colors flex items-start gap-3">
                        <Smartphone className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium text-sm">Phone Reviews</div>
                          <div className="text-xs text-muted-foreground">Latest smartphones</div>
                        </div>
                      </a>
                      <a href="#" className="group rounded-xl border border-border p-3 hover:bg-accent/40 transition-colors flex items-start gap-3">
                        <Laptop className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium text-sm">Laptop Reviews</div>
                          <div className="text-xs text-muted-foreground">Gaming & productivity</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
