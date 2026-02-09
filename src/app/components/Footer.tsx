import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--maroon)] via-[var(--royal-blue)] to-[var(--maroon)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center">
                <span className="text-[var(--maroon)] text-2xl" style={{ fontFamily: 'var(--font-serif)' }}>M</span>
              </div>
              <div>
                <h3 className="text-xl" style={{ fontFamily: 'var(--font-serif)' }}>Majestic Marriages</h3>
                <p className="text-sm text-white/80">Premium Wedding & Event Planning</p>
              </div>
            </div>
            <p className="text-white/90 mb-4 max-w-md" style={{ fontFamily: 'var(--font-sans)' }}>
              Creating unforgettable moments for your special occasions. From dream weddings to corporate excellence, we bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[var(--gold)] rounded-full flex items-center justify-center transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[var(--gold)] rounded-full flex items-center justify-center transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[var(--gold)] rounded-full flex items-center justify-center transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Quick Links</h4>
            <ul className="space-y-2" style={{ fontFamily: 'var(--font-sans)' }}>
              <li><Link to="/services" className="text-white/80 hover:text-[var(--gold)] transition-colors">Services</Link></li>
              <li><Link to="/packages" className="text-white/80 hover:text-[var(--gold)] transition-colors">Packages</Link></li>
              <li><Link to="/portfolio" className="text-white/80 hover:text-[var(--gold)] transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-[var(--gold)] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-[var(--gold)] transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-white/80 hover:text-[var(--gold)] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-white/80 hover:text-[var(--gold)] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Contact Us</h4>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-sans)' }}>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 text-[var(--gold)]" />
                <div>
                  <p className="text-white/90">+91 89490 51540</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 text-[var(--gold)]" />
                <p className="text-white/90">info@majesticmarriages.com</p>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-[var(--gold)]" />
                <p className="text-white/90">C-56 First floor, Extension, Nemi Nagar, Vaishali Nagar, Jaipur, Rajasthan 302021</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70" style={{ fontFamily: 'var(--font-sans)' }}>
          <p>&copy; 2026 Majestic Marriages. All rights reserved. Crafting dreams into reality.</p>
          <div className="mt-2 flex justify-center gap-4 text-sm">
            <Link to="/privacy-policy" className="hover:text-[var(--gold)] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-conditions" className="hover:text-[var(--gold)] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}