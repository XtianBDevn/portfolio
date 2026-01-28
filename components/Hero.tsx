export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Christian Bryant
        </h1>
        <p className="mt-4 text-xl text-muted">
          Full Stack Developer — Next.js, Node, PostgreSQL
        </p>
        <p className="mt-6 text-muted">
          Building secure, scalable web applications with clean UX and
          production-ready architecture.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="rounded-md bg-accent px-6 py-3 text-white transition hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="rounded-md border border-muted px-6 py-3 transition hover:bg-surface"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
