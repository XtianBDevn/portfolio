'use client';
import { motion } from 'framer-motion';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs';

export default function Projects() {
  const projects = [
    {
      title: "ClearFall – Tree Service Software",
      description: "Mobile-first web app and marketing site for ClearFall, a vertical SaaS CRM built for tree removal, stump grinding, and land clearing crews.",
      url: "https://treeremovalsoftware.online/",
      repo: "https://github.com/XtianBDevn/clearfall",
    },
    {
      title: "Emergency Snow Removal RVA",
      description: "Marketing site for a Richmond-based emergency snow and ice removal service, designed for fast booking, clear service tiers, and on-call CTAs.",
      url: "https://rvasnowremoval.com",
      repo: "https://github.com/XtianBDevn/rvasnowremoval.com",
    },
    {
      title: "Alexander Law Office P.C.",
      description: "Conversion-focused site for a Richmond criminal defense and personal injury firm, emphasizing trust, clarity, and frictionless contact.",
      url: "https://standishalexander.com",
      repo: "https://github.com/XtianBDevn/standishalexander.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <motion.div 
            key={index}
            className="card-bold bg-white rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-3">{proj.title}</h3>
            <p className="text-gray-600 mb-6">
              {proj.description}
            </p>
            <div className="flex gap-4">
              <a 
                href={proj.url} 
                className="flex items-center gap-2 font-semibold text-primary hover:text-primary-dark hover:underline transition-colors"
              >
                <BsBoxArrowUpRight className="w-5 h-5" />
                Live
              </a>
              <a 
                href={proj.repo} 
                className="flex items-center gap-2 font-semibold text-text hover:text-primary hover:underline transition-colors"
              >
                <BsGithub className="w-5 h-5" />
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
