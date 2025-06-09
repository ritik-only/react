const Contact = () => (
  <section
    id="contact"
    className="px-4 py-20 min-h-screen flex items-center justify-center "
  >
    <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md border border-white/10">
      <h2 className="text-3xl font-semibold text-white mb-6 text-center">Contact</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-black/20 border border-white/10 text-white placeholder-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-black/20 border border-white/10 text-white placeholder-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full bg-black/20 border border-white/10 text-white placeholder-white px-4 py-3 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
