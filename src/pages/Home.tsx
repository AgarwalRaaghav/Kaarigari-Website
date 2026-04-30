import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Process from '../components/Process';
import Team from '../components/Team';
import News from '../components/News';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <CaseStudies />
      <Process />
      <Team />
      <News />
    </motion.div>
  );
}
