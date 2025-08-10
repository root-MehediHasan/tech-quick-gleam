import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedReviews from "@/components/FeaturedReviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedReviews />
      <Footer />
    </div>
  );
};

export default Index;
