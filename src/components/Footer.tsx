import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/cooltech-logo.jpeg";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "AC Repair",
    "Fridge Repair",
    "Washing Machine Repair",
    "Dryer Repair",
    "Gas Refilling",
    "Annual Maintenance",
  ];

  return (
    <footer className="bg-secondary/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="Cool Tech Refrigeration"
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Cool Tech</h3>
                <p className="text-xs text-muted-foreground">Refrigeration</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Breathing new life to broken appliances since 2013. Your trusted repair partner in Hatton.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+94770733074"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +94 77 073 3074
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:cooltechrefrigeration2000@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    cooltechrefrigeration2000@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  No 15, Nuwareliya Road <br/> Hatton
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Cool Tech Refrigeration. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2 italic">
            "Breathing new life to broken appliances"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
