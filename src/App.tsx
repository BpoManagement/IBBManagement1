/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, Globe, Users, Briefcase, 
  TrendingUp, Award, Search, ShieldCheck, MapPin,
  ArrowUpRight, Mail, Phone, Linkedin, Instagram
} from 'lucide-react';

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Tool {
  title: string;
  description: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    title: "Executive Search",
    description: "Identification et recrutement de cadres dirigeants et d'experts par approche directe.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Administrateurs Indépendants",
    description: "Recrutement d’administrateurs pour renforcer la gouvernance de vos entreprises.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Talent & Leadership",
    description: "Accompagnement des leaders dans leur développement et leur transformation.",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "Rémunération des Dirigeants",
    description: "Conseil stratégique sur les packages de rémunération et les incentives.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Marque Employeur",
    description: "Optimisation de votre attractivité pour attirer les meilleurs talents.",
    icon: <Users className="w-6 h-6" />
  }
];

const TOOLS: Tool[] = [
  { title: "Assessment", description: "Évaluation approfondie des compétences et du potentiel." },
  { title: "Diagnostic Marque Employeur", description: "Analyse de votre positionnement sur le marché du travail." },
  { title: "Market Mapping", description: "Cartographie précise des talents dans votre secteur." },
  { title: "Enquête de Rémunération", description: "Benchmarks sectoriels et géographiques." }
];

