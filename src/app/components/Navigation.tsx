import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/packages" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-[var(--gold)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] rounded-full flex items-center justify-center">
                <span className="text-[var(--gold)] text-2xl" style={{ fontFamily: 'var(--font-serif)' }}>M</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--gold)] rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                <span className="text-[var(--maroon)]">Majestic</span>{" "}
                <span className="text-[var(--royal-blue)]">Marriages</span>
              </h1>
              <p className="text-xs text-gray-600">Premium Wedding & Event Planning</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-1 py-2 transition-colors ${
                  isActive(link.path)
                    ? "text-[var(--maroon)]"
                    : "text-gray-700 hover:text-[var(--maroon)]"
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--gold)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-gradient-to-r from-[var(--maroon)] to-[var(--royal-blue)] text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all hover:scale-105"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg ${
                    isActive(link.path)
                      ? "bg-[var(--maroon)]/10 text-[var(--maroon)]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-[var(--maroon)] to-[var(--royal-blue)] text-white px-4 py-3 rounded-lg text-center"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}