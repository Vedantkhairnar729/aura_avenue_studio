import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-playfair font-bold tracking-tight">
                AURA
              </h1>
            </Link>
          </div>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/women" className="text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors">
              Women
            </Link>
            <Link to="/men" className="text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors">
              Men
            </Link>
            <Link to="/accessories" className="text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors">
              Accessories
            </Link>
            <Link to="/sale" className="text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors">
              Sale
            </Link>
          </div>
          
          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/search">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <User className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;