const EXPERTISES = {
  secteurs: ["Industrie", "Services Financiers", "Technologie", "Santé", "Énergie", "Retail"],
  geographies: ["Maghreb", "Afrique de l'Ouest", "Afrique Centrale", "Afrique de l'Est", "Moyen-Orient"]
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-paper/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold tracking-tighter">IBB</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-60 mt-1">Executive Search</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Outils', 'Expertises', 'À Propos', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[11px] uppercase tracking-widest font-medium hover:text-accent transition-colors">
              {item}
            </a>
          ))}
          <button className="px-6 py-2 border border-ink/20 rounded-full text-[11px] uppercase tracking-widest hover:bg-ink hover:text-paper transition-all duration-300">
            Candidats
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-paper border-t border-ink/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {['Services', 'Outils', 'Expertises', 'À Propos', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest font-medium">
                {item}
              </a>
            ))}
            <button className="w-full py-3 bg-ink text-paper rounded-full text-sm uppercase tracking-widest">
              Espace Candidats
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-semibold mb-6 block">
            Afrique & Moyen-Orient
          </span>
          <h1 className="text-6xl md:text-8xl leading-[0.9] mb-8 font-light">
            Recrutement de <span className="italic">Leaders</span> d'Exception
          </h1>
          <p className="text-lg text-ink/70 max-w-md mb-10 leading-relaxed">
            Depuis 20 ans, nous identifions les talents locaux et internationaux pour porter vos projets de développement au Maghreb, en Afrique et au Moyen-Orient.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="group px-8 py-4 bg-ink text-paper rounded-full flex items-center gap-3 hover:bg-accent transition-all duration-300">
              <span className="text-sm uppercase tracking-widest">Nos Services</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-ink/20 rounded-full text-sm uppercase tracking-widest hover:bg-ink/5 transition-all">
              Nous Contacter
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] oval-mask overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/executive/800/1000" 
              alt="Executive Leadership" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-paper p-8 shadow-xl hidden lg:block max-w-[200px]">
            <p className="text-4xl font-serif mb-2">20+</p>
            <p className="text-[10px] uppercase tracking-widest leading-tight opacity-60">Années d'expertise en approche directe</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-accent/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-paper to-transparent -z-10" />
      
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <span className="vertical-text text-[10px] uppercase tracking-[0.5em] opacity-30">
          IBB EXECUTIVE SEARCH — EST. 2004
        </span>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-semibold mb-4 block">Expertise</span>
            <h2 className="text-5xl md:text-6xl font-light leading-tight">Solutions de <span className="italic">Capital Humain</span></h2>
          </div>
          <p className="text-paper/60 max-w-xs text-sm leading-relaxed">
            Une approche sur-mesure pour répondre aux défis stratégiques de votre gouvernance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-paper/10 border border-paper/10">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="p-10 flex flex-col gap-6 group cursor-pointer"
            >
              <div className="text-accent group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif">{service.title}</h3>
              <p className="text-sm text-paper/50 leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                En savoir plus <ArrowUpRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ToolsAndExpertise = () => {
  return (
    <section id="outils" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Tools */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-semibold mb-6 block">Méthodologie</span>
            <h2 className="text-4xl font-light mb-12">Nos Outils de <span className="italic">Diagnostic</span></h2>
            <div className="space-y-8">
              {TOOLS.map((tool, idx) => (
                <div key={idx} className="border-b border-ink/10 pb-8 group cursor-pointer">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-serif group-hover:text-accent transition-colors">{tool.title}</h3>
                    <span className="text-[10px] opacity-30">0{idx + 1}</span>
                  </div>
                  <p className="text-sm text-ink/60 leading-relaxed">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="bg-ink/5 p-12 rounded-3xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-semibold mb-6 block">Rayonnement</span>
            <h2 className="text-4xl font-light mb-12">Expertise <span className="italic">Sectorielle & Géo</span></h2>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 opacity-40">Secteurs Clés</h4>
                <div className="flex flex-wrap gap-3">
                  {EXPERTISES.secteurs.map((s) => (
                    <span key={s} className="px-4 py-2 bg-paper border border-ink/10 rounded-full text-xs uppercase tracking-wider">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 opacity-40">Géographies</h4>
                <div className="grid grid-cols-2 gap-4">
                  {EXPERTISES.geographies.map((g) => (
                    <div key={g} className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">{g}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="à-propos" className="py-24 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square relative">
              <img 
                src="https://picsum.photos/seed/research/800/800" 
                alt="IBB Institute" 
                className="w-full h-full object-cover rounded-2xl grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-paper/50 m-8 rounded-xl" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-semibold mb-6 block">Notre Institut</span>
            <h2 className="text-5xl font-light mb-8 leading-tight">IBB Institute : <span className="italic">Recherche & Insights</span></h2>
            <p className="text-lg text-ink/70 mb-8 leading-relaxed">
              Le centre de recherche de IBB est dédié à la réalisation d’études, d’analyses et de réflexions sur le management, le leadership et la gouvernance d’entreprise.
            </p>
            <div className="bg-accent/10 p-8 border-l-4 border-accent mb-8">
              <h4 className="text-xl font-serif mb-2 italic">"La Nouvelle Génération de Leaders"</h4>
              <p className="text-sm opacity-70">Notre étude phare décryptant les dynamiques du leadership au Maroc et en Afrique.</p>
            </div>
            <button className="text-sm uppercase tracking-[0.2em] font-bold flex items-center gap-3 hover:text-accent transition-colors">
              Découvrir nos publications <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-ink text-paper pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-3xl font-serif font-bold tracking-tighter">IBB</span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-sans opacity-60 mt-1">Executive Search</span>
            </div>
            <p className="text-paper/50 max-w-md mb-8 leading-relaxed">
              Votre partenaire stratégique pour le recrutement de dirigeants en Afrique et au Moyen-Orient. Excellence, intégrité et vision locale.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Instagram, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-paper/10 flex items-center justify-center hover:bg-paper hover:text-ink transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8 opacity-40">Navigation</h4>
            <ul className="space-y-4 text-sm text-paper/70">
              {['Services', 'Outils', 'Expertises', 'À Propos', 'Presse'].map(item => (
                <li key={item}><a href="#" className="hover:text-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8 opacity-40">Contact</h4>
            <ul className="space-y-6 text-sm text-paper/70">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-1" />
                <span>contact@ibbmanagement.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-1" />
                <span>+212 (0) 522 22 22 22</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span>Casablanca, Maroc<br/>Dubaï, Émirats Arabes Unis</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-paper/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest opacity-40">
          <p>© 2026 IBB EXECUTIVE SEARCH. TOUS DROITS RÉSERVÉS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-paper transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-paper transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ToolsAndExpertise />
      <About />
      <section className="py-24 bg-accent text-paper text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light mb-10 leading-tight">
            Prêt à donner un nouvel élan à votre <span className="italic">organisation</span> ?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-ink text-paper rounded-full text-sm uppercase tracking-widest hover:scale-105 transition-transform">
              Espace Entreprises
            </button>
            <button className="px-10 py-5 border-2 border-ink text-ink rounded-full text-sm uppercase tracking-widest hover:bg-ink hover:text-paper transition-all">
              Soumettre un CV
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
