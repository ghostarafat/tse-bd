import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    bgImage: "https://i.postimg.cc/2SvKwDpJ/hero-1.png",
    title: "We are professional",
    subtitle:
      "We are passionate about delivering innovative and tailored solutions to help businesses thrive in the digital world. Our expertise spans across multiple domains, ensuring that we meet the diverse needs of our clients with the highest level of quality and creativity.",
  },
  {
    id: 2,
    bgImage: "https://i.postimg.cc/2SvKwDpJ/hero-2.png",
    title: "We specialize in custom software development",
    subtitle:
      "providing scalable and efficient solutions to streamline business operations. Beyond software, we offer a wide range of services including graphic design, video editing, marketplace management, SEO optimization, and logo and brand design. Our comprehensive skillset ensures that we can handle every aspect of your digital presence.",
  },
  {
    id: 3,
    bgImage: "https://i.postimg.cc/8z8ys0Fr/hero-3.png",
    title: "Expand your brand’s reach and engage",
    subtitle:
      "Vibez is a dazzling modern theme designed specifically for dance studios and enthusiasts",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);

  const title = slides[currentSlide].title.split("");

  const redColor = "#ec1f27";

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-30">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-6 flex justify-between items-center">
          <div className="text-3xl font-black tracking-wider">
            <span className="text-white">T</span>
            <span style={{ color: redColor }}>S</span>
            <span className="text-white">E</span>
          </div>

          <ul className="hidden md:flex gap-8 uppercase text-sm font-medium">
            <li
              style={{ color: redColor }}
              className="hover:opacity-80 cursor-pointer"
            >
              Home
            </li>
            <li
              style={{ color: redColor }}
              className="hover:opacity-80 cursor-pointer"
            >
              About
            </li>
            <li
              style={{ color: redColor }}
              className="hover:opacity-80 cursor-pointer"
            >
              Services
            </li>
            <li
              style={{ color: redColor }}
              className="hover:opacity-80 cursor-pointer"
            >
              Contact
            </li>
          </ul>

          <button className="md:hidden text-2xl">☰</button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-4xl">
          {/* Letter Animation Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight flex flex-wrap justify-center">
            {title.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl opacity-90 max-w-2xl mx-auto"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{ backgroundColor: redColor }}
            className="mt-10 px-10 py-5 text-black font-bold uppercase tracking-wider transition-all hover:opacity-80 hover:scale-105"
          >
            Read More
          </motion.button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: index === currentSlide ? "2.5rem" : "0.75rem",
              backgroundColor:
                index === currentSlide ? redColor : "rgba(255,255,255,0.4)",
            }}
            className="h-3 rounded-full transition-all"
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() =>
          goToSlide((currentSlide - 1 + slides.length) % slides.length)
        }
        className="absolute left-6 top-1/2 -translate-y-1/2 text-4xl z-30"
      >
        ←
      </button>

      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-4xl z-30"
      >
        →
      </button>
    </section>
  );
}
