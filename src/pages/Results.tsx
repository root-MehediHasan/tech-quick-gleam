import { useEffect } from "react";
import Header from "@/components/Header";
import LatestMobilePhones from "@/components/LatestMobilePhones";
import Footer from "@/components/Footer";
import type { HeroFilters } from "@/components/Hero";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const filters: HeroFilters = {
    query: params.get("q") || "",
    minPrice: Number(params.get("min") || 0),
    maxPrice: Number(params.get("max") || 300000),
    category: params.get("cat") || "All",
    brand: params.get("brand") || "All",
  };

  // Basic SEO: title, meta description, canonical
  useEffect(() => {
    const title = filters.query
      ? `${filters.query} Phones – Filtered Results`
      : `Filtered Mobile Phones – Results`;
    document.title = title;

    const desc = `Browse filtered mobile phones by ${filters.brand} in ${filters.category} between Tk. ${filters.minPrice}–${filters.maxPrice}.`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);
  }, [filters]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Filtered Mobile Phones</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Showing results for {filters.brand !== "All" ? `${filters.brand} ` : ""}
          {filters.category !== "All" ? `${filters.category} ` : ""}
          phones between Tk. {filters.minPrice} and {filters.maxPrice}
          {filters.query ? ` matching "${filters.query}"` : ""}.
        </p>
        <LatestMobilePhones filters={filters} />
      </main>
      <Footer />
    </div>
  );
};

export default Results;
