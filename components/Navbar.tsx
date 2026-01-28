'use client';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-3 border-primary/20 shadow-sm backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-xl font-bold hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        >
          Christian Bryant
        </motion.a>
        <div className="flex gap-6 items-center">
          <motion.a 
            href="#projects" 
            className="font-semibold hover:text-primary transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Projects
          </motion.a>
          <motion.a 
            href="#contact" 
            className="font-semibold hover:text-primary transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
