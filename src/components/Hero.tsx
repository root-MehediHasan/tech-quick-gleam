import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Filters shared with Index and LatestMobilePhones
export type HeroFilters = {
  query: string;
  minPrice: number;
  maxPrice: number;
  category: string; // All | Budget | Mid-range | Flagship
  brand: string; // All | Samsung | Apple | ...
};

const defaultFilters: HeroFilters = {
  query: "",
  minPrice: 0,
  maxPrice: 300000,
  category: "All",
  brand: "All",
};

interface HeroProps {
  filters?: HeroFilters;
  onApplyFilters?: (filters: HeroFilters) => void;
}

const Hero = ({ filters, onApplyFilters }: HeroProps) => {
  const f = filters ?? defaultFilters;
  const [range, setRange] = useState<number[]>([f.minPrice, f.maxPrice]);
  const [query, setQuery] = useState<string>(f.query);
  const [category, setCategory] = useState<string>(f.category || "All");
  const [brand, setBrand] = useState<string>(f.brand || "All");
  const navigate = useNavigate();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const ff = filters ?? defaultFilters;
    setRange([ff.minPrice, ff.maxPrice]);
    setQuery(ff.query);
    setCategory(ff.category);
    setBrand(ff.brand);
  }, [filters]);

  const apply = () => {
    const applied = {
      query,
      minPrice: range[0],
      maxPrice: range[1],
      category,
      brand,
    };
    onApplyFilters?.(applied);

    const params = new URLSearchParams({
      q: applied.query,
      min: String(applied.minPrice),
      max: String(applied.maxPrice),
      cat: applied.category,
      brand: applied.brand,
    });
    navigate(`/results?${params.toString()}`);
  };

  const clamp = (val: number) => Math.max(0, Math.min(300000, val || 0));

  return (
    <section className="py-10 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mobile: dropdown-like filter */}
          <div className="md:hidden">
            <Button variant="outline" className="w-full" onClick={() => setMobileFiltersOpen((v) => !v)}>
              {mobileFiltersOpen ? "Hide Filters" : "Show Filters"}
            </Button>
            {mobileFiltersOpen && (
              <Card className="mt-3 border border-border bg-card">
                <CardContent className="p-6">
                  <h1 className="text-center text-2xl sm:text-3xl font-bold tracking-tight mb-6 text-foreground">
                    LETS FIND A MOBILE
                  </h1>

                  {/* Range Slider */}
                  <div className="space-y-4">
                    <Slider
                      value={range}
                      onValueChange={(v) => setRange([clamp(v[0]), clamp(v[1])])}
                      min={0}
                      max={300000}
                      step={500}
                      className="mt-2"
                    />
                    <div className="grid grid-cols-2 gap-4 items-center">
                      <div className="flex items-center gap-2">
                        <Label className="text-sm text-muted-foreground">Tk.</Label>
                        <Input
                          inputMode="numeric"
                          value={range[0]}
                          onChange={(e) => setRange([clamp(parseInt(e.target.value || "0")), range[1]])}
                        />
                      </div>
                      <div className="flex items-center gap-2 justify-end">
                        <Label className="text-sm text-muted-foreground">Tk.</Label>
                        <Input
                          inputMode="numeric"
                          value={range[1]}
                          onChange={(e) => setRange([range[0], clamp(parseInt(e.target.value || "0"))])}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Input
                      placeholder="Mobile"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">Category</SelectItem>
                        <SelectItem value="Budget">Budget</SelectItem>
                        <SelectItem value="Mid-range">Mid-range</SelectItem>
                        <SelectItem value="Flagship">Flagship</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={brand} onValueChange={setBrand}>
                      <SelectTrigger>
                        <SelectValue placeholder="Brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">Brand</SelectItem>
                        <SelectItem value="Apple">Apple</SelectItem>
                        <SelectItem value="Samsung">Samsung</SelectItem>
                        <SelectItem value="Xiaomi">Xiaomi</SelectItem>
                        <SelectItem value="Vivo">Vivo</SelectItem>
                        <SelectItem value="Oppo">Oppo</SelectItem>
                        <SelectItem value="Realme">Realme</SelectItem>
                        <SelectItem value="Honor">Honor</SelectItem>
                        <SelectItem value="ZTE">ZTE</SelectItem>
                        <SelectItem value="Symphony">Symphony</SelectItem>
                        <SelectItem value="iQOO">iQOO</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mt-5">
                    <Button size="lg" className="w-full" onClick={apply}>
                      FIND PRODUCTS <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Desktop / Tablet: Filter Panel */}
          <Card className="hidden md:block lg:col-span-2 border border-border bg-card">
            <CardContent className="p-6">
              <h1 className="text-center text-2xl sm:text-3xl font-bold tracking-tight mb-6 text-foreground">
                LETS FIND A MOBILE
              </h1>

              {/* Range Slider */}
              <div className="space-y-4">
                <Slider
                  value={range}
                  onValueChange={(v) => setRange([clamp(v[0]), clamp(v[1])])}
                  min={0}
                  max={300000}
                  step={500}
                  className="mt-2"
                />
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <Label className="text-sm text-muted-foreground">Tk.</Label>
                    <Input
                      inputMode="numeric"
                      value={range[0]}
                      onChange={(e) => setRange([clamp(parseInt(e.target.value || "0")), range[1]])}
                    />
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <Label className="text-sm text-muted-foreground">Tk.</Label>
                    <Input
                      inputMode="numeric"
                      value={range[1]}
                      onChange={(e) => setRange([range[0], clamp(parseInt(e.target.value || "0"))])}
                    />
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                <Input
                  placeholder="Mobile"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">Category</SelectItem>
                    <SelectItem value="Budget">Budget</SelectItem>
                    <SelectItem value="Mid-range">Mid-range</SelectItem>
                    <SelectItem value="Flagship">Flagship</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={brand} onValueChange={setBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">Brand</SelectItem>
                    <SelectItem value="Apple">Apple</SelectItem>
                    <SelectItem value="Samsung">Samsung</SelectItem>
                    <SelectItem value="Xiaomi">Xiaomi</SelectItem>
                    <SelectItem value="Vivo">Vivo</SelectItem>
                    <SelectItem value="Oppo">Oppo</SelectItem>
                    <SelectItem value="Realme">Realme</SelectItem>
                    <SelectItem value="Honor">Honor</SelectItem>
                    <SelectItem value="ZTE">ZTE</SelectItem>
                    <SelectItem value="Symphony">Symphony</SelectItem>
                    <SelectItem value="iQOO">iQOO</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-5">
                <Button size="lg" className="w-full" onClick={apply}>
                  FIND PRODUCTS <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>


          {/* Right: Popular Mobile Phones */}
          <aside className="lg:col-span-1">
            <Card className="border border-border bg-card">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">POPULAR MOBILE PHONES</h2>
                  <a href="#" className="text-sm text-primary hover:underline">View More</a>
                </div>
                <div className="space-y-4">
                  {[{
                    name: "Xiaomi Redmi Note 13 4G",
                    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop",
                    price: 20999,
                    score: 71,
                  }, {
                    name: "Xiaomi Redmi Note 14",
                    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop",
                    price: 20999,
                    score: 76,
                  }, {
                    name: "Tecno Camon 40 Pro",
                    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=100&h=100&fit=crop",
                    price: 27999,
                    score: 78,
                  }].map((p, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <img src={p.image} alt={`${p.name} photo`} className="h-14 w-14 rounded-md object-cover" loading="lazy" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{p.name}</div>
                        <div className="text-sm text-primary">৳{p.price.toLocaleString()}</div>
                      </div>
                      <div className="text-xs font-semibold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 rounded-md px-2 py-1">
                        {p.score}% SPEC
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
