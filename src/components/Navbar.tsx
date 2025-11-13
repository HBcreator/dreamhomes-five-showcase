import { Link } from "react-router-dom";
import { Home, Building2, Info, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
            <Home className="h-6 w-6" />
            <span>DreamHomes Realty</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <Link to="/properties" className="hover:text-accent transition-colors font-medium">
              Properties
            </Link>
            <Link to="/about" className="hover:text-accent transition-colors font-medium">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors font-medium">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link to="/properties">
              <Building2 className="h-5 w-5" />
            </Link>
            <Link to="/about">
              <Info className="h-5 w-5" />
            </Link>
            <Link to="/contact">
              <Phone className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
