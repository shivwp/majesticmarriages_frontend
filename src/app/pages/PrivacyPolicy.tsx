import { motion } from "motion/react";
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from "lucide-react";
import { Link } from "react-router";

export function PrivacyPolicy() {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, and postal address when you contact us or book our services.",
        "Event Information: Details about your event including date, venue preferences, guest count, and specific requirements.",
        "Payment Information: Billing details and transaction information (processed securely through our payment partners).",
        "Usage Data: Information about how you interact with our website, including IP address, browser type, and pages visited.",
        "Communication Records: Copies of correspondence, inquiries, and feedback you provide to us."
      ]
    },
    {
      icon: UserCheck,
      title: "How We Use Your Information",
      content: [
        "To provide and deliver our event management services and fulfill your requests.",
        "To communicate with you about your event, send confirmations, and provide customer support.",
        "To process payments and maintain accurate financial records.",
        "To improve our services, website functionality, and customer experience.",
        "To send you updates, promotional materials, and information about our services (with your consent).",
        "To comply with legal obligations and protect our rights and interests."
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information.",
        "All sensitive data is encrypted using SSL/TLS protocols during transmission.",
        "Access to personal information is restricted to authorized personnel only.",
        "We regularly review and update our security practices to protect against unauthorized access.",
        "Payment information is processed through secure, PCI-compliant payment gateways.",
        "We maintain physical, electronic, and procedural safeguards to protect your data."
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: [
        "Service Providers: We may share information with trusted vendors (caterers, decorators, photographers) necessary to deliver your event.",
        "Legal Requirements: We may disclose information when required by law or to protect our legal rights.",
        "Business Transfers: In case of merger, acquisition, or sale, your information may be transferred to the new entity.",
        "With Your Consent: We will share information with third parties when you have given explicit consent.",
        "We do NOT sell, rent, or trade your personal information to third parties for marketing purposes."
      ]
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: [
        "Access: You have the right to request copies of your personal information.",
        "Correction: You can request correction of inaccurate or incomplete information.",
        "Deletion: You may request deletion of your personal data (subject to legal requirements).",
        "Objection: You can object to processing of your personal information for marketing purposes.",
        "Data Portability: You can request transfer of your data to another service provider.",
        "Withdraw Consent: You may withdraw consent for data processing at any time."
      ]
    },
    {
      icon: Mail,
      title: "Cookies and Tracking",
      content: [
        "We use cookies and similar technologies to enhance your browsing experience.",
        "Essential cookies are necessary for website functionality and cannot be disabled.",
        "Analytics cookies help us understand how visitors use our website.",
        "Marketing cookies may be used to provide personalized content and advertisements.",
        "You can control cookie preferences through your browser settings.",
        "Disabling cookies may affect website functionality and user experience."
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
                <Shield size={40} className="text-[var(--gold)]" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              Your privacy is important to us
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
              At Majestic Marriages, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
              By accessing or using our services, you agree to the terms outlined in this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
            <div className="bg-[var(--cream)] border-l-4 border-[var(--gold)] p-6 rounded-lg">
              <p className="text-gray-800 font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
                <strong>Important:</strong> We respect your privacy and will never sell your personal information to third parties. We only collect and use information necessary to provide you with exceptional event management services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
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

      {/* Data Retention */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl text-[var(--maroon)] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Data Retention
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Event-related information may be retained for up to 7 years for legal and business record-keeping purposes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
              When your information is no longer required, we will securely delete or anonymize it in accordance with applicable data protection laws.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Third-Party Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--cream)] to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl text-[var(--maroon)] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Third-Party Links
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              Our website may contain links to third-party websites, including our partner vendors and service providers. We are not responsible for the privacy practices or content of these external sites.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
              We encourage you to review the privacy policies of any third-party sites you visit. Your use of third-party websites is at your own risk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl text-[var(--maroon)] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Children's Privacy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
              Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to remove such information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Changes to Policy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--cream)] to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl text-[var(--maroon)] mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Changes to This Privacy Policy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
              Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--maroon)] via-[var(--royal-blue)] to-[var(--maroon)] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Questions About Privacy?
            </h2>
            <p className="text-xl text-white/90 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
