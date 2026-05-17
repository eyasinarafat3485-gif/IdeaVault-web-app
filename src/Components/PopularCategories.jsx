'use client';

import React from 'react';
import { motion } from 'framer-motion'; 
import { 
  FaMicrochip, 
  FaBrain, 
  FaGraduationCap, 
  FaCoins, 
  FaShieldVirus
} from 'react-icons/fa';

const categories = [
  { 
    id: 'healthtech', 
    name: 'Bio-Digital Health', 
    icon: <FaShieldVirus />, 
    desc: 'Telemedicine & AI Diagnostics' 
  },
  { 
    id: 'deeptech', 
    name: 'Frontier Systems', 
    icon: <FaMicrochip />, 
    desc: 'Quantum Computing & Robotics' 
  },
  { 
    id: 'ai', 
    name: 'Neural Networks', 
    icon: <FaBrain />, 
    desc: 'Generative AI & LLM Solutions' 
  },
  { 
    id: 'edtech', 
    name: 'Adaptive Learning', 
    icon: <FaGraduationCap />, 
    desc: 'Metaverse & Skills Training' 
  },
  { 
    id: 'fintech', 
    name: 'Decentralized Finance', 
    icon: <FaCoins />, 
    desc: 'Web3 & Digital Assets' 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function PopularCategories() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading Section */}
        <motion.div  initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
            Popular Categories
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
            Explore startup concepts across various industries.
          </p>
        </motion.div>

        <motion.div  variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants} whileHover={{  scale: 1.05, transition: { duration: 0.2 } 
              }}

              whileTap={{ scale: 0.95 }}
              className="relative flex flex-col items-center justify-center gap-4 p-8 rounded-3xl transition-all duration-300 group cursor-pointer bg-slate-50 dark:bg-slate-900/40 border border-transparent hover:border-indigo-500/50 hover:bg-white dark:hover:bg-slate-900 hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] dark:hover:shadow-none">

              <motion.div  className="text-3xl text-indigo-400 transition-colors duration-300 group-hover:text-indigo-600" whileHover={{ rotate: [0, -10, 10, 0] }}  transition={{ duration: 0.5 }}
              >
                {category.icon}
              </motion.div>

              <div className="text-center">
                <span className="block font-bold text-sm md:text-base text-slate-700 dark:text-slate-300 transition-colors duration-300 group-hover:text-indigo-900 dark:group-hover:text-indigo-300">
                  {category.name}
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   {category.id}
                </span>
              </div>

              <div className="absolute bottom-3 w-8 h-1 bg-indigo-500/20 rounded-full group-hover:w-12 group-hover:bg-indigo-500 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}