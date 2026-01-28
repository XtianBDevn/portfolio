'use client';
import { motion } from 'framer-motion';
import { BsSend } from 'react-icons/bs';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-6">
      <motion.h2 
        className="text-3xl font-bold text-center mb-4 text-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>
      <motion.p 
        className="text-center text-muted mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Have a project in mind? Let's work together!
      </motion.p>
      <motion.form 
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border-3 border-black p-4 rounded-lg mb-4 focus:outline-none focus:border-primary transition-colors"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border-3 border-black p-4 rounded-lg mb-4 focus:outline-none focus:border-primary transition-colors"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full border-3 border-black p-4 rounded-lg mb-6 focus:outline-none focus:border-primary transition-colors resize-none"
        />
        <button 
          type="submit"
          className="btn-bold bg-primary text-white rounded-lg w-full flex items-center justify-center gap-2 hover:bg-primary-dark"
        >
          <BsSend className="w-5 h-5" />
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
