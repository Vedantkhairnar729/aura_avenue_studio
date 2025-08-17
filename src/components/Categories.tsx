import menImage from "@/assets/category-men.jpg";
import womenImage from "@/assets/category-women.jpg";
import accessoriesImage from "@/assets/category-accessories.jpg";

const Categories = () => {
  const categories = [
    {
      title: "Women",
      subtitle: "Elegant & Contemporary",
      image: womenImage,
      link: "#women",
    },
    {
      title: "Men", 
      subtitle: "Refined & Modern",
      image: menImage,
      link: "#men",
    },
    {
      title: "Accessories",
      subtitle: "Curated Details",
      image: accessoriesImage,
      link: "#accessories",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section mb-4">Shop by Category</h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Explore our carefully curated collections designed for the modern lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer hover-lift"
            >
              <div className="relative aspect-square overflow-hidden bg-muted mb-6">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-playfair font-semibold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm tracking-wide uppercase opacity-90">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;