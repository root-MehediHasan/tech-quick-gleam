import ReviewCard from "./ReviewCard";

const FeaturedReviews = () => {
  const reviews = [
    {
      title: "iPhone 15 Pro Max: The Ultimate Camera Phone Revolution",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop",
      rating: 9.2,
      category: "Smartphones",
      excerpt: "Apple's latest flagship brings unprecedented camera capabilities with titanium build quality that sets new standards for premium smartphones.",
      author: "Alex Chen",
      date: "Dec 8, 2024",
      featured: true
    },
    {
      title: "MacBook Pro M3: Creative Powerhouse Unleashed",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=600&fit=crop",
      rating: 9.5,
      category: "Laptops",
      excerpt: "The M3 chip delivers exceptional performance for creative professionals while maintaining impressive battery life in a sleek design.",
      author: "Sarah Johnson",
      date: "Dec 7, 2024"
    },
    {
      title: "PlayStation 5 Pro: Next-Gen Gaming Redefined",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop",
      rating: 8.8,
      category: "Gaming",
      excerpt: "Sony's enhanced console brings 4K gaming at 60fps with ray tracing that transforms your gaming experience completely.",
      author: "Mike Rodriguez",
      date: "Dec 6, 2024"
    },
    {
      title: "AirPods Pro 3: Spatial Audio Perfection",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&h=600&fit=crop",
      rating: 9.0,
      category: "Accessories",
      excerpt: "Apple's latest earbuds feature enhanced noise cancellation and spatial audio that creates an immersive listening experience.",
      author: "Emma Davis",
      date: "Dec 5, 2024"
    },
    {
      title: "Samsung Galaxy S24 Ultra: S Pen Meets AI Innovation",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=600&fit=crop",
      rating: 9.1,
      category: "Smartphones",
      excerpt: "Samsung integrates AI features with the iconic S Pen functionality, creating a productivity powerhouse in your pocket.",
      author: "David Kim",
      date: "Dec 4, 2024"
    },
    {
      title: "Dell XPS 13 Plus: Minimalist Design Excellence",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop",
      rating: 8.7,
      category: "Laptops",
      excerpt: "Dell's premium ultrabook combines cutting-edge design with powerful performance in an incredibly compact form factor.",
      author: "Lisa Wang",
      date: "Dec 3, 2024"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Featured Reviews
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our latest in-depth reviews of cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;