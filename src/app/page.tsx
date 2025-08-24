'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  HeartIcon, 
  ShieldCheckIcon, 
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    dates: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can integrate with email service later
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! Ryan will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      dates: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <HomeIcon className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Ryan&apos;s House Sitting</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional House Sitting
              <span className="block text-indigo-600">Across Europe &amp; Worldwide</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Trust your home, pets, and plants to a reliable, experienced professional. 
              Available for short-term and long-term house sitting assignments across Europe and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get a Quote
              </a>
              <a
                href="#about"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive House Sitting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional care for your home, pets, and plants while you&apos;re away
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg"
            >
              <HomeIcon className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Home Security &amp; Maintenance</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Regular property checks
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Mail collection &amp; forwarding
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Basic maintenance tasks
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Security monitoring
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg"
            >
              <HeartIcon className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pet Care &amp; Companionship</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Feeding &amp; medication
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Exercise &amp; playtime
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Veterinary visits if needed
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Daily updates &amp; photos
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl shadow-lg"
            >
              <GlobeAltIcon className="h-16 w-16 text-violet-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Plant &amp; Garden Care</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Indoor plant watering
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Garden maintenance
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Pool &amp; hot tub care
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Seasonal adjustments
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Ryan - Your Trusted House Sitter
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in house sitting across Europe and beyond, I provide 
                professional, reliable care for your home and loved ones while you&apos;re away.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <ShieldCheckIcon className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Fully insured and background checked</span>
                </div>
                <div className="flex items-center">
                  <StarIcon className="h-6 w-6 text-yellow-500 mr-3" />
                  <span className="text-gray-700">5-star rated by previous clients</span>
                </div>
                <div className="flex items-center">
                  <GlobeAltIcon className="h-6 w-6 text-blue-500 mr-3" />
                  <span className="text-gray-700">Available across Europe and worldwide</span>
                </div>
                <div className="flex items-center">
                  <HeartIcon className="h-6 w-6 text-red-500 mr-3" />
                  <span className="text-gray-700">Passionate about animal care</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose Ryan?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Professional Experience</h4>
                    <p className="text-indigo-100 text-sm">Years of successful house sitting assignments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Flexible Availability</h4>
                    <p className="text-indigo-100 text-sm">Short-term and long-term assignments welcome</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Peace of Mind</h4>
                    <p className="text-indigo-100 text-sm">Regular updates and emergency contact available</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-gray-600">
              Ready to discuss your house sitting needs? Contact me for a personalized quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="h-6 w-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700">Available via phone and WhatsApp</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-6 w-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700">Quick response within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-6 w-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700">Serving Europe and worldwide</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Response Time</h4>
                <p className="text-gray-600 text-sm">
                  I typically respond to all inquiries within 24 hours. For urgent requests, 
                  please include &quot;URGENT&quot; in your message subject.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="City, Country"
                  />
                </div>

                <div>
                  <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Dates *
                  </label>
                  <input
                    type="text"
                    id="dates"
                    name="dates"
                    required
                    value={formData.dates}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="e.g., July 15-30, 2024"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Tell me about your property, pets, plants, and any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <HomeIcon className="h-8 w-8 text-indigo-400" />
            <span className="ml-2 text-xl font-bold">Ryan&apos;s House Sitting</span>
          </div>
          <p className="text-gray-300 mb-6">
            Professional house sitting services across Europe and worldwide
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2024 Ryan&apos;s House Sitting. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
