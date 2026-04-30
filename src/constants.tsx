import { Monitor, Cpu, Palette, Code2, Rocket, MessageSquare, Zap, Globe } from 'lucide-react';

export const APP_NAME = "KAARIGARI";

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Pages', href: '/pages' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: 's1',
    title: 'Project AI Product Consulting',
    description: 'Expert guidance on integrating AI into your product ecosystem.',
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    id: 's2',
    title: 'Web Application Development',
    description: 'Scalable, high-performance web apps built with modern tech stacks.',
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    id: 's3',
    title: 'Creative Content Production',
    description: 'Engaging visual and textual content that tells your brand story.',
    icon: <Palette className="w-8 h-8" />,
  },
];

export const CASE_STUDIES = [
  {
    id: '1',
    title: 'Precision Web Design',
    client: 'Harmony',
    description: 'A seamless digital experience for a luxury lifestyle brand.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop',
    number: '01',
  },
  {
    id: '2',
    title: 'Next-Gen Mobile App',
    client: 'Stellar',
    description: 'Pushing the boundaries of mobile interaction and visual design.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop',
    number: '02',
  },
  {
    id: '3',
    title: 'Enterprise Dashboard',
    client: 'Nova',
    description: 'Complex data visualization made intuitive and beautiful.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    number: '03',
  },
];

export const PROCESS_STEPS = [
  {
    id: '01',
    title: 'Tailored Solutions',
    description: 'We analyze your specific needs to create customized strategies.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: '02',
    title: 'Expert Team',
    description: 'Our specialists bring years of experience across disciplines.',
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    id: '03',
    title: 'Driven Insights',
    description: 'Data-informed decisions at every step of the creative journey.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: '04',
    title: 'Ongoing Support',
    description: 'We stay with you long after the initial launch.',
    icon: <MessageSquare className="w-6 h-6" />,
  },
];

export const TEAM = [
  {
    name: 'Anika Sharma',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Rohan Verma',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Meera Kapoor',
    role: 'UX Architect',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
  },
];

export const ARTICLES = [
  {
    date: 'March 15, 2024',
    title: 'The Ultimate Guide to Digital Marketing',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?q=80&w=600&auto=format&fit=crop',
  },
  {
    date: 'March 22, 2024',
    title: 'Future Trends in Web Development',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
  },
  {
    date: 'April 02, 2024',
    title: 'Visual Storytelling in 2024',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b25272a7?q=80&w=600&auto=format&fit=crop',
  },
];
