import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/lib/constants";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src={APP_LOGO} alt={APP_TITLE} className="h-10 w-auto" width={160} height={40} />
            <span className="hidden font-bold text-xl text-primary sm:inline-block">
              {APP_TITLE}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive(item.href) ? "default" : "ghost"}
                  className="text-sm font-medium"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+97142675814" className="flex items-center">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">Call Us</span>
              </Button>
            </a>
            <Link href="/quote">
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className="w-full justify-start text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <a href="tel:+97142675814" className="block">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Call Us: (971) 4 267 5814
                  </Button>
                </a>
                <Link href="/quote">
                  <Button
                    className="w-full bg-accent hover:bg-accent/90"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
