import { Button } from "@/components/ui/button";
import editorialImage from "@/assets/editorial-1.jpg";

const Editorial = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-section mb-6">
              Editorial
            </h2>
            <h3 className="text-2xl font-playfair mb-6 text-muted-foreground">
              "The Art of Effortless Style"
            </h3>
            <p className="text-elegant mb-8">
              Discover how to build a wardrobe that transcends fleeting trends. Our editorial team explores the intersection of timeless design and contemporary living, bringing you inspiration for every season.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-accent"></div>
                <span className="text-sm tracking-wide uppercase text-muted-foreground">
                  Sustainable Fashion
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-accent"></div>
                <span className="text-sm tracking-wide uppercase text-muted-foreground">
                  Seasonal Styling
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-accent"></div>
                <span className="text-sm tracking-wide uppercase text-muted-foreground">
                  Designer Insights
                </span>
              </div>
            </div>
            <div className="mt-10">
              <Button className="btn-accent">
                Read More Stories
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-[3/4] overflow-hidden bg-muted hover-scale">
              <img 
                src={editorialImage} 
                alt="Editorial Fashion" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editorial;