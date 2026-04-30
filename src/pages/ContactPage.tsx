import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-20 px-6 min-h-screen bg-brand-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-lime text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
              Contact us
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.9] text-white italic">
              LET'S <span className="text-brand-lime not-italic">START</span> <br />
              A PROJECT
            </h1>
            <p className="mt-8 text-xl text-white/50 max-w-md font-light">
              Have a visionary idea? We have the tools to make it a digital reality. Reach out and let's create something extraordinary.
            </p>

            <div className="mt-16 space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-dark border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-brand-lime transition-colors">
                  <Mail className="w-6 h-6 text-brand-lime" />
                </div>
                <div>
                  <span className="block text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Email address</span>
                  <a href="mailto:hello@kaarigari.com" className="text-xl font-display font-bold text-white hover:text-brand-lime transition-colors">hello@kaarigari.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-dark border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-brand-lime transition-colors">
                  <Phone className="w-6 h-6 text-brand-lime" />
                </div>
                <div>
                  <span className="block text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Phone number</span>
                  <a href="tel:+1234567890" className="text-xl font-display font-bold text-white hover:text-brand-lime transition-colors">+1 234 567 890</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-dark border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-brand-lime transition-colors">
                  <MapPin className="w-6 h-6 text-brand-lime" />
                </div>
                <div>
                  <span className="block text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Location</span>
                  <span className="text-xl font-display font-bold text-white uppercase italic">Mumbai, INDIA</span>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
               {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                 <button key={i} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-lime hover:text-brand-black transition-all">
                   <Icon className="w-5 h-5" />
                 </button>
               ))}
            </div>
          </div>

          <div className="bg-brand-lime p-8 md:p-16 rounded-[60px] text-brand-black">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tighter mb-10">Send a Message</h2>
            <form className="space-y-8">
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Full Name</label>
                <input type="text" className="w-full bg-white/20 border-b-2 border-brand-black/10 focus:border-brand-black outline-none py-2 font-display font-medium text-lg placeholder:text-brand-black/30" placeholder="Type your name..." />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Email Address</label>
                <input type="email" className="w-full bg-white/20 border-b-2 border-brand-black/10 focus:border-brand-black outline-none py-2 font-display font-medium text-lg placeholder:text-brand-black/30" placeholder="hello@company.com" />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Subject</label>
                <input type="text" className="w-full bg-white/20 border-b-2 border-brand-black/10 focus:border-brand-black outline-none py-2 font-display font-medium text-lg placeholder:text-brand-black/30" placeholder="I want to build..." />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Message</label>
                <textarea rows={4} className="w-full bg-white/20 border-b-2 border-brand-black/10 focus:border-brand-black outline-none py-2 font-display font-medium text-lg placeholder:text-brand-black/30 resize-none" placeholder="Tell us more about your project..." />
              </div>
              
              <button className="flex items-center justify-center gap-3 w-full bg-brand-black text-brand-lime py-6 rounded-3xl font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
