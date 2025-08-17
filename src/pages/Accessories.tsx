import { Button } from "@/components/ui/button";
import { Filter, Grid, List } from "lucide-react";
import accessoriesImage from "@/assets/category-accessories.jpg";
import collectionImage from "@/assets/collection-new.jpg";

const Accessories = () => {
  const products = [
    { id: 1, name: "Leather Handbag", price: "$280", category: "Bags", image: accessoriesImage },
    { id: 2, name: "Gold Chain Necklace", price: "$120", category: "Jewelry", image: collectionImage },
    { id: 3, name: "Silk Scarf", price: "$85", category: "Scarves", image: accessoriesImage },
    { id: 4, name: "Classic Watch", price: "$350", category: "Watches", image: collectionImage },
    { id: 5, name: "Leather Belt", price: "$95", category: "Belts", image: accessoriesImage },
    { id: 6, name: "Pearl Earrings", price: "$160", category: "Jewelry", image: collectionImage },
    { id: 7, name: "Sunglasses", price: "$220", category: "Eyewear", image: accessoriesImage },
    { id: 8, name: "Crossbody Bag", price: "$180", category: "Bags", image: collectionImage },
  ];

  const categories = ["All", "Bags", "Jewelry", "Watches", "Scarves", "Belts", "Eyewear"];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary/30">
        <div className="text-center">
          <h1 className="text-hero mb-4">Accessories</h1>
          <p className="text-elegant max-w-2xl mx-auto">
            Complete your look with our curated selection of premium accessories and jewelry.
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
              <div className="flex gap-2 overflow-x-auto">
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

export default Accessories;