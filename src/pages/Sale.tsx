import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid, List } from "lucide-react";
import collectionImage from "@/assets/collection-new.jpg";
import womenImage from "@/assets/category-women.jpg";
import menImage from "@/assets/category-men.jpg";

const Sale = () => {
  const saleProducts = [
    { 
      id: 1, 
      name: "Essential Silk Blouse", 
      originalPrice: "$120", 
      salePrice: "$84", 
      discount: "30%", 
      category: "Women",
      image: womenImage 
    },
    { 
      id: 2, 
      name: "Classic Oxford Shirt", 
      originalPrice: "$95", 
      salePrice: "$66", 
      discount: "30%", 
      category: "Men",
      image: menImage 
    },
    { 
      id: 3, 
      name: "Wool Blazer", 
      originalPrice: "$280", 
      salePrice: "$168", 
      discount: "40%", 
      category: "Women",
      image: collectionImage 
    },
    { 
      id: 4, 
      name: "Cashmere Sweater", 
      originalPrice: "$220", 
      salePrice: "$132", 
      discount: "40%", 
      category: "Men",
      image: menImage 
    },
    { 
      id: 5, 
      name: "Midi Dress", 
      originalPrice: "$180", 
      salePrice: "$126", 
      discount: "30%", 
      category: "Women",
      image: womenImage 
    },
    { 
      id: 6, 
      name: "Leather Jacket", 
      originalPrice: "$450", 
      salePrice: "$270", 
      discount: "40%", 
      category: "Men",
      image: collectionImage 
    },
  ];

  const categories = ["All", "Women", "Men", "30% Off", "40% Off"];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-accent/20">
        <div className="text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground text-sm px-4 py-2">
            Limited Time
          </Badge>
          <h1 className="text-hero mb-4">Season Sale</h1>
          <p className="text-elegant max-w-2xl mx-auto">
            Discover exceptional pieces at exceptional prices. Up to 40% off selected items.
          </p>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-wide">
            Free shipping on orders over $150 • Easy returns within 30 days
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

      {/* Sale Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {saleProducts.map((product) => (
              <div key={product.id} className="group hover-lift cursor-pointer">
                <div className="relative aspect-square overflow-hidden bg-muted mb-4">
                  <Badge className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground">
                    -{product.discount}
                  </Badge>
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
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground font-medium">{product.salePrice}</p>
                    <p className="text-sm text-muted-foreground line-through">{product.originalPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sale;