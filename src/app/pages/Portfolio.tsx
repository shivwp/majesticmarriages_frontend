import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, Grid, List, X, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/Button";
import { Link } from "react-router";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = ["All", "Weddings", "Receptions", "Corporate", "Birthdays", "Others"];

  const portfolioItems = [
    {
      id: 1,
      title: "Royal Wedding at Rambagh Palace",
      category: "Weddings",
      images: [
        "https://images.unsplash.com/photo-1519167758481-83f29da8685c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhY2UlMjB3ZWRkaW5nJTIwdmVudUxlbnwxfHx8fDE3MDg1NDExNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjB3ZWRkaW5nJTIwZGVjb3IlMjBtYW5kYXB8ZW58MXx8fHwxNzA4NTQxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY291cGxlfGVufDF8fHx8MTcwODU0MTE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzA4NTQxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      guests: 600,
      location: "Rambagh Palace, Jaipur",
      description: "A spectacular royal wedding at the iconic Rambagh Palace with traditional Rajasthani ceremonies"
    },
    {
      id: 2,
      title: "Grand Reception at Fairmont Jaipur",
      category: "Receptions",
      images: [
        "https://images.unsplash.com/photo-1712314947761-a8d718bd8c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdmVudUxlbnwxfHx8fDE3MDg1NDExNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdGFibGVzfGVufDF8fHx8MTcwODU0MTE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWRkaW5nJTIwZGVjb3IlMjBmbG93ZXJzfGVufDF8fHx8MTcwODU0MTE1MHww&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      guests: 500,
      location: "Fairmont Jaipur",
      description: "Luxurious reception with gold accents and floral masterpieces at Fairmont's grand ballroom"
    },
    {
      id: 3,
      title: "Heritage Wedding at City Palace",
      category: "Weddings",
      images: [
        "https://images.unsplash.com/photo-1663181889781-19f3b9d185eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzcwMjkwMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1587271636175-90d58cdad458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjB3ZWRkaW5nJTIwdmVudUxlbnwxfHx8fDE3MDg1NDExNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1522673607236-f27e4b9462c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB3ZWRkaW5nJTIwZ3Vlc3RzfGVufDF8fHx8MTcwODU0MTE1MHww&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      guests: 450,
      location: "City Palace Complex, Jaipur",
      description: "Elegant wedding celebration at a stunning heritage haveli near City Palace"
    },
    {
      id: 4,
      title: "Mehendi at Samode Haveli",
      category: "Weddings",
      images: [
        "https://images.unsplash.com/photo-1554787388-9194e4eb57a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhlbmRpJTIwaGVubmElMjBicmlkZSUyMGhhbmRzfGVufDF8fHx8MTc3MDI5MDE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1609329699997-8e374e7e3ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtZWhlbmRpJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzA4NTQxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZWhlbmRpJTIwZGVjb3J8ZW58MXx8fHwxNzA4NTQxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      guests: 200,
      location: "Samode Haveli, Jaipur",
      description: "Traditional mehendi ceremony at the beautiful Samode Haveli courtyard"
    },
    {
      id: 5,
      title: "Corporate Event at JW Marriott",
      category: "Corporate",
      images: [
        "https://images.unsplash.com/photo-1768508947825-0a63f7c46a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnYWxhJTIwZGlubmVyJTIwZXZlbnR8ZW58MXx8fHwxNzcwMjI1MjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3Jwb3JhdGUlMjBldmVudCUyMHN0YWdlfGVufDF8fHx8MTcwODU0MTE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb3Jwb3JhdGUlMjBjb25mZXJlbmNlfGVufDF8fHx8MTcwODU0MTE1MHww&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      guests: 400,
      location: "JW Marriott Jaipur Resort & Spa",
      description: "Professional corporate gala with keynote speakers and networking"
    },
    {
      id: 6,
      title: "Sangeet at Jai Mahal Palace",
      category: "Weddings",
      images: [
        "https://images.unsplash.com/photo-1645264090488-a019de493023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5nZWV0JTIwZGFuY2UlMjBjZWxlYnJhdGlvbiUyMGluZGlhbnxlbnwxfHx8fDE3NzAyOTAxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzYW5nZWV0JTIwbmlnaHR8ZW58MXx8fHwxNzA4NTQxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB3ZWRkaW5nJTIwZGFuY2V8ZW58MXx8fHwxNzA4NTQxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      guests: 350,
      location: "Jai Mahal Palace, Jaipur",
      description: "Vibrant sangeet night with live performances at the historic Jai Mahal Palace"
    },
    {
      id: 7,
      title: "Destination Wedding at Alsisar Mahal",
      category: "Weddings",
      images: [
        "https://images.unsplash.com/photo-1743684821666-05b9c5046937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjBjb3VwbGV8ZW58MXx8fHwxNzcwMjg5OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkZXN0aW5hdGlvbiUyMHdlZGRpbmd8ZW58MXx8fHwxNzA4NTQxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWRkaW5nJTIwcGFsYWNlfGVufDF8fHx8MTcwODU0MTE1MHww&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      guests: 300,
      location: "Alsisar Mahal, Shekhawati",
      description: "Intimate destination wedding at the magnificent Alsisar Mahal"
    },
    {
      id: 8,
      title: "Garden Reception at The Oberoi Rajvilas",
      category: "Receptions",
      images: [
        "https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudUxlbnwxfHx8fDE3MDg1NDExNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1478145787956-f6f12c59624d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxnYXJkZW4lMjB3ZWRkaW5nfGVufDF8fHx8MTcwODU0MTE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1530023367847-a683933f4172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxvdXRkb29yJTIwd2VkZGluZyUyMHJlY2VwdGlvbnxlbnwxfHx8fDE3MDg1NDExNTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      guests: 250,
      location: "The Oberoi Rajvilas, Jaipur",
      description: "Beautiful outdoor garden reception under the stars at The Oberoi"
    },
    {
      id: 9,
      title: "Birthday Celebration at ITC Rajputana",
      category: "Birthdays",
      images: [
        "https://images.unsplash.com/photo-1721804812395-12c7c963ca52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb24lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAxOTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxiaXJ0aGRheSUyMHBhcnR5JTIwZGVjb3J8ZW58MXx8fHwxNzA4NTQxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwYXJ0eSUyMHRhYmxlJTIwc2V0dXB8ZW58MXx8fHwxNzA4NTQxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      guests: 120,
      location: "ITC Rajputana, Jaipur",
      description: "Themed birthday party with entertainment at ITC Rajputana's banquet hall"
    },
    {
      id: 10,
      title: "Corporate Conference at Leela Palace",
      category: "Corporate",
      images: [
        "https://images.unsplash.com/photo-1769667693219-4d8e44b6a3b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNvbmZlcmVuY2UlMjBoYWxsfGVufDF8fHx8MTc3MDIyMzY2OXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25mZXJlbmNlJTIwcm9vbXxlbnwxfHx8fDE3MDg1NDExNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMGV2ZW50fGVufDF8fHx8MTcwODU0MTE1MHww&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      guests: 350,
      location: "The Leela Palace, Jaipur",
      description: "Multi-day corporate conference with networking at The Leela Palace"
    },
    {
      id: 11,
      title: "Wedding at Chomu Palace",
      category: "Weddings",
      images: [
        "https://images.unsplash.com/photo-1700157679224-56c9f3d15118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBicmlkZSUyMGdyb29tfGVufDF8fHx8MTc3MDI4OTk3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1525772639304-62b469e0e16a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3ZWRkaW5nJTIwdmVyYW5kYXxlbnwxfHx8fDE3MDg1NDExNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWRkaW5nJTIwcGFsYWNlJTIwaW5kaWF8ZW58MXx8fHwxNzA4NTQxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      guests: 400,
      location: "Chomu Palace, Jaipur",
      description: "Majestic wedding celebration at the 300-year-old Chomu Palace"
    },
    {
      id: 12,
      title: "Elegant Reception at Taj Jai Mahal",
      category: "Receptions",
      images: [
        "https://images.unsplash.com/photo-1768777270882-9f74939fee50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMHRhYmxlfGVufDF8fHx8MTc3MDI5MDE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwZGlubmVyJTIwdGFibGV8ZW58MXx8fHwxNzA4NTQxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1519167758481-83f29da8685c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxiYWxscm9vbSUyMHJlY2VwdGlvbnxlbnwxfHx8fDE3MDg1NDExNTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      guests: 280,
      location: "Taj Jai Mahal Palace, Jaipur",
      description: "Sophisticated reception with crystal chandeliers at Taj Jai Mahal Palace"
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleOpenModal = (id: number) => {
    setSelectedItem(id);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handlePrevious = () => {
    if (selectedItem !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedItem);
      const previousIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedItem(filteredItems[previousIndex].id);
      setCurrentImageIndex(0);
    }
  };

  const handleNext = () => {
    if (selectedItem !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedItem);
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedItem(filteredItems[nextIndex].id);
      setCurrentImageIndex(0);
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentItem && currentImageIndex < currentItem.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const currentItem = selectedItem !== null ? filteredItems.find(item => item.id === selectedItem) : null;

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
              Our Portfolio
            </h1>
            <p className="text-xl text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
              Celebrating moments, creating memories - glimpses of events we've brought to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & View Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-[var(--maroon)] to-[var(--royal-blue)] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-[var(--maroon)] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                aria-label="Grid view"
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("masonry")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "masonry"
                    ? "bg-[var(--maroon)] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                aria-label="Masonry view"
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--cream)] to-white">
        <div className="max-w-7xl mx-auto">
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1 md:grid-cols-2"
          }`}>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleOpenModal(item.id)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className={`relative overflow-hidden ${
                  viewMode === "masonry" ? "h-64 md:h-80" : "h-72"
                }`}>
                  <img 
                    src={item.images[0]} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-3 py-1 bg-[var(--gold)] text-[var(--charcoal)] rounded-full text-sm mb-3 w-fit" style={{ fontFamily: 'var(--font-sans)' }}>
                      {item.category}
                    </span>
                    <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-3" style={{ fontFamily: 'var(--font-sans)' }}>
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 text-white/80 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                      <span>{item.guests} Guests</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Info (always visible) */}
                <div className="p-4">
                  <h3 className="text-xl text-[var(--maroon)] mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                    <span>{item.guests} Guests</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600" style={{ fontFamily: 'var(--font-sans)' }}>
                No events found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--maroon)] via-[var(--royal-blue)] to-[var(--maroon)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-2 text-[var(--gold)]" style={{ fontFamily: 'var(--font-serif)' }}>
                1500+
              </div>
              <p className="text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
                Events Organized
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-5xl mb-2 text-[var(--gold)]" style={{ fontFamily: 'var(--font-serif)' }}>
                15+
              </div>
              <p className="text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
                Years Experience
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-5xl mb-2 text-[var(--gold)]" style={{ fontFamily: 'var(--font-serif)' }}>
                98%
              </div>
              <p className="text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
                Client Satisfaction
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-5xl mb-2 text-[var(--gold)]" style={{ fontFamily: 'var(--font-serif)' }}>
                50+
              </div>
              <p className="text-white/90" style={{ fontFamily: 'var(--font-sans)' }}>
                Team Members
              </p>
            </motion.div>
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
              Want Your Event Here?
            </h2>
            <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              Let's create something extraordinary together. Your story deserves to be told beautifully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button variant="primary" size="lg">
                  Plan Your Event
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Modal/Popup */}
      <AnimatePresence>
        {selectedItem !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                aria-label="Close modal"
              >
                <X size={24} className="text-[var(--maroon)]" />
              </button>

              {/* Navigation Arrows */}
              {currentItem && currentImageIndex > 0 && (
                <button
                  onClick={handlePreviousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} className="text-[var(--maroon)]" />
                </button>
              )}
              
              {currentItem && currentImageIndex < currentItem.images.length - 1 && (
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} className="text-[var(--maroon)]" />
                </button>
              )}

              <div className="overflow-y-auto max-h-[90vh]">
                {/* Image Section */}
                <div className="relative h-[50vh] md:h-[60vh] bg-gray-900">
                  <img
                    src={currentItem.images[currentImageIndex]}
                    alt={`${currentItem.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-[var(--gold)] text-[var(--charcoal)] rounded-full text-sm font-medium" style={{ fontFamily: 'var(--font-sans)' }}>
                      {currentItem.category}
                    </span>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute bottom-6 right-6">
                    <span className="px-4 py-2 bg-black/70 text-white rounded-full text-sm font-medium backdrop-blur-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                      {currentImageIndex + 1} / {currentItem.images.length}
                    </span>
                  </div>
                </div>

                {/* Thumbnail Strip */}
                {currentItem.images.length > 1 && (
                  <div className="bg-gray-100 px-4 py-3 overflow-x-auto">
                    <div className="flex gap-2 min-w-max">
                      {currentItem.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all ${
                            currentImageIndex === index 
                              ? 'ring-4 ring-[var(--gold)] scale-105' 
                              : 'opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl mb-4 text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {currentItem.title}
                  </h2>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                    {currentItem.description}
                  </p>

                  {/* Event Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-[var(--gold)]" size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'var(--font-sans)' }}>
                          Location
                        </h4>
                        <p className="text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                          {currentItem.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--maroon)] to-[var(--royal-blue)] rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="text-[var(--gold)]" size={24} />
                      </div>
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'var(--font-sans)' }}>
                          Guest Count
                        </h4>
                        <p className="text-[var(--maroon)]" style={{ fontFamily: 'var(--font-serif)' }}>
                          {currentItem.guests} Guests
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                    <Link to="/booking" className="flex-1">
                      <Button variant="primary" size="lg" className="w-full">
                        Plan Your Event
                      </Button>
                    </Link>
                    <Link to="/contact" className="flex-1">
                      <Button variant="outline" size="lg" className="w-full">
                        Get in Touch
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}