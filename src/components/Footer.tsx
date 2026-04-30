import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_NAME, NAV_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-brand-accent pt-32 pb-12 px-6 rounded-t-[40px] md:rounded-t-[80px]" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-7xl md:text-9xl font-display font-black tracking-tighter uppercase text-brand-base leading-[0.8]">
              LET'S <br />
              <span className="italic flex items-center gap-4">
                TALK
                <Link to="/contact" className="w-12 h-12 md:w-20 md:h-20 bg-brand-base rounded-full flex items-center justify-center text-brand-accent group cursor-pointer hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-1/2 h-1/2" />
                </Link>
              </span>
            </h2>
            
            <div className="mt-16 flex gap-6">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <button key={i} className="w-12 h-12 border border-brand-base/20 rounded-full flex items-center justify-center hover:bg-brand-base hover:text-brand-accent transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-brand-base font-bold uppercase tracking-widest text-sm mb-8">Navigation</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-brand-base/60 hover:text-brand-base font-display font-semibold uppercase text-lg transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-brand-base font-bold uppercase tracking-widest text-sm mb-8">Contact</h4>
              <ul className="space-y-6">
                <li>
                  <span className="block text-brand-base/40 text-xs font-bold uppercase mb-1">Email us</span>
                  <a href="mailto:hello@kaarigari.com" className="text-brand-base font-display font-bold text-xl hover:underline italic">
                    hello@kaarigari.com
                  </a>
                </li>
                <li>
                  <span className="block text-brand-base/40 text-xs font-bold uppercase mb-1">Call us</span>
                  <a href="tel:+1234567890" className="text-brand-base font-display font-bold text-xl hover:underline italic">
                    +1 234 567 890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-base/10 flex flex-col md:flex-row justify-between items-center gap-8">
           <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-base rounded-full flex items-center justify-center">
              <span className="text-brand-accent font-bold text-lg italic">K</span>
            </div>
            <span className="text-brand-base font-display font-bold tracking-tighter text-2xl uppercase italic">
              {APP_NAME}
            </span>
          </Link>
          
          <div className="text-brand-base/40 text-xs font-bold uppercase tracking-[0.2em]">
            © 2024 Kaarigari Production / ALL RIGHTS RESERVED
          </div>
          
          <div className="flex gap-8">
            <Link to="/pages" className="text-brand-base/40 hover:text-brand-base text-xs font-bold uppercase tracking-widest">Privacy Policy</Link>
            <Link to="/pages" className="text-brand-base/40 hover:text-brand-base text-xs font-bold uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

