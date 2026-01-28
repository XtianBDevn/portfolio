export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "React dashboard with API integration",
      url: "#",
      repo: "#",
    },
    // …more
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div className="group bg-white shadow-lg rounded p-6 transition hover:shadow-2xl">
            <h3 className="text-2xl font-semi-bold mb-2">{proj.title}</h3>
            <p className="text-gray-600 group-hover:opacity-100 opacity-80 transition">
              {proj.description}
            </p>
            <div className="mt-4 space-x-4">
              <a href={proj.url} className="text-blue-600 hover:underline">
                Live
              </a>
              <a href={proj.repo} className="text-gray-800 hover:underline">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
