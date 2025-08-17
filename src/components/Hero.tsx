import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-hero mb-6 animate-fade-in">
          Timeless Elegance
        </h1>
        <p className="text-elegant mb-8 max-w-2xl mx-auto text-white/90 animate-fade-in">
          Discover our curated collection of premium fashion that transcends seasons and trends. 
          Where sophistication meets contemporary design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button className="btn-hero">
            Shop Collection
          </Button>
          <Button className="btn-ghost">
            Explore Lookbook
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;