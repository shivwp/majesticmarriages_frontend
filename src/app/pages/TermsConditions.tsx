import { motion } from "motion/react";
import { FileText, AlertCircle, CreditCard, Ban, Shield, Scale } from "lucide-react";
import { Link } from "react-router";

export function TermsConditions() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the services of Majestic Marriages, you accept and agree to be bound by these Terms and Conditions.",
        "These terms apply to all visitors, users, and clients who access or use our services.",
        "If you do not agree with any part of these terms, you must not use our services.",
        "We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance of the revised terms.",
        "Additional terms may apply to specific services, events, or packages, which will be communicated separately."
      ]
    },
    {
      icon: Shield,
      title: "Services Provided",
      content: [
        "Majestic Marriages provides comprehensive event management services including weddings, receptions, corporate events, and other celebrations.",
        "Our services include but are not limited to: event planning, venue coordination, decoration, vendor management, and on-site supervision.",
        "Specific services will be detailed in individual service agreements or contracts.",
        "We reserve the right to refuse service to anyone for any lawful reason.",
        "Service availability is subject to our capacity and scheduling constraints.",
        "Custom packages and special requests are subject to availability and additional charges."
      ]
    },
    {
      icon: CreditCard,
      title: "Booking and Payment Terms",
      content: [
        "A non-refundable booking fee of 25% is required to confirm your event date and secure our services.",
        "The remaining balance must be paid according to the payment schedule outlined in your service agreement.",
        "Final payment must be received at least 15 days before the event date, unless otherwise agreed.",
        "Late payments may result in service modifications or cancellation at our discretion.",
        "All prices are quoted in Indian Rupees (INR) and are subject to applicable taxes.",
        "We accept payments via bank transfer, UPI, credit/debit cards, and cash (for amounts within legal limits).",
        "Payment plans and installment options may be available for premium packages upon request."
      ]
    },
    {
      icon: Ban,
      title: "Cancellation and Refund Policy",
      content: [
        "Cancellation more than 90 days before event: 50% refund of amount paid (excluding booking fee).",
        "Cancellation 60-90 days before event: 30% refund of amount paid (excluding booking fee).",
        "Cancellation 30-60 days before event: 15% refund of amount paid (excluding booking fee).",
        "Cancellation less than 30 days before event: No refund.",
        "The initial booking fee is non-refundable under all circumstances.",
        "Postponement of event date may be allowed subject to availability and rescheduling charges.",
        "Refunds will be processed within 30 business days of approved cancellation.",
        "Force majeure events (natural disasters, government restrictions) will be handled case-by-case."
      ]
    },
    {
      icon: AlertCircle,
      title: "Client Responsibilities",
      content: [
        "Clients must provide accurate information about the event, including date, venue, guest count, and requirements.",
        "Clients are responsible for obtaining all necessary permits and permissions for venues and events.",
        "Clients must ensure venue access and cooperation from venue management.",
        "Any changes to event details must be communicated in writing at least 30 days in advance.",
        "Clients are responsible for the behavior of their guests and any damages caused by them.",
        "Clients must respect the decisions and professional judgment of our team regarding event execution.",
        "Payment obligations remain in effect regardless of event attendance or success."
      ]
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      content: [
        "Majestic Marriages acts as a coordinator and is not liable for the actions of third-party vendors.",
        "We are not responsible for delays or failures caused by circumstances beyond our control.",
        "Our liability is limited to the amount paid for our services.",
        "We are not liable for indirect, consequential, or incidental damages.",
        "Clients are advised to obtain event insurance for comprehensive coverage.",
        "We do not guarantee specific outcomes or experiences, though we strive for excellence.",
        "Any disputes with vendors must be resolved directly between the client and vendor."
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        "All content on our website, including text, graphics, logos, and images, is our property or licensed to us.",
        "You may not reproduce, distribute, or create derivative works without our written permission.",
        "Event photographs and videos may be used by us for promotional purposes unless you opt out in writing.",
        "Client testimonials and reviews may be featured on our website and marketing materials.",
        "We respect your privacy and will not share personally identifiable information without consent.",
        "You grant us a license to use event photos/videos for portfolio and marketing purposes."
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
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Scale size={40} className="text-[var(--gold)]" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Terms & Conditions
            </h1>
            <p className="text-xl text-white/90 mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              Please read these terms carefully before using our services
            </p>
            <p className="text-white/80" style={{ fontFamily: 'var(--font-sans)' }}>
              Last Updated: February 6, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
              Welcome to Majestic Marriages. These Terms and Conditions govern your use of our website and services. By engaging our services or using our website, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
              These terms constitute a legally binding agreement between you (the "Client") and Majestic Marriages (the "Company"). Please contact us if you have any questions before proceeding with our services.
            </p>
            <div className="bg-[var(--cream)] border-l-4 border-[var(--maroon)] p-6 rounded-lg">
              <p className="text-gray-800 font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
                <strong>Important Notice:</strong> These terms supplement any written agreements or contracts entered into for specific events. In case of conflict, the specific event contract takes precedence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--cream)] to-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] rounded-full flex items-center justify-center flex-shrink-0">
                    <section.icon className="text-[var(--gold)]" size={28} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl text-[var(--maroon)] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                      {section.title}
                    </h2>
                  </div>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
                      <span className="text-[var(--gold)] mt-1 flex-shrink-0">✦</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Force Majeure */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl text-[var(--maroon)] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Force Majeure
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              Neither party shall be liable for failure to perform obligations due to circumstances beyond reasonable control, including but not limited to: natural disasters, war, terrorism, civil unrest, government actions, pandemics, strikes, or severe weather conditions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
              In such cases, we will work with you to reschedule the event or provide alternative solutions. Refunds in force majeure situations will be evaluated on a case-by-case basis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--cream)] to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl text-[var(--maroon)] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Dispute Resolution
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
              <p className="text-lg leading-relaxed">
                Any disputes arising from these terms or our services shall first be attempted to be resolved through good faith negotiations between the parties.
              </p>
              <p className="text-lg leading-relaxed">
                If negotiations fail, the dispute may be submitted to mediation. If mediation is unsuccessful, the dispute shall be resolved through binding arbitration in Jaipur, Rajasthan, in accordance with the Arbitration and Conciliation Act, 1996.
              </p>
              <p className="text-lg leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India. The courts of Jaipur, Rajasthan shall have exclusive jurisdiction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Indemnification */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl text-[var(--maroon)] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Indemnification
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
              You agree to indemnify and hold harmless Majestic Marriages, its employees, and representatives from any claims, damages, liabilities, costs, or expenses (including legal fees) arising from: (a) your violation of these terms, (b) your violation of any rights of third parties, (c) your use of our services, or (d) the conduct of your event or guests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Severability */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--cream)] to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl text-[var(--maroon)] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Severability & Entire Agreement
            </h2>
            <div className="space-y-4 text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
              <p className="text-lg leading-relaxed">
                If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
              <p className="text-lg leading-relaxed">
                These Terms and Conditions, along with our Privacy Policy and any written service agreements, constitute the entire agreement between you and Majestic Marriages regarding the use of our services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--maroon)] via-[var(--royal-blue)] to-[var(--maroon)] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-white/90 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              If you have any questions or concerns about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4">
              <div>
                <p className="text-[var(--gold)] font-semibold mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                  Majestic Marriages
                </p>
                <p className="text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
                  C-56 First floor, Extension, Nemi Nagar,<br />
                  Vaishali Nagar, Jaipur, Rajasthan 302021
                </p>
              </div>
              <div>
                <p className="text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
                  Phone: <a href="tel:+918949051540" className="text-[var(--gold)] hover:underline">+91 89490 51540</a>
                </p>
                <p className="text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
                  Email: <a href="mailto:info@majesticmarriages.com" className="text-[var(--gold)] hover:underline">info@majesticmarriages.com</a>
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                to="/contact"
                className="inline-block px-8 py-3 bg-[var(--gold)] text-[var(--charcoal)] rounded-full font-semibold hover:bg-[var(--gold)]/90 transition-all"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
