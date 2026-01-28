export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
      <form className="max-w-lg mx-auto px-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
        />
        <textarea
          placeholder="Message"
          className="w-full border p-3 rounded mb-4"
        />
        <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}