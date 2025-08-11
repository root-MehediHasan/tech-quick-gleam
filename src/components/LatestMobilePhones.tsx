import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface MobilePhone {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  rating?: number;
  isNew?: boolean;
  isTrending?: boolean;
}

const LatestMobilePhones = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (phoneId: string) => {
    setFavorites(prev => 
      prev.includes(phoneId) 
        ? prev.filter(id => id !== phoneId)
        : [...prev, phoneId]
    );
  };

  const mobilePhones: MobilePhone[] = [
    {
      id: "1",
      name: "iQOO Z10 Turbo Plus",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      originalPrice: 65000,
      discountedPrice: 51000,
      discountPercentage: 80,
      isNew: true
    },
    {
      id: "2", 
      name: "Symphony Innova 40",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
      originalPrice: 15000,
      discountedPrice: 10999,
      discountPercentage: 70
    },
    {
      id: "3",
      name: "Vivo X Fold5",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop",
      originalPrice: 180000,
      discountedPrice: 140000,
      discountPercentage: 67,
      isTrending: true
    },
    {
      id: "4",
      name: "Realme GT 7",
      image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=300&h=300&fit=crop",
      originalPrice: 95000,
      discountedPrice: 77000,
      discountPercentage: 83
    },
    {
      id: "5",
      name: "ZTE nubia A56",
      image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=300&h=300&fit=crop",
      originalPrice: 12000,
      discountedPrice: 9499,
      discountPercentage: 68
    },
    {
      id: "6",
      name: "Xiaomi Redmi 15 5G",
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=300&h=300&fit=crop",
      originalPrice: 28000,
      discountedPrice: 22500,
      discountPercentage: 75
    },
    {
      id: "7",
      name: "Samsung Galaxy Z Flip7",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",
      originalPrice: 140000,
      discountedPrice: 110000,
      discountPercentage: 80
    },
    {
      id: "8",
      name: "Samsung Galaxy Z Flip7",
      image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=300&h=300&fit=crop",
      originalPrice: 165000,
      discountedPrice: 136000,
      discountPercentage: 80
    },
    {
      id: "9",
      name: "Vivo Y400",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop",
      originalPrice: 35000,
      discountedPrice: 27999,
      discountPercentage: 77
    },
    {
      id: "10",
      name: "Honor Magic V5",
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=300&h=300&fit=crop",
      originalPrice: 280000,
      discountedPrice: 220000,
      discountPercentage: 85
    },
    {
      id: "11",
      name: "Oppo Reno14",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
      originalPrice: 95000,
      discountedPrice: 79990,
      discountPercentage: 86
    },
    {
      id: "12",
      name: "Oppo Reno14 F",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop",
      originalPrice: 55000,
      discountedPrice: 42990,
      discountPercentage: 80
    }
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
            <h2 className="text-3xl font-bold text-foreground mb-2">
              LATEST MOBILE PHONES
            </h2>
            <p className="text-muted-foreground">
              Discover the newest smartphones with amazing deals and discounts
            </p>
          </div>
          <Button 
            variant="outline" 
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
          >
            View More →
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {mobilePhones.map((phone) => (
            <Card 
              key={phone.id} 
              className="group overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 z-10">
                <Badge 
                  className="bg-green-500 text-white font-bold text-xs px-2 py-1"
                >
                  {phone.discountPercentage}%
                </Badge>
              </div>

              {/* Status Badges */}
              {phone.isNew && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge variant="destructive" className="text-xs">
                    NEW
                  </Badge>
                </div>
              )}
              {phone.isTrending && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge className="bg-orange-500 text-white text-xs">
                    TRENDING
                  </Badge>
                </div>
              )}

              {/* Favorite Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-8 right-2 z-10 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
                onClick={() => toggleFavorite(phone.id)}
              >
                <Heart 
                  className={`h-4 w-4 ${
                    favorites.includes(phone.id) 
                      ? 'fill-red-500 text-red-500' 
                      : 'text-gray-600'
                  }`} 
                />
              </Button>

              <CardContent className="p-3">
                {/* Phone Image */}
                <div className="relative mb-3 bg-gray-50 rounded-lg p-4 flex items-center justify-center h-32">
                  <img 
                    src={phone.image} 
                    alt={phone.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Phone Details */}
                <div className="space-y-2">
                  <h3 className="font-medium text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {phone.name}
                  </h3>
                  
                  {/* Pricing */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold text-sm">
                        {formatPrice(phone.discountedPrice)}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        (Unofficial)
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground line-through">
                      {formatPrice(phone.originalPrice)}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-xs h-7 border-primary/20 hover:bg-primary hover:text-primary-foreground"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Load More Phones
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestMobilePhones;