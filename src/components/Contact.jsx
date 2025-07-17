import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const { error } = await supabase
      .from('contacts')
      .insert([{ ...form, created_at: new Date() }]);

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6"
    >
      <div className="max-w-3xl w-full">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-4"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact <span className="text-purple-500">Me</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Need my services? Want to collaborate on something amazing?  
          Drop me a message and I’ll respond ASAP!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-900 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-gray-200 focus:border-purple-500 outline-none transition"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-gray-200 focus:border-purple-500 outline-none transition"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-gray-200 focus:border-purple-500 outline-none transition"
            required
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition transform hover:scale-105"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-center">✅ Message sent! I’ll get back to you.</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-center">❌ Oops! Something went wrong. Try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
