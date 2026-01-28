'use client';
import { motion } from 'framer-motion';
import { BsArrowRight, BsDownload } from 'react-icons/bs';

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <motion.h1 
          className="text-5xl font-bold tracking-tight"
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
            className="btn-bold bg-accent text-white rounded-md flex items-center gap-2"
          >
            View Projects
            <BsArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/resume.pdf"
            className="btn-bold bg-white rounded-md flex items-center gap-2"
          >
            <BsDownload className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
