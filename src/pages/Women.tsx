import { Button } from "@/components/ui/button";
import { Filter, Grid, List } from "lucide-react";
import womenImage from "@/assets/category-women.jpg";
import collectionImage from "@/assets/collection-new.jpg";

const Women = () => {
  const products = [
    { id: 1, name: "Essential Silk Blouse", price: "$120", category: "Tops", image: collectionImage },
    { id: 2, name: "Tailored Blazer", price: "$280", category: "Outerwear", image: womenImage },
    { id: 3, name: "High-Waist Trousers", price: "$160", category: "Bottoms", image: collectionImage },
    { id: 4, name: "Cashmere Sweater", price: "$220", category: "Knitwear", image: womenImage },
    { id: 5, name: "Midi Slip Dress", price: "$180", category: "Dresses", image: collectionImage },
    { id: 6, name: "Wool Coat", price: "$380", category: "Outerwear", image: womenImage },
    { id: 7, name: "Cotton Shirt", price: "$95", category: "Tops", image: collectionImage },
    { id: 8, name: "Pleated Skirt", price: "$140", category: "Bottoms", image: womenImage },
  ];

  const categories = ["All", "Tops", "Dresses", "Bottoms", "Outerwear", "Knitwear"];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary/30">
        <div className="text-center">
          <h1 className="text-hero mb-4">Women's Collection</h1>
          <p className="text-elegant max-w-2xl mx-auto">
            Elegant pieces for the modern woman. Discover our curated selection of timeless designs.
          </p>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button 
                    key={category} 
                    variant={category === "All" ? "default" : "ghost"}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group hover-lift cursor-pointer">
                <div className="aspect-square overflow-hidden bg-muted mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {product.category}
                  </p>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-muted-foreground">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Women;