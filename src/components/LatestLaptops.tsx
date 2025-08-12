import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ShoppingCart, Heart, Cpu, HardDrive, Monitor } from "lucide-react";
import { useState } from "react";

interface Laptop {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  processor: string;
  ram: string;
  storage: string;
  display: string;
  rating?: number;
  isNew?: boolean;
  isTrending?: boolean;
  isGaming?: boolean;
}

const LatestLaptops = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (laptopId: string) => {
    setFavorites(prev => 
      prev.includes(laptopId) 
        ? prev.filter(id => id !== laptopId)
        : [...prev, laptopId]
    );
  };

  const laptops: Laptop[] = [
    {
      id: "1",
      name: "MacBook Pro 16\" M3 Max",
      image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      originalPrice: 350000,
      discountedPrice: 285000,
      discountPercentage: 18,
      processor: "Apple M3 Max",
      ram: "32GB",
      storage: "1TB SSD",
      display: "16.2\" Liquid Retina XDR",
      isNew: true
    },
    {
      id: "2",
      name: "ASUS ROG Strix G16",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=300",
      originalPrice: 180000,
      discountedPrice: 145000,
      discountPercentage: 19,
      processor: "Intel i7-13650HX",
      ram: "16GB DDR5",
      storage: "1TB NVMe SSD",
      display: "16\" FHD 165Hz",
      isGaming: true
    },
    {
      id: "3",
      name: "Dell XPS 13 Plus",
      image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      originalPrice: 220000,
      discountedPrice: 175000,
      discountPercentage: 20,
      processor: "Intel i7-1360P",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
      display: "13.4\" 3.5K OLED",
      isTrending: true
    },
    {
      id: "4",
      name: "HP Pavilion Gaming 15",
      image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      originalPrice: 95000,
      discountedPrice: 75000,
      discountPercentage: 21,
      processor: "AMD Ryzen 5 5600H",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      display: "15.6\" FHD 144Hz",
      isGaming: true
    },
    {
      id: "5",
      name: "Lenovo ThinkPad X1 Carbon",
      image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&hue=240",
      originalPrice: 280000,
      discountedPrice: 225000,
      discountPercentage: 19,
      processor: "Intel i7-1365U",
      ram: "16GB LPDDR5",
      storage: "1TB SSD",
      display: "14\" 2.8K OLED",
      isNew: true
    },
    {
      id: "6",
      name: "Acer Predator Helios 300",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=300&hue=120",
      originalPrice: 165000,
      discountedPrice: 130000,
      discountPercentage: 21,
      processor: "Intel i7-12700H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "15.6\" FHD 144Hz",
      isGaming: true
    },
    /*{
      id: "7",
      name: "Microsoft Surface Laptop 5",
      image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&hue=60",
      originalPrice: 190000,
      discountedPrice: 155000,
      discountPercentage: 18,
      processor: "Intel i7-1255U",
      ram: "16GB LPDDR5",
      storage: "512GB SSD",
      display: "13.5\" PixelSense",
      isTrending: true
    },
    {
      id: "8",
      name: "ASUS ZenBook 14 OLED",
      image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&hue=180",
      originalPrice: 125000,
      discountedPrice: 98000,
      discountPercentage: 21,
      processor: "AMD Ryzen 7 5800H",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "14\" 2.8K OLED",
      isNew: true
    },
    {
      id: "9",
      name: "MSI Gaming GF63 Thin",
      image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&hue=300",
      originalPrice: 85000,
      discountedPrice: 68000,
      discountPercentage: 20,
      processor: "Intel i5-11400H",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      display: "15.6\" FHD 144Hz",
      isGaming: true
    },
    {
      id: "10",
      name: "Huawei MateBook X Pro",
      image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&hue=320",
      originalPrice: 210000,
      discountedPrice: 168000,
      discountPercentage: 20,
      processor: "Intel i7-1260P",
      ram: "16GB LPDDR5",
      storage: "1TB SSD",
      display: "14.2\" 3K Touch",
      isTrending: true
    },
    {
      id: "11",
      name: "Razer Blade 15 Advanced",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=300&hue=200",
      originalPrice: 420000,
      discountedPrice: 335000,
      discountPercentage: 20,
      processor: "Intel i7-12800H",
      ram: "32GB DDR5",
      storage: "1TB SSD",
      display: "15.6\" QHD 240Hz",
      isGaming: true
    },
    {
      id: "12",
      name: "LG Gram 17",
      image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&hue=270",
      originalPrice: 195000,
      discountedPrice: 155000,
      discountPercentage: 20,
      processor: "Intel i7-1260P",
      ram: "16GB LPDDR5",
      storage: "1TB SSD",
      display: "17\" WQXGA IPS",
      isNew: true
    } */
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price).replace('BDT', '৳');
  };

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              LATEST LAPTOPS
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Discover powerful laptops for work, gaming, and creativity
            </p>
          </div>
          <Button 
            variant="outline" 
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground text-sm sm:text-base"
          >
            <span className="hidden sm:inline">View More →</span>
            <span className="sm:hidden">More</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
          {laptops.map((laptop) => (
            <Card 
              key={laptop.id} 
              className="group overflow-hidden border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 relative bg-card rounded-xl"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 z-10">
                <Badge 
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xs px-2 py-1 shadow-lg"
                >
                  {laptop.discountPercentage}%
                </Badge>
              </div>

              {/* Status Badges */}
              {laptop.isNew && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge variant="destructive" className="text-xs px-2 py-1 animate-pulse">
                    NEW
                  </Badge>
                </div>
              )}
              {laptop.isTrending && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1">
                    TRENDING
                  </Badge>
                </div>
              )}
              {laptop.isGaming && (
                <div className="absolute top-8 right-2 z-10">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1">
                    GAMING
                  </Badge>
                </div>
              )}

              {/* Favorite Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-12 z-10 h-8 w-8 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-110 rounded-full shadow-lg"
                onClick={() => toggleFavorite(laptop.id)}
              >
                <Heart 
                  className={`h-4 w-4 ${
                    favorites.includes(laptop.id) 
                      ? 'fill-red-500 text-red-500' 
                      : 'text-gray-600'
                  }`} 
                />
              </Button>

              <CardContent className="p-3">
                {/* Laptop Image */}
                <div className="relative mb-3 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl p-4 flex items-center justify-center h-40 overflow-hidden shadow-inner">
                  <img 
                    src={laptop.image} 
                    alt={laptop.name}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                  />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl backdrop-blur-sm">
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-lg hover:scale-110 transition-transform">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-lg hover:scale-110 transition-transform">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Laptop Details */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                    {laptop.name}
                  </h3>
                  
                  {/* Specs */}
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Cpu className="h-3 w-3" />
                      <span className="truncate">{laptop.processor}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HardDrive className="h-3 w-3" />
                      <span>{laptop.ram} • {laptop.storage}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Monitor className="h-3 w-3" />
                      <span className="truncate">{laptop.display}</span>
                    </div>
                  </div>
                  
                  {/* Pricing */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold text-sm">
                        {formatPrice(laptop.discountedPrice)}
                      </span>
                      <span className="text-xs text-muted-foreground hidden sm:inline">
                        (Best Price)
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground line-through">
                      {formatPrice(laptop.originalPrice)}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-xs h-7 border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <span className="hidden sm:inline">View Details</span>
                    <span className="sm:hidden">View</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        {/* <div className="text-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Load More Laptops
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default LatestLaptops;
