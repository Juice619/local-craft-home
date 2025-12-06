import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    label: "Services",
    href: "#services"
  }, {
    label: "Portfolio",
    href: "#portfolio"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Testimonials",
    href: "#testimonials"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  return <>
      {/* Desktop Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container-main">
          <nav className="flex items-center justify-between py-4">
            <a href="/" className="flex items-center">
              <img src={logo} alt="2 Bros Construction" className="h-16 lg:h-20 w-auto" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map(item => <a key={item.label} href={item.href} className="text-cream/90 hover:text-cream transition-colors font-medium">
                  {item.label}
                </a>)}
              <a href="tel:+16194961364">
                <Button variant="accent" size="lg">
                  <Phone className="w-4 h-4" />
                  (619) 496-1364
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-cream p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="lg:hidden bg-charcoal/95 backdrop-blur-md animate-fade-in">
            <div className="container-main py-4 space-y-4">
              {navItems.map(item => <a key={item.label} href={item.href} className="block text-cream py-2 text-lg" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>)}
            </div>
          </div>}
      </header>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-charcoal border-t border-border/20 px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between gap-3">
          <a href="tel:+16194961364" className="flex-1">
            <Button variant="accent" className="w-full" size="lg">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
          <a href="#contact" className="flex-1">
            <Button variant="outline-light" className="w-full" size="lg">
              Get Quote
            </Button>
          </a>
        </div>
      </div>
    </>;
};
export default Header;