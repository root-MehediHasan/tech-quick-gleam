import { Button } from "@/components/ui/button";
import { Search, Menu, X, Mic, Smartphone, Laptop, Gamepad2, Headphones, Star, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
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

  const searchSuggestions = [
    "iPhone 15 Pro Max review",
    "MacBook Pro M3 specs",
    "PlayStation 5 Pro",
    "Samsung Galaxy S24 Ultra",
    "AirPods Pro 3",
    "Gaming laptops 2024"
  ];

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          {/* Modern Search */}
          <div className="relative z-50">
            {!isSearchOpen ? (
              <Button
                variant="ghost" 
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="hover:bg-accent hover:scale-105 transition-all duration-200"
              >
                <Search className="h-5 w-5" />
              </Button>
            ) : (
              <div className="relative">
                <form onSubmit={handleSearch} className="flex items-center">
                  <div className="relative">
                    <div className="flex items-center bg-background/90 backdrop-blur-sm border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      <Search className="absolute left-4 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search reviews, products, comparisons..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                        className="w-80 pl-12 pr-20 h-12 bg-transparent border-0 rounded-full focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-muted-foreground/70"
                        autoFocus
                      />
                      <div className="flex items-center space-x-1 pr-2">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-accent/50 rounded-full"
                        >
                          <Mic className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                            setIsSearchFocused(false);
                          }}
                          className="h-8 w-8 hover:bg-accent/50 rounded-full"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
                
                {/* Search Suggestions Dropdown */}
                {isSearchFocused && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-2xl z-50">
                    <div className="p-3 border-b border-border flex items-center justify-between text-xs text-muted-foreground">
                      <span>Search across all content</span>
                      <span>Press ESC to close</span>
                    </div>

                    <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                      {searchQuery.length > 0 && (
                        <div className="">
                          <div className="text-xs text-muted-foreground mb-2">Search for:</div>
                          <button
                            onClick={() => handleSuggestionClick(searchQuery)}
                            className="w-full text-left p-2 hover:bg-accent/50 rounded-lg transition-colors flex items-center space-x-2"
                          >
                            <Search className="h-4 w-4 text-primary" />
                            <span className="font-medium">{searchQuery}</span>
                          </button>
                        </div>
                      )}

                      <div>
                        <div className="text-xs text-muted-foreground mb-2">Trending searches</div>
                        <div className="flex flex-wrap gap-2">
                          {searchSuggestions.slice(0, 8).map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="px-3 py-1.5 rounded-full border border-border hover:bg-accent/50 text-sm"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      </div>

                      {filteredSuggestions.length > 0 && (
                        <div>
                          <div className="text-xs text-muted-foreground mb-2">Suggestions</div>
                          {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="w-full text-left p-2 hover:bg-accent/50 rounded-lg transition-colors flex items-center space-x-2 text-sm"
                            >
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
                )}
              </div>
            )}
          </div>
          
          {/* Mobile Search Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-2">
            <a href="#" className="flex items-center gap-2 py-2 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors">
              <Star className="h-4 w-4" />
              Reviews
            </a>
            <a href="#" className="flex items-center gap-2 py-2 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors">
              <Smartphone className="h-4 w-4" />
              Smartphones
            </a>
            <a href="#" className="flex items-center gap-2 py-2 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors">
              <Laptop className="h-4 w-4" />
              Laptops
            </a>
            <a href="#" className="flex items-center gap-2 py-2 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors">
              <Gamepad2 className="h-4 w-4" />
              Gaming
            </a>
            <a href="#" className="flex items-center gap-2 py-2 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors">
              <Headphones className="h-4 w-4" />
              Accessories
            </a>
          </nav>
        </div>
      )}
      
      {/* Search Overlay for Mobile */}
      {isSearchOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur border-b border-border p-4">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center bg-background border border-border rounded-full shadow-lg">
              <Search className="absolute left-4 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                placeholder="Search reviews, products, comparisons..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 h-12 bg-transparent border-0 rounded-full focus:ring-2 focus:ring-primary/20"
                    autoFocus
                  />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                className="absolute right-2 h-8 w-8 hover:bg-accent/50 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
