const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "REST APIs",
  "Tailwind CSS",
];

export default function Skills() {
  return (
    <section className="bg-white py-20">
      <h2 className="text-center text-3xl font-semibold">Technical Skills</h2>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-lg border bg-surface p-4 text-center transition hover:-translate-y-1 hover:shadow-md"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
