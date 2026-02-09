import { useState } from "react";
import { motion } from "motion/react";
import { Check, ChevronRight, Calendar, Users, MapPin, DollarSign, MessageCircle, Phone } from "lucide-react";
import { Button } from "../components/Button";

type Step = 1 | 2 | 3 | 4;

export function Booking() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    eventType: "",
    eventDate: "",
    location: "",
    guestCount: "",
    budgetRange: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    { number: 1, title: "Event Details", icon: Calendar },
    { number: 2, title: "Budget & Guests", icon: Users },
    { number: 3, title: "Contact Info", icon: Phone },
    { number: 4, title: "Confirmation", icon: Check }
  ];

  const eventTypes = [
    "Wedding",
    "Reception",
    "Engagement",
    "Birthday Party",
    "Corporate Event",
    "Anniversary",
    "Other"
  ];

  const budgetRanges = [
    "Under ₹2,00,000",
    "₹2,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "₹10,00,000 - ₹20,00,000",
    "Above ₹20,00,000"
  ];

  const guestCountRanges = [
    "Under 50",
    "50 - 100",
    "100 - 250",
    "250 - 500",
    "500+"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // In a real app, this would send data to backend
    console.log("Form submitted:", formData);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to inquire about event planning.\n\nEvent Type: ${formData.eventType}\nDate: ${formData.eventDate}\nLocation: ${formData.location}\nGuests: ${formData.guestCount}\nBudget: ${formData.budgetRange}\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--cream)] to-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-[var(--gold)]" size={40} />
          </div>
          
          <h1 className="text-4xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
            Thank You!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
            Your enquiry has been submitted successfully. Our team will contact you within 24 hours to discuss your event details.
          </p>

          <div className="bg-gradient-to-br from-[var(--cream)] to-white rounded-2xl p-6 mb-8">
            <h3 className="text-xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
              What's Next?
            </h3>
            <ul className="space-y-3 text-left" style={{ fontFamily: 'var(--font-sans)' }}>
              <li className="flex items-start gap-3">
                <Check className="text-[var(--gold)] flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Our event planner will review your requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[var(--gold)] flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">You'll receive a call to schedule a consultation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[var(--gold)] flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">We'll prepare a customized proposal for your event</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600" style={{ fontFamily: 'var(--font-sans)' }}>
              Need immediate assistance?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" onClick={handleWhatsApp}>
                <MessageCircle size={20} className="mr-2" />
                WhatsApp Us
              </Button>
              <Button variant="outline" onClick={() => window.location.href = "tel:+919876543210"}>
                <Phone size={20} className="mr-2" />
                Call Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--cream)] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10">
              <div 
                className="h-full bg-gradient-to-r from-[var(--maroon)] to-[var(--royal-blue)] transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              ></div>
            </div>

            {steps.map((step) => {
              const Icon = step.icon;
              const isCompleted = step.number < currentStep;
              const isCurrent = step.number === currentStep;
              
              return (
                <div key={step.number} className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                      isCompleted || isCurrent
                        ? "bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] text-white"
                        : "bg-white border-2 border-gray-300 text-gray-400"
                    }`}
                  >
                    {isCompleted ? <Check size={24} /> : <Icon size={24} />}
                  </div>
                  <span
                    className={`text-sm text-center hidden sm:block ${
                      isCompleted || isCurrent ? "text-[var(--maroon)]" : "text-gray-400"
                    }`}
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          {/* Step 1: Event Details */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-3xl mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                Tell Us About Your Event
              </h2>
              <p className="text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
                Let's start with the basics
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block mb-3 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    What type of event are you planning?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {eventTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => handleInputChange("eventType", type)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.eventType === type
                            ? "border-[var(--maroon)] bg-[var(--maroon)]/5 text-[var(--maroon)]"
                            : "border-gray-200 hover:border-[var(--maroon)]/50"
                        }`}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => handleInputChange("eventDate", e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[var(--maroon)] focus:outline-none"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Event Location / City
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="e.g., Mumbai, Bangalore"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[var(--maroon)] focus:outline-none"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Budget & Guests */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-3xl mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                Budget & Guest Count
              </h2>
              <p className="text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
                Help us customize the perfect package for you
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block mb-3 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Expected Number of Guests
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {guestCountRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() => handleInputChange("guestCount", range)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.guestCount === range
                            ? "border-[var(--maroon)] bg-[var(--maroon)]/5 text-[var(--maroon)]"
                            : "border-gray-200 hover:border-[var(--maroon)]/50"
                        }`}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-3 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Budget Range
                  </label>
                  <div className="space-y-3">
                    {budgetRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() => handleInputChange("budgetRange", range)}
                        className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                          formData.budgetRange === range
                            ? "border-[var(--maroon)] bg-[var(--maroon)]/5 text-[var(--maroon)]"
                            : "border-gray-200 hover:border-[var(--maroon)]/50"
                        }`}
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-3xl mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                Your Contact Information
              </h2>
              <p className="text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
                How can we reach you?
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[var(--maroon)] focus:outline-none"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Email Address *
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
                    Phone Number *
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

                <div>
                  <label className="block mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Additional Message (Optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us more about your vision..."
                    rows={4}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[var(--maroon)] focus:outline-none resize-none"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review & Confirm */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-3xl mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                Review Your Details
              </h2>
              <p className="text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
                Please confirm your information before submitting
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-[var(--cream)] to-white rounded-2xl p-6">
                  <h3 className="text-xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Event Details
                  </h3>
                  <div className="space-y-3" style={{ fontFamily: 'var(--font-sans)' }}>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Event Type:</span>
                      <span className="text-[var(--charcoal)]">{formData.eventType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="text-[var(--charcoal)]">{formData.eventDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="text-[var(--charcoal)]">{formData.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests:</span>
                      <span className="text-[var(--charcoal)]">{formData.guestCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Budget:</span>
                      <span className="text-[var(--charcoal)]">{formData.budgetRange}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[var(--cream)] to-white rounded-2xl p-6">
                  <h3 className="text-xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    Contact Information
                  </h3>
                  <div className="space-y-3" style={{ fontFamily: 'var(--font-sans)' }}>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="text-[var(--charcoal)]">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="text-[var(--charcoal)]">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="text-[var(--charcoal)]">{formData.phone}</span>
                    </div>
                  </div>
                </div>

                {formData.message && (
                  <div className="bg-gradient-to-br from-[var(--cream)] to-white rounded-2xl p-6">
                    <h3 className="text-xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                      Your Message
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
                      {formData.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4 mt-8 pt-8 border-t border-gray-200">
            {currentStep > 1 && (
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
            )}
            
            {currentStep < 4 ? (
              <Button 
                variant="primary" 
                onClick={handleNext}
                className="ml-auto"
              >
                Continue
                <ChevronRight size={20} className="ml-2" />
              </Button>
            ) : (
              <Button 
                variant="primary" 
                onClick={handleSubmit}
                className="ml-auto"
              >
                Submit Enquiry
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
