import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedReviews from "@/components/FeaturedReviews";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedReviews />
    </div>
  );
};

export default Index;
