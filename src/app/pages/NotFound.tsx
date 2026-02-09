import { Link } from "react-router";
import { Button } from "../components/Button";
import { Home, Search } from "lucide-react";
import { motion } from "motion/react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--cream)] to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <div className="mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-9xl text-[var(--maroon)] mb-4" 
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            404
          </motion.div>
          <h1 className="text-4xl md:text-5xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="primary" size="lg">
              <Home size={20} className="mr-2" />
              Go to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              <Search size={20} className="mr-2" />
              Contact Support
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <p className="text-gray-600 mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
            Looking for something specific?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services" className="text-[var(--maroon)] hover:text-[var(--royal-blue)] transition-colors">
              Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/packages" className="text-[var(--maroon)] hover:text-[var(--royal-blue)] transition-colors">
              Packages
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/portfolio" className="text-[var(--maroon)] hover:text-[var(--royal-blue)] transition-colors">
              Portfolio
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/booking" className="text-[var(--maroon)] hover:text-[var(--royal-blue)] transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
