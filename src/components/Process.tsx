import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../constants';

export default function Process() {
  return (
    <section className="py-32 px-6 bg-brand-black" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-brand-lime text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
            Our Strategy
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase leading-tight">
            Our Standard Design <br />
            <span className="text-brand-lime italic">Thinking Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
           {/* Connecting Line */}
           <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-white/10 z-0" />
           
           {PROCESS_STEPS.map((step, index) => (
             <motion.div
               key={step.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="relative z-10 flex flex-col items-center text-center group"
             >
                <div className="mb-6 flex flex-col items-center">
                   <div className="text-xs font-bold text-white/40 mb-2">STEP {step.id}</div>
                   <div className="w-4 h-4 bg-brand-lime rounded-full ring-8 ring-brand-lime/10 group-hover:ring-brand-lime/30 transition-all" />
                </div>
                
                <div className="bg-brand-dark p-8 rounded-[32px] border border-white/5 w-full hover:border-brand-lime/30 transition-all hover:-translate-y-2">
                   <div className="w-12 h-12 bg-brand-black rounded-xl flex items-center justify-center mb-6 mx-auto text-brand-lime">
                     {step.icon}
                   </div>
                   <h3 className="text-xl font-display font-bold uppercase tracking-tight mb-4">
                     {step.title}
                   </h3>
                   <p className="text-sm text-white/50 leading-relaxed">
                     {step.description}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
