import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { APP_NAME, NAV_LINKS } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6" id="navbar">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-brand-base/20 backdrop-blur-md rounded-full border border-brand-light/10 px-6 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
            <span className="text-brand-base font-bold text-xl italic leading-none">K</span>
          </div>
          <span className="text-brand-light font-display font-bold tracking-tighter text-xl uppercase italic">
            {APP_NAME}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`transition-colors text-sm font-bold uppercase tracking-widest ${
                location.pathname === link.href ? 'text-brand-accent' : 'text-brand-light/70 hover:text-brand-accent'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link to="/contact" className="hidden md:flex items-center gap-2 bg-brand-light text-brand-base px-6 py-2 rounded-full font-bold text-sm hover:bg-brand-accent transition-colors group">
          LET'S TALK
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>

        <button className="md:hidden text-brand-light" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 bg-brand-surface border border-brand-light/10 rounded-2xl p-6 flex flex-col gap-4 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xl font-display font-medium uppercase ${
                  location.pathname === link.href ? 'text-brand-accent' : 'text-brand-light hover:text-brand-accent'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="mt-4 bg-brand-accent text-brand-base py-4 rounded-xl font-bold uppercase tracking-tight text-center"
              onClick={() => setIsOpen(false)}
            >
              Let's Connect
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

