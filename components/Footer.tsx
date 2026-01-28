export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Christian Bryant. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="https://github.com/XtianBDevn" className="hover:text-accent transition">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-accent transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
