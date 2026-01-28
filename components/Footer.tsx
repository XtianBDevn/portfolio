'use client';
import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-white border-t-3 border-black py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-muted mb-6">
          &copy; {new Date().getFullYear()} Christian Bryant. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <motion.a 
            href="https://github.com/XtianBDevn" 
            className="flex items-center gap-2 font-semibold text-text hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="w-6 h-6" />
            GitHub
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            className="flex items-center gap-2 font-semibold text-text hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="w-6 h-6" />
            LinkedIn
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
