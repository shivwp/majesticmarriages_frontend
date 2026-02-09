import { Link } from "react-router";
import { Button } from "../components/Button";
import { Check, Star, Sparkles, Crown } from "lucide-react";
import { motion } from "motion/react";

export function Packages() {
  const packages = [
    {
      name: "Silver",
      icon: Star,
      price: "₹2,50,000",
      description: "Perfect for intimate gatherings and smaller celebrations",
      color: "from-gray-300 to-gray-400",
      textColor: "text-gray-700",
      features: [
        "Basic event planning consultation",
        "Venue decoration (basic theme)",
        "Standard floral arrangements",
        "Catering coordination (up to 100 guests)",
        "Basic photography (4 hours)",
        "Sound system setup",
        "Event day coordination",
        "Basic lighting arrangement",
        "Guest seating management",
        "Timeline planning"
      ],
      recommended: false
    },
    {
      name: "Gold",
      icon: Sparkles,
      price: "₹5,00,000",
      description: "Comprehensive planning for memorable celebrations",
      color: "from-[var(--gold)] to-yellow-600",
      textColor: "text-[var(--gold)]",
      features: [
        "Complete event planning & management",
        "Premium venue decoration (custom theme)",
        "Premium floral & stage decoration",
        "Full catering service (up to 250 guests)",
        "Professional photography & videography (8 hours)",
        "Drone coverage",
        "DJ & entertainment coordination",
        "Advanced lighting & stage setup",
        "Guest management system",
        "Pre-event rehearsal coordination",
        "Custom invitations design",
        "Dedicated event coordinator"
      ],
      recommended: true
    },
    {
      name: "Platinum",
      icon: Crown,
      price: "₹10,00,000+",
      description: "Ultra-luxury experience with no compromise on excellence",
      color: "from-purple-500 to-indigo-600",
      textColor: "text-purple-600",
      features: [
        "End-to-end luxury event planning",
        "Ultra-premium venue decoration",
        "Exotic floral arrangements & installations",
        "Gourmet catering (unlimited guests)",
        "Elite photography & videography team (full day)",
        "Aerial drone & crane shots",
        "Live band & celebrity artist coordination",
        "Spectacular lighting & effects",
        "VIP guest concierge service",
        "Multi-day event coordination",
        "Custom wedding website & app",
        "Designer invitations & favors",
        "Destination wedding planning",
        "Accommodation coordination",
        "Dedicated planning team (3+ coordinators)",
        "Post-event album & video editing"
      ],
      recommended: false
    }
  ];

  const addOns = [
    "Pre-wedding photoshoot",
    "Mehendi ceremony planning",
    "Sangeet choreography",
    "Welcome dinner coordination",
    "Guest transportation",
    "Accommodation booking",
    "Cultural performances",
    "Fireworks display",
    "Photo booth setup",
    "Live streaming service",
    "Custom signage & branding",
    "Wedding favors & gifts"
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
              Our Packages & Pricing
            </h1>
            <p className="text-xl text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
              Choose the perfect package for your celebration or create a custom plan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--cream)] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                    pkg.recommended ? 'ring-4 ring-[var(--gold)] scale-105 lg:scale-110 z-10' : ''
                  }`}
                >
                  {pkg.recommended && (
                    <div className="absolute top-0 right-0 bg-[var(--gold)] text-white px-6 py-2 text-sm rounded-bl-2xl" style={{ fontFamily: 'var(--font-sans)' }}>
                      Most Popular
                    </div>
                  )}

                  <div className={`bg-gradient-to-br ${pkg.color} p-8 text-white text-center`}>
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={40} />
                    </div>
                    <h3 className="text-3xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                      {pkg.name}
                    </h3>
                    <p className="text-sm mb-4 text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
                      {pkg.description}
                    </p>
                    <div className="text-5xl mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                      {pkg.price}
                    </div>
                    <p className="text-sm text-white/80" style={{ fontFamily: 'var(--font-sans)' }}>
                      Starting price
                    </p>
                  </div>

                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className={pkg.textColor} size={20} className="flex-shrink-0 mt-1 text-[var(--gold)]" />
                          <span className="text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/booking">
                      <Button 
                        variant={pkg.recommended ? "primary" : "outline"}
                        className="w-full"
                      >
                        Choose {pkg.name}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Package Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Need a Custom Package?
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'var(--font-sans)' }}>
              We understand every event is unique. Build your perfect package with our add-on services.
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-[var(--cream)] to-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl mb-6 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Available Add-On Services
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {addOns.map((addon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg"
                >
                  <Sparkles className="text-[var(--gold)]" size={20} />
                  <span className="text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
                    {addon}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/booking">
                <Button variant="gold" size="lg">
                  Request Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Transparent Pricing Promise
            </h2>
            <p className="text-xl text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
              No hidden costs, no surprises. Just honest pricing for exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl mb-4 text-[var(--gold)]" style={{ fontFamily: 'var(--font-serif)' }}>
                What's Included
              </h3>
              <ul className="space-y-2" style={{ fontFamily: 'var(--font-sans)' }}>
                <li className="flex items-start gap-2">
                  <Check className="text-[var(--gold)] flex-shrink-0 mt-1" size={18} />
                  <span>All prices are inclusive of GST</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[var(--gold)] flex-shrink-0 mt-1" size={18} />
                  <span>Detailed itemized quotation provided</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[var(--gold)] flex-shrink-0 mt-1" size={18} />
                  <span>Flexible payment plans available</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[var(--gold)] flex-shrink-0 mt-1" size={18} />
                  <span>Price lock-in guarantee</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl mb-4 text-[var(--gold)]" style={{ fontFamily: 'var(--font-serif)' }}>
                Payment Terms
              </h3>
              <ul className="space-y-2" style={{ fontFamily: 'var(--font-sans)' }}>
                <li className="flex items-start gap-2">
                  <Check className="text-[var(--gold)] flex-shrink-0 mt-1" size={18} />
                  <span>20% booking amount to confirm</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[var(--gold)] flex-shrink-0 mt-1" size={18} />
                  <span>Milestone-based payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[var(--gold)] flex-shrink-0 mt-1" size={18} />
                  <span>Final payment before event day</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[var(--gold)] flex-shrink-0 mt-1" size={18} />
                  <span>Multiple payment methods accepted</span>
                </li>
              </ul>
            </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              Schedule a free consultation to discuss your event and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button variant="primary" size="lg">
                  Book Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
