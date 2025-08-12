import { useState } from "react";
import Header from "@/components/Header";
import Hero, { type HeroFilters } from "@/components/Hero";
import LatestMobilePhones from "@/components/LatestMobilePhones";
import LatestLaptops from "@/components/LatestLaptops";
import Footer from "@/components/Footer";

const Index = () => {
  const [filters, setFilters] = useState<HeroFilters>({
    query: "",
    minPrice: 0,
    maxPrice: 300000,
    category: "All",
    brand: "All",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero filters={filters} onApplyFilters={setFilters} />
      <LatestMobilePhones filters={filters} />
      <LatestLaptops />
      <Footer />
    </div>
  );
};

export default Index;
