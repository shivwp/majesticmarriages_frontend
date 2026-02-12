import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Loader2 } from "lucide-react";
import { Button } from "../components/Button";
import { contactService } from "../services/contact.service";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await contactService.submitContact(formData);
      setIsSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918949051540?text=Hello! I'd like to inquire about your event planning services.", "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 89490 51540"],
      action: "tel:+918949051540"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@majesticmarriages.com", "bookings@majesticmarriages.com"],
      action: "mailto:info@majesticmarriages.com"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["C-56 First floor, Extension", "Nemi Nagar, Vaishali Nagar", "Jaipur, Rajasthan 302021"],
      action: null
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: By Appointment"],
      action: null
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--cream)] to-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="text-[var(--gold)]" size={40} />
          </div>

          <h1 className="text-4xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
            Message Sent!
          </h1>

          <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
            Thank you for reaching out! We'll get back to you within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
            <Button variant="outline" onClick={handleWhatsApp}>
              <MessageCircle size={20} className="mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

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
              Get in Touch
            </h1>
            <p className="text-xl text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
              We'd love to hear from you. Let's start planning your perfect event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--cream)] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-[var(--gold)]" size={24} />
                  </div>
                  <h3 className="text-xl mb-3 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {info.title}
                  </h3>
                  <div className="space-y-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {info.action && idx === 0 ? (
                          <a href={info.action} className="hover:text-[var(--maroon)] transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
                Fill out the form below and we'll get back to you shortly
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your name"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[var(--maroon)] focus:outline-none"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[var(--maroon)] focus:outline-none"
                      style={{ fontFamily: 'var(--font-sans)' }}
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[var(--maroon)] focus:outline-none"
                      style={{ fontFamily: 'var(--font-sans)' }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="What's this about?"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[var(--maroon)] focus:outline-none"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us more about your event..."
                    rows={6}
                    minLength={10}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[var(--maroon)] focus:outline-none resize-none"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    required
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      Sending...
                      <Loader2 size={20} className="ml-2 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.3969388419395!2d75.7370!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5c6b4b4b4b5%3A0x5da4ed8f8d648c69!2sVaishali%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302021!5e0!3m2!1sen!2sin!4v1702905000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Majestic Marriages Location"
                ></iframe>
              </div>

              {/* Quick Contact Actions */}
              <div className="bg-gradient-to-br from-[var(--maroon)] via-[var(--royal-blue)] to-[var(--maroon)] rounded-3xl p-8 text-white">
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                  Need Immediate Assistance?
                </h3>
                <p className="text-white/90 mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                  Reach out to us directly via phone or WhatsApp for quick responses
                </p>
                <div className="space-y-3">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl flex items-center justify-center gap-3 transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <MessageCircle size={24} />
                    <span>Chat on WhatsApp</span>
                  </button>
                  <a
                    href="tel:+918949051540"
                    className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-xl flex items-center justify-center gap-3 transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <Phone size={24} />
                    <span>Call Us Now</span>
                  </a>
                  <a
                    href="mailto:info@majesticmarriages.com"
                    className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-xl flex items-center justify-center gap-3 transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <Mail size={24} />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              Our team is here to help! Feel free to reach out with any questions about our services, packages, or availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Contact Us
              </Button>
              <a href="/booking">
                <Button variant="outline" size="lg">
                  Book Consultation
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}