import { Button } from "@/components/ui/button";
import { Filter, Grid, List } from "lucide-react";
import menImage from "@/assets/category-men.jpg";
import collectionImage from "@/assets/collection-new.jpg";

const Men = () => {
  const products = [
    { id: 1, name: "Classic Oxford Shirt", price: "$95", category: "Shirts", image: menImage },
    { id: 2, name: "Tailored Suit Jacket", price: "$380", category: "Formal", image: collectionImage },
    { id: 3, name: "Slim Fit Chinos", price: "$120", category: "Trousers", image: menImage },
    { id: 4, name: "Merino Wool Sweater", price: "$180", category: "Knitwear", image: collectionImage },
    { id: 5, name: "Leather Jacket", price: "$450", category: "Outerwear", image: menImage },
    { id: 6, name: "Cotton T-Shirt", price: "$45", category: "Casual", image: collectionImage },
    { id: 7, name: "Wool Trench Coat", price: "$320", category: "Outerwear", image: menImage },
    { id: 8, name: "Denim Jeans", price: "$140", category: "Trousers", image: collectionImage },
  ];

  const categories = ["All", "Shirts", "Trousers", "Formal", "Casual", "Outerwear", "Knitwear"];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-secondary/30">
        <div className="text-center">
          <h1 className="text-hero mb-4">Men's Collection</h1>
          <p className="text-elegant max-w-2xl mx-auto">
            Refined menswear for the discerning gentleman. Classic styles with contemporary cuts.
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

export default Men;