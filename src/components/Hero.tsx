import { motion, AnimatePresence } from 'motion/react';
import { ArrowDownRight, Globe, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CASE_STUDIES } from '../constants';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = CASE_STUDIES.map(study => study.image);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center text-brand-black rounded-b-[40px] md:rounded-b-[80px]" id="hero">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-lime z-10 opacity-70" />
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex justify-center items-center gap-2"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">Creative</span>
          <div className="w-12 h-px bg-brand-black/20" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">Production</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-display font-black leading-[0.85] tracking-tighter uppercase mb-8"
        >
          KAARIGARI <br />
          <span className="flex items-center justify-center gap-4">
            DIGITAL
            <span className="inline-flex w-[1.2em] h-[1em] bg-brand-black rounded-full items-center justify-center -rotate-12 translate-y-2">
              <Sparkles className="text-brand-lime w-1/2 h-1/2" />
            </span>
          </span>
          PRODUCTION
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-12 mt-16 text-left"
        >
          <div className="md:max-w-md">
            <p className="text-xl md:text-2xl font-display font-medium leading-tight">
              We weave digital narratives through exceptional craftsmanship and technical prowess.
            </p>
          </div>

          <div className="flex flex-col items-end gap-6 group">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-brand-black/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-brand-black/10 rounded-full border-dashed"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-brand-black text-brand-lime rounded-full m-2 hover:scale-110 transition-transform group">
                <ArrowDownRight className="w-10 h-10 group-hover:rotate-45 transition-transform" />
              </button>
            </div>
            <span className="text-sm font-bold uppercase tracking-widest opacity-80">Explore Work</span>
          </div>
        </motion.div>
      </div>

      {/* Hero Marquee or secondary decorative element */}
      <div className="mt-20 w-full overflow-hidden whitespace-nowrap bg-brand-black py-4 -rotate-1 skew-y-1 relative z-10">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center text-brand-lime font-display font-bold text-4xl uppercase tracking-tighter"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span>Innovation</span>
              <Globe className="w-8 h-8" />
              <span>Craftsmanship</span>
              <div className="w-4 h-4 bg-brand-lime rounded-full" />
              <span>Production</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
