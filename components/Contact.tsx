"use client";

import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, MessageSquare, Bitcoin, Wallet, ChevronDown, ChevronUp } from 'lucide-react';
import CryptoPayment from './CryptoPayment';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showCryptoPayment, setShowCryptoPayment] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: MapPin, label: "Location", value: "New Delhi, India" },
    { icon: Mail, label: "Email", value: "adhiseem.atwork@gmail.com" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:adhiseem.atwork@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800/50 to-transparent relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            Let's Build Web3 Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to build the next generation of decentralized applications? Let's discuss your Web3 project and create something amazing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="text-[var(--color-primary)]" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                  />
                </div>
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                />
                
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[var(--color-primary)] focus:outline-none resize-none transition-colors"
                />
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Crypto Payment Section */}
            <div className="mt-12">
              <button
                onClick={() => setShowCryptoPayment(!showCryptoPayment)}
                className="w-full flex items-center justify-between px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 mb-4"
              >
                <div className="flex items-center gap-2">
                  <Bitcoin className="w-5 h-5" />
                  Pay with Crypto (Live Payments)
                  <Wallet className="w-4 h-4" />
                </div>
                {showCryptoPayment ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {showCryptoPayment && (
                <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
                  <CryptoPayment />
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-[var(--color-border)] transition-colors"
                  >
                    <div className="p-2 bg-[var(--color-primary)]/20 rounded-lg">
                      <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.label}</h4>
                      <p className="text-gray-300">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-2xl border border-[var(--color-border)]/30">
              <h4 className="text-xl font-semibold text-white mb-4">Let's Build the Decentralized Future</h4>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about working on innovative Web3 projects and collaborating with forward-thinking teams. 
                Whether you need a DeFi protocol, NFT marketplace, DAO platform, or want to discuss blockchain integration, 
                I'm here to help bring your decentralized vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;