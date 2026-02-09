import { Link } from "react-router";
import { Button } from "../components/Button";
import { Heart, Sparkles, Users, Award, Star, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  const services = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Complete wedding planning from engagement to reception with personalized themes",
      image: "https://images.unsplash.com/photo-1743684821666-05b9c5046937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBjb3VwbGV8ZW58MXx8fHwxNzcwMjg5OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Sparkles,
      title: "Decoration & Themes",
      description: "Stunning decorations with premium flowers, lighting, and custom themes",
      image: "https://images.unsplash.com/photo-1581720848209-9721f8fa30ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGVjb3JhdGlvbiUyMGZsb3dlcnMlMjBlbGVnYW50fGVufDF8fHx8MTc3MDI4OTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Users,
      title: "Corporate Events",
      description: "Professional event management for conferences, seminars, and product launches",
      image: "https://images.unsplash.com/photo-1769667693219-4d8e44b6a3b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNvbmZlcmVuY2UlMjBoYWxsfGVufDF8fHx8MTc3MDIyMzY2OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Award,
      title: "Birthday Parties",
      description: "Memorable birthday celebrations for all ages with creative themes",
      image: "https://images.unsplash.com/photo-1721804812395-12c7c963ca52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAxOTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Industry expertise with thousands of successful events"
    },
    {
      icon: Users,
      title: "In-House Team",
      description: "Dedicated professionals for every aspect of your event"
    },
    {
      icon: Heart,
      title: "Transparent Pricing",
      description: "No hidden costs, clear packages tailored to your budget"
    },
    {
      icon: Star,
      title: "End-to-End Service",
      description: "From concept to execution, we handle everything"
    }
  ];

  const testimonials = [
    {
      name: "Priya & Rahul Sharma",
      event: "Wedding",
      text: "Majestic Marriages made our dream wedding come true! Every detail was perfect, from the mandap decoration to the reception. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Patel",
      event: "Corporate Event",
      text: "Professional, timely, and exceeded expectations. Our product launch was a huge success thanks to their meticulous planning.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      event: "Birthday Party",
      text: "They transformed my daughter's birthday into a magical fairytale! The attention to detail was incredible.",
      rating: 5
    }
  ];

  const portfolioImages = [
    "https://images.unsplash.com/photo-1743684821666-05b9c5046937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBjb3VwbGV8ZW58MXx8fHwxNzcwMjg5OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1700157679224-56c9f3d15118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBicmlkZSUyMGdyb29tfGVufDF8fHx8MTc3MDI4OTk3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1712314947761-a8d718bd8c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdmVudWV8ZW58MXx8fHwxNzcwMjg5OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1581720848209-9721f8fa30ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGVjb3JhdGlvbiUyMGZsb3dlcnMlMjBlbGVnYW50fGVufDF8fHx8MTc3MDI4OTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] bg-gradient-to-br from-[var(--maroon)] via-[var(--royal-blue)] to-[var(--maroon)] overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1712314947761-a8d718bd8c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdmVudWV8ZW58MXx8fHwxNzcwMjg5OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080')` }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-[var(--gold)]/20 backdrop-blur-sm border border-[var(--gold)] rounded-full"
            >
              <span className="text-[var(--gold)]" style={{ fontFamily: 'var(--font-sans)' }}>✨ Premium Event Management</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              We Plan Your Dreamdddddd{" "}
              <span className="text-[var(--gold)]">Wedding</span> & Events
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
              Creating unforgettable moments with elegance, precision, and passion. From intimate gatherings to grand celebrations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking">
                <Button variant="gold" size="lg">
                  Get a Free Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-[var(--maroon)]">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-[var(--gold)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[var(--gold)]/10 rounded-full blur-3xl"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
              End-to-end event management tailored to your vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-[var(--gold)]" size={24} />
                    </div>
                    <h3 className="text-xl mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                      {service.description}
                    </p>
                    <Link to="/services" className="text-[var(--royal-blue)] hover:text-[var(--maroon)] inline-flex items-center gap-1 transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                      Learn More <ChevronRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--cream)] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Why Choose Majestic Marriages?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
              Excellence in every detail, trust in every promise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-[var(--gold)]" size={32} />
                  </div>
                  <h3 className="text-xl mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'var(--font-sans)' }}>
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Our Recent Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
              Glimpses of celebrations we've brought to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button variant="primary" size="lg">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--maroon)] via-[var(--royal-blue)] to-[var(--maroon)] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--gold)]" style={{ fontFamily: 'var(--font-serif)' }}>
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
              Real stories from real celebrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="var(--gold)" className="text-[var(--gold)]" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic" style={{ fontFamily: 'var(--font-sans)' }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="text-[var(--gold)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                    {testimonial.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[var(--cream)] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Let's Plan Your Perfect Event
            </h2>
            <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              Your dream celebration is just a conversation away. Get in touch with our expert planners today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button variant="primary" size="lg">
                  Start Planning Now
                </Button>
              </Link>
              <Link to="/packages">
                <Button variant="outline" size="lg">
                  View Our Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}