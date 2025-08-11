import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestMobilePhones from "@/components/LatestMobilePhones";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LatestMobilePhones />
      <Footer />
    </div>
  );
};

export default Index;
