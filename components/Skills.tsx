'use client';
import { motion } from 'framer-motion';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPostgresql, 
  SiPrisma,
  SiTailwindcss
} from 'react-icons/si';
import { BsCloudArrowUp } from 'react-icons/bs';

const skills = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description: "Full-stack React framework"
  },
  {
    name: "React",
    icon: SiReact,
    description: "UI component library"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "Type-safe JavaScript"
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    description: "Server-side runtime"
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    description: "Relational database"
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    description: "Modern ORM toolkit"
  },
  {
    name: "REST APIs",
    icon: BsCloudArrowUp,
    description: "Backend integration"
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Utility-first CSS"
  },
];

export default function Skills() {
  return (
    <section className="bg-gradient-to-b from-white to-surface py-20 px-6">
      <h2 className="text-center text-3xl font-bold text-text mb-4">Technical Skills</h2>
      <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
        Hover over each skill to see more details
      </p>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="group relative card-bold bg-white rounded-lg p-6 text-center cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon with rotation on hover */}
              <motion.div
                className="flex justify-center mb-4 text-primary"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <IconComponent className="w-12 h-12" />
              </motion.div>
              
              {/* Skill name */}
              <h3 className="font-bold text-text mb-2">{skill.name}</h3>
              
              {/* Description - shown on hover */}
              <div className="absolute inset-0 bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <p className="text-white font-medium px-4 text-sm">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
