import { motion } from "motion/react";
import { Award, Heart, Target, Users, CheckCircle, Star } from "lucide-react";
import { Button } from "../components/Button";
import { Link } from "react-router";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and pour our hearts into every event"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering nothing less than perfection"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships with our clients"
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Constantly evolving with creative and fresh ideas"
    }
  ];

  const achievements = [
    {
      number: "15+",
      label: "Years of Excellence"
    },
    {
      number: "1500+",
      label: "Events Managed"
    },
    {
      number: "98%",
      label: "Client Satisfaction"
    },
    {
      number: "50+",
      label: "Team Members"
    }
  ];

  const team = [
    {
      name: "Priya Sharma",
      role: "Founder & Chief Event Planner",
      description: "15+ years of experience in creating extraordinary celebrations"
    },
    {
      name: "Rahul Verma",
      role: "Operations Director",
      description: "Expert in logistics and seamless event execution"
    },
    {
      name: "Anjali Patel",
      role: "Creative Director",
      description: "Visionary designer crafting stunning event aesthetics"
    },
    {
      name: "Arjun Reddy",
      role: "Client Relations Manager",
      description: "Dedicated to ensuring exceptional client experiences"
    }
  ];

  const awards = [
    "Best Wedding Planner - Jaipur 2024",
    "Excellence in Event Management Award",
    "Top Rated Vendor - WedMeGood",
    "Customer Choice Award 2023",
    "Rajasthan's Premier Event Planner"
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
              About Majestic Marriages
            </h1>
            <p className="text-xl text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
              Crafting unforgettable celebrations since 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
                <p className="text-lg">
                  Majestic Marriages was born from a simple belief: every celebration deserves to be extraordinary. What started as a passion project in 2010 has blossomed into Jaipur's most trusted event management company.
                </p>
                <p className="text-lg">
                  Founded by Priya Sharma, a visionary with a deep love for bringing people together, Majestic Marriages has transformed over 1,500 events into cherished memories. From intimate gatherings at heritage havelis to grand destination weddings at iconic palaces like Rambagh and Fairmont, we've done it all with the same dedication and attention to detail.
                </p>
                <p className="text-lg">
                  Today, we're proud to be recognized as Jaipur's premier event planners, but what truly drives us is the joy on our clients' faces when they see their dreams come to life. Every event is personal to us because we understand it's not just an event—it's your story.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1712903276040-c99b32a057eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nJTIwdGVhbSUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzcwMjkwMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Majestic Marriages Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--cream)] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] rounded-full flex items-center justify-center mb-6">
                <Target className="text-[var(--gold)]" size={32} />
              </div>
              <h3 className="text-3xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                Our Mission
              </h3>
              <p className="text-lg text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
                To create exceptional, personalized events that exceed expectations and create lasting memories. We strive to transform your vision into reality through meticulous planning, creative design, and flawless execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] rounded-full flex items-center justify-center mb-6">
                <Heart className="text-[var(--gold)]" size={32} />
              </div>
              <h3 className="text-3xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                Our Vision
              </h3>
              <p className="text-lg text-gray-700" style={{ fontFamily: 'var(--font-sans)' }}>
                To be India's most trusted and innovative event management company, setting new standards in the industry. We envision a future where every celebration we touch becomes a benchmark of excellence and creativity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-[var(--gold)]" size={32} />
                  </div>
                  <h3 className="text-xl mb-2 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'var(--font-sans)' }}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--maroon)] via-[var(--royal-blue)] to-[var(--maroon)] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--gold)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Our Achievements
            </h2>
            <p className="text-xl text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
              Numbers that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl mb-2 text-[var(--gold)]" style={{ fontFamily: 'var(--font-serif)' }}>
                  {achievement.number}
                </div>
                <p className="text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
                  {achievement.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="flex items-center justify-center mb-6">
              <Award className="text-[var(--gold)]" size={48} />
            </div>
            <h3 className="text-3xl mb-6 text-center text-[var(--gold)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Awards & Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-white"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <CheckCircle className="text-[var(--gold)] flex-shrink-0" size={20} />
                  <span>{award}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--cream)] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
              The passionate minds behind your perfect events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="h-64 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] flex items-center justify-center">
                  <Users className="text-[var(--gold)]" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-1 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {member.name}
                  </h3>
                  <p className="text-[var(--gold)] mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
              Ready to Create Magic Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              Let's turn your event dreams into reality. Our team is excited to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button variant="primary" size="lg">
                  Start Planning
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