import { Button } from "@/components/ui/button";
import collectionImage from "@/assets/collection-new.jpg";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "Essential Silk Blouse",
      price: "$120",
      image: collectionImage,
    },
    {
      id: 2,
      name: "Tailored Wool Coat",
      price: "$280",
      image: collectionImage,
    },
    {
      id: 3,
      name: "Classic Denim Jacket",
      price: "$95",
      image: collectionImage,
    },
    {
      id: 4,
      name: "Cashmere Sweater",
      price: "$160",
      image: collectionImage,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">New Arrivals</h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Fresh pieces for the modern wardrobe. Discover our latest collection featuring timeless designs with contemporary touches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group hover-lift cursor-pointer">
              <div className="aspect-square overflow-hidden bg-muted mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="font-medium mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="btn-ghost">
            View All New Arrivals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;