import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-32 px-6 bg-brand-base" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div>
            <span className="text-brand-accent text-sm font-bold uppercase tracking-[0.3em] mb-4 block underline underline-offset-8">
              Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase leading-[0.9]">
              WE PROVIDE DIGITAL <br />
              SERVICES <span className="text-brand-accent italic">FOR YOU</span>
            </h2>
          </div>
          
          <div className="bg-brand-surface border border-brand-light/10 rounded-3xl p-8 max-w-sm">
             <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-4">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-surface overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" referrerPolicy="no-referrer" />
                     </div>
                   ))}
                </div>
                <div className="flex flex-col">
                   <span className="text-sm font-bold">500+ Clients</span>
                   <span className="text-xs text-brand-light/50">Trust our expertise</span>
                </div>
             </div>
             <p className="text-sm text-brand-light/60">
               Delivering excellence through a combination of traditional craftsmanship and modern technology.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-brand-surface p-10 rounded-[40px] border border-brand-light/5 hover:border-brand-accent/20 transition-all hover:bg-[#1a1a1a]"
            >
              <div className="w-16 h-16 bg-brand-base rounded-2xl flex items-center justify-center mb-8 border border-brand-light/10 group-hover:bg-brand-accent group-hover:text-brand-base transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-4 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-light/60 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-bold tracking-widest text-brand-light/40 group-hover:text-brand-light/100 transition-colors">LEARN MORE</span>
                <ArrowUpRight className="w-6 h-6 text-brand-light/20 group-hover:text-brand-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
