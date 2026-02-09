import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function StickyActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/919849051540?text=Hello! I'm interested in your event planning services.", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919849051540";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-[var(--charcoal)] rounded-full shadow-lg flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsApp}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCall}
        className="w-14 h-14 bg-[var(--maroon)] hover:bg-[var(--maroon)]/90 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Call us"
      >
        <Phone size={24} />
      </motion.button>
    </div>
  );
}