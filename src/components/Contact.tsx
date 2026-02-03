import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:adhiseem.atwork@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl mb-6 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
            <Mail size={24} />
            adhiseem.atwork@gmail.com
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-900 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-lg"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-lg"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-900 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-black focus:outline-none transition-colors text-lg resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={24} />
            Send Message
          </motion.button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 text-center font-medium"
            >
              Opening your email client...
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
