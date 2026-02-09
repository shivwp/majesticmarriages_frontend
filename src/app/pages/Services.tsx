import { Link } from "react-router";
import { Button } from "../components/Button";
import { Heart, Sparkles, Users, Award, Camera, UtensilsCrossed, Music, MapPin, Check } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Complete end-to-end wedding planning services for your special day",
      image: "https://images.unsplash.com/photo-1743684821666-05b9c5046937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBjb3VwbGV8ZW58MXx8fHwxNzcwMjg5OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Pre-wedding ceremonies coordination",
        "Wedding day timeline management",
        "Vendor coordination & management",
        "Guest management & RSVPs",
        "Budget planning & tracking",
        "Theme conceptualization",
        "Venue selection assistance",
        "On-site event coordination"
      ]
    },
    {
      icon: Sparkles,
      title: "Decoration & Themes",
      description: "Stunning decorations that transform venues into magical spaces",
      image: "https://images.unsplash.com/photo-1581720848209-9721f8fa30ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGVjb3JhdGlvbiUyMGZsb3dlcnMlMjBlbGVnYW50fGVufDF8fHx8MTc3MDI4OTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Custom theme design",
        "Fresh flower arrangements",
        "Stage & mandap decoration",
        "Entrance & walkway decor",
        "Table centerpieces & settings",
        "Lighting design & setup",
        "Backdrop & draping",
        "Cultural & traditional elements"
      ]
    },
    {
      icon: UtensilsCrossed,
      title: "Catering Management",
      description: "Curated culinary experiences with premium catering partners",
      image: "https://images.unsplash.com/photo-1751651054936-db23f5d67160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGZvb2QlMjBidWZmZXQlMjBlbGVnYW50fGVufDF8fHx8MTc3MDI5MDA1NHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Multi-cuisine menu options",
        "Custom menu creation",
        "Professional chef coordination",
        "Live cooking stations",
        "Beverage & bar management",
        "Dietary requirement handling",
        "Food presentation styling",
        "Tasting sessions"
      ]
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional photography and videography to capture every moment",
      image: "https://images.unsplash.com/photo-1769230385107-bc6eaa7a123e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaGVyJTIwY2FtZXJhJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDE5NzM1NXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Pre-wedding photoshoot",
        "Candid photography",
        "Traditional photography",
        "Cinematic videography",
        "Drone coverage",
        "Photo & video editing",
        "Same-day highlight reel",
        "Photo albums & prints"
      ]
    },
    {
      icon: Users,
      title: "Corporate Events",
      description: "Professional management for conferences, seminars, and corporate functions",
      image: "https://images.unsplash.com/photo-1769667693219-4d8e44b6a3b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNvbmZlcmVuY2UlMjBoYWxsfGVufDF8fHx8MTc3MDIyMzY2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Conference & seminar planning",
        "Product launch management",
        "Team building events",
        "Corporate parties",
        "Audio-visual setup",
        "Registration & check-in",
        "Speaker coordination",
        "Branding & signage"
      ]
    },
    {
      icon: Award,
      title: "Birthday Parties",
      description: "Memorable birthday celebrations with creative themes for all ages",
      image: "https://images.unsplash.com/photo-1721804812395-12c7c963ca52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAxOTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Theme-based decoration",
        "Entertainment coordination",
        "Custom cake arrangement",
        "Games & activities",
        "Party favors & gifts",
        "Photography coverage",
        "Catering & refreshments",
        "Venue arrangement"
      ]
    },
    {
      icon: Music,
      title: "Entertainment & Music",
      description: "Professional entertainment and music arrangement for your event",
      image: "https://images.unsplash.com/photo-1670028514318-0ac718c0590d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHN0YWdlJTIwbGlnaHRpbmclMjBjb25jZXJ0fGVufDF8fHx8MTc3MDI5MDA1NHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Live band coordination",
        "DJ & music setup",
        "Sound system arrangement",
        "Stage & lighting setup",
        "Cultural performances",
        "Celebrity artist booking",
        "Choreography services",
        "MC & anchor services"
      ]
    },
    {
      icon: MapPin,
      title: "Venue Selection",
      description: "Expert guidance in selecting the perfect venue for your event",
      image: "https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBvdXRkb29yJTIwZ2FyZGVufGVufDF8fHx8MTc3MDI5MDA1NXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Venue scouting & visits",
        "Capacity assessment",
        "Budget negotiation",
        "Contract management",
        "Accessibility evaluation",
        "Outdoor & indoor options",
        "Destination venue planning",
        "Backup venue arrangements"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Our Premium Services
            </h1>
            <p className="text-xl text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
              Comprehensive event solutions tailored to create unforgettable experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="w-16 h-16 bg-[var(--gold)] rounded-full flex items-center justify-center mb-4">
                          <Icon className="text-[var(--maroon)]" size={32} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-4xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="text-[var(--gold)] flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link to="/booking">
                      <Button variant="primary">
                        Book This Service
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--cream)] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Ready to Start Planning?
            </h2>
            <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              Let's create something extraordinary together. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button variant="primary" size="lg">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/packages">
                <Button variant="outline" size="lg">
                  View Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
