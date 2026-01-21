import { APP_LOGO, APP_TITLE } from "@/lib/constants";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productCategories = [
    { name: "Residential RO Systems", href: "/products/residential" },
    { name: "Commercial RO Systems", href: "/products/commercial" },
    { name: "Industrial RO Systems", href: "/products/industrial" },
    { name: "Water Softeners", href: "/products/softeners" },
    { name: "Whole House Systems", href: "/products/whole-house" },
    { name: "Accessories & Parts", href: "/products/accessories" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Request Quote", href: "/quote" },
    { name: "Become a Reseller", href: "/reseller" },
    { name: "Resources", href: "/resources" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src={APP_LOGO} alt={APP_TITLE} className="h-10 w-auto" width={160} height={40} />
            </Link>
            <h3 className="font-semibold text-lg">Aqua Care Trading LLC</h3>
            <p className="text-sm text-muted-foreground">
              Leading water filtration solutions provider in UAE. Authorized KENT distributor
              offering premium RO systems, water softeners, and purification solutions.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {productCategories.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Ware House No.7 & 8<br />
                  Al Quasis Ind. Area 1, Halab Street<br />
                  Dubai - UAE
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <a
                    href="tel:+97142675814"
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    (971) 4 267 5814
                  </a>
                  <a
                    href="tel:+971501124683"
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    (971) 50 112 4683
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:sales@waterfilteruae.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  sales@waterfilteruae.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://wa.me/971501124683"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-[#25D366] text-white rounded-md hover:bg-[#20BA5A] transition-colors text-sm font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Aqua Care Trading LLC. All rights reserved. | Authorized KENT
              Distributor for UAE
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy">
                <a className="hover:text-primary transition-colors">Privacy Policy</a>
              </Link>
              <Link href="/terms">
                <a className="hover:text-primary transition-colors">Terms of Service</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
