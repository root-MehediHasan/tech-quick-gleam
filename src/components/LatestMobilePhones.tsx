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
      image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      originalPrice: 65000,
      discountedPrice: 51000,
      discountPercentage: 80,
      isNew: true
    },
    {
      id: "2", 
      name: "Symphony Innova 40",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      originalPrice: 15000,
      discountedPrice: 10999,
      discountPercentage: 70
    },
    {
      id: "3",
      name: "Vivo X Fold5",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&crop=focalpoint&fp-y=0.3",
      originalPrice: 180000,
      discountedPrice: 140000,
      discountPercentage: 67,
      isTrending: true
    },
    {
      id: "4",
      name: "Realme GT 7",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&crop=focalpoint&fp-y=0.7",
      originalPrice: 95000,
      discountedPrice: 77000,
      discountPercentage: 83
    },
    {
      id: "5",
      name: "ZTE nubia A56",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&hue=240",
      originalPrice: 12000,
      discountedPrice: 9499,
      discountPercentage: 68
    },
    {
      id: "6",
      name: "Xiaomi Redmi 15 5G",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&hue=120",
      originalPrice: 28000,
      discountedPrice: 22500,
      discountPercentage: 75
    },
    {
      id: "7",
      name: "Samsung Galaxy Z Flip7",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&hue=60",
      originalPrice: 140000,
      discountedPrice: 110000,
      discountPercentage: 80
    },
    {
      id: "8",
      name: "Samsung Galaxy Z Flip7",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&hue=300",
      originalPrice: 165000,
      discountedPrice: 136000,
      discountPercentage: 80
    },
    {
      id: "9",
      name: "Vivo Y400",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&hue=180",
      originalPrice: 35000,
      discountedPrice: 27999,
      discountPercentage: 77
    },
    {
      id: "10",
      name: "Honor Magic V5",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&hue=0",
      originalPrice: 280000,
      discountedPrice: 220000,
      discountPercentage: 85
    },
    {
      id: "11",
      name: "Oppo Reno14",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&hue=90",
      originalPrice: 95000,
      discountedPrice: 79990,
      discountPercentage: 86
    },
    {
      id: "12",
      name: "Oppo Reno14 F",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop&hue=270",
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
              className="group overflow-hidden border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 relative bg-white rounded-xl"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 z-10">
                <Badge 
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-xs px-2 py-1 shadow-lg"
                >
                  {phone.discountPercentage}%
                </Badge>
              </div>

              {/* Status Badges */}
              {phone.isNew && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge variant="destructive" className="text-xs shadow-lg animate-pulse">
                    NEW
                  </Badge>
                </div>
              )}
              {phone.isTrending && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs shadow-lg">
                    TRENDING
                  </Badge>
                </div>
              )}

              {/* Favorite Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-8 right-2 z-10 h-8 w-8 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
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

              <CardContent className="p-4">
                {/* Phone Image */}
                <div className="relative mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex items-center justify-center h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
                  <img 
                    src={phone.image} 
                    alt={phone.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg relative z-10"
                  />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                    <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full shadow-lg backdrop-blur-sm bg-white/90 hover:bg-white transform hover:scale-110 transition-all">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full shadow-lg backdrop-blur-sm bg-white/90 hover:bg-white transform hover:scale-110 transition-all">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Phone Details */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                    {phone.name}
                  </h3>
                  
                  {/* Pricing */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold text-base">
                        {formatPrice(phone.discountedPrice)}
                      </span>
                      <span className="text-xs text-muted-foreground bg-gray-100 px-2 py-0.5 rounded-full">
                        (Unofficial)
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground line-through font-medium">
                      {formatPrice(phone.originalPrice)}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full text-xs h-8 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium hover:shadow-lg hover:shadow-primary/20"
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