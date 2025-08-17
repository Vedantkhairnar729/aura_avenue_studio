import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-section mb-6 text-primary-foreground">
            Stay in the Know
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Be the first to discover new collections, exclusive offers, and styling insights. 
            Join our community of fashion enthusiasts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="input-minimal border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs mt-4 opacity-70">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;