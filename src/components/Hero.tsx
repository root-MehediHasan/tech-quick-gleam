import { Button } from "@/components/ui/button";
import { Play, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      <div className="container relative z-10 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-tech-gradient bg-clip-text text-transparent">
              Tech Reviews
            </span>
            <br />
            <span className="text-foreground">You Can Trust</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            In-depth reviews of the latest gadgets, smartphones, laptops, and tech accessories. 
            Make informed decisions with our expert analysis.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            <TrendingUp className="mr-2 h-5 w-5" />
            Latest Reviews
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3">
            <Play className="mr-2 h-4 w-4" />
            Watch Video Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;