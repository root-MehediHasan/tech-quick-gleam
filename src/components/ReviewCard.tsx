import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, User } from "lucide-react";

interface ReviewCardProps {
  title: string;
  image: string;
  rating: number;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  featured?: boolean;
}

const ReviewCard = ({ 
  title, 
  image, 
  rating, 
  category, 
  excerpt, 
  author, 
  date, 
  featured = false 
}: ReviewCardProps) => {
  return (
    <Card 
      className={`group overflow-hidden transition-all duration-300 hover:shadow-card-glow hover:-translate-y-1 ${
        featured ? 'border-primary' : ''
      }`}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              {category}
            </Badge>
          </div>
          <div className="absolute top-4 right-4 flex items-center space-x-1 bg-background/80 backdrop-blur px-2 py-1 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">{rating}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4" />
          <span>{author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;