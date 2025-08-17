import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-playfair font-bold mb-6">AURA</h3>
            <p className="text-sm opacity-80 mb-6">
              Timeless fashion for the modern individual. Crafted with care, designed to last.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-6">Shop</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><a href="#" className="hover:text-accent transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sale</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">New Arrivals</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-6">Support</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><a href="#" className="hover:text-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-6">Company</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <p>&copy; 2024 AURA. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;