import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, X, Filter } from "lucide-react";
import collectionImage from "@/assets/collection-new.jpg";
import womenImage from "@/assets/category-women.jpg";
import menImage from "@/assets/category-men.jpg";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const allProducts = [
    { id: 1, name: "Essential Silk Blouse", price: "$120", category: "Women", type: "Tops", image: womenImage },
    { id: 2, name: "Classic Oxford Shirt", price: "$95", category: "Men", type: "Shirts", image: menImage },
    { id: 3, name: "Wool Blazer", price: "$280", category: "Women", type: "Outerwear", image: collectionImage },
    { id: 4, name: "Cashmere Sweater", price: "$220", category: "Men", type: "Knitwear", image: menImage },
    { id: 5, name: "Midi Dress", price: "$180", category: "Women", type: "Dresses", image: womenImage },
    { id: 6, name: "Leather Jacket", price: "$450", category: "Men", type: "Outerwear", image: collectionImage },
    { id: 7, name: "Silk Scarf", price: "$85", category: "Accessories", type: "Scarves", image: womenImage },
    { id: 8, name: "Gold Necklace", price: "$320", category: "Accessories", type: "Jewelry", image: collectionImage },
  ];

  const filteredProducts = searchQuery 
    ? allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const popularSearches = ["Silk Blouse", "Cashmere", "Leather Jacket", "Midi Dress", "Oxford Shirt"];
  const trendingCategories = ["New Arrivals", "Sale Items", "Sustainable Fashion", "Work Wear"];

  return (
    <div className="min-h-screen pt-16">
      {/* Search Header */}
      <section className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-section text-center mb-8">Search</h1>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products, categories, or styles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchActive(e.target.value.length > 0);
                }}
                className="w-full pl-12 pr-12 py-4 text-lg border-2 focus:border-primary"
              />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => {
                    setSearchQuery("");
                    setIsSearchActive(false);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Search Results or Suggestions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {isSearchActive && searchQuery ? (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-medium">
                  Search Results for "{searchQuery}" ({filteredProducts.length} items)
                </h2>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {filteredProducts.map((product) => (
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
                          {product.category} • {product.type}
                        </p>
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-muted-foreground">{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-4">No results found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try searching for something else or check out our popular categories.
                  </p>
                  <Button>Browse All Products</Button>
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Popular Searches */}
                <div>
                  <h3 className="text-lg font-medium mb-6">Popular Searches</h3>
                  <div className="space-y-3">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSearchQuery(search);
                          setIsSearchActive(true);
                        }}
                        className="block w-full text-left py-2 px-3 rounded hover:bg-muted transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trending Categories */}
                <div>
                  <h3 className="text-lg font-medium mb-6">Trending Categories</h3>
                  <div className="space-y-3">
                    {trendingCategories.map((category, index) => (
                      <button
                        key={index}
                        className="block w-full text-left py-2 px-3 rounded hover:bg-muted transition-colors"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;