'use client';
import { motion } from 'framer-motion';
import { BsArrowRight, BsDownload } from 'react-icons/bs';

export default function Hero() {
  return (
  
    <section className="flex min-h-[80vh] items-center justify-center px-6 bg-white">
      <div className="max-w-3xl text-center">
        <motion.div
          className="mx-auto mb-6 h-32 w-32 rounded-full overflow-hidden border-4 border-primary/40 shadow-lg bg-surface flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <img
            src="/christian-avatar.jpg"
            alt="Christian Bryant"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.h1 
          className="text-5xl font-bold tracking-tight text-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Christian Bryant
        </motion.h1>
        <motion.p 
          className="mt-4 text-xl text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Full Stack Developer — Next.js, Node, PostgreSQL
        </motion.p>
        <motion.p 
          className="mt-6 text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Building secure, scalable web applications with clean UX and
          production-ready architecture.
        </motion.p>

        <motion.div 
          className="mt-8 flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#projects"
            className="btn-bold bg-primary text-white rounded-md flex items-center gap-2 hover:bg-primary-dark"
          >
            View Projects
            <BsArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/christian-bryant-resume.pdf"
            className="btn-bold bg-white text-primary rounded-md flex items-center gap-2 hover:bg-surface"
          >
            <BsDownload className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
