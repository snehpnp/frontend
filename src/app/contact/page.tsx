// app/contact/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    teamSize: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        teamSize: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      description: "Our team is here to help",
      contact: "support@lmsplatform.com",
      link: "mailto:support@lmsplatform.com",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      contact: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Visit Us",
      description: "Come say hello at our office",
      contact: "Indore, Madhya Pradesh, India",
      link: "#",
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Live Chat",
      description: "Get instant support",
      contact: "Start a conversation",
      link: "#",
    },
  ];

  const faqs = [
    {
      question: "How quickly will I receive a response?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
    },
    {
      question: "Do you offer personalized demos?",
      answer:
        "Yes! We'd love to show you how our platform can help your organization. Schedule a demo through our contact form.",
    },
    {
      question: "What support options are available?",
      answer:
        "We offer 24/7 email support, live chat during business hours, phone support, and dedicated account managers for enterprise clients.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "24/7", label: "Support Available" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "<1hr", label: "Avg Response Time" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-blue-600 px-6 py-20 text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-0 h-96 w-96 animate-pulse rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
          <div className="absolute -right-4 bottom-0 h-96 w-96 animate-pulse rounded-full bg-blue-500 opacity-20 blur-3xl animation-delay-2000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                💬 We're here to help
              </div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Get in Touch with Us
              </h1>
              <p className="mt-6 text-lg text-purple-100 md:text-xl">
                Have questions? We'd love to hear from you. Send us a message and
                we'll respond as soon as possible.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up text-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl font-bold">{stat.number}</div>
                    <div className="mt-1 text-sm text-purple-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in-right hidden lg:block">
              <div className="relative h-96 w-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-500 opacity-20 blur-2xl"></div>
                <div className="relative flex h-full items-center justify-center">
                  <svg
                    className="h-80 w-80 text-white opacity-20"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group animate-fade-in-up rounded-xl border border-purple-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-700 transition-colors group-hover:bg-purple-700 group-hover:text-white">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{method.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{method.description}</p>
                <p className="mt-3 font-semibold text-purple-700 group-hover:text-purple-800">
                  {method.contact}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left - Form */}
            <div className="animate-fade-in-left">
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-slate-900">
                  Send us a message
                </h2>
                <p className="mt-2 text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-700"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-slate-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Company and Role */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-slate-700"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="role"
                        className="block text-sm font-semibold text-slate-700"
                      >
                        Your Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                      >
                        <option value="">Select your role</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher/Instructor</option>
                        <option value="manager">Manager</option>
                        <option value="executive">Executive</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Team Size and Subject */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="teamSize"
                        className="block text-sm font-semibold text-slate-700"
                      >
                        Team Size
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                      >
                        <option value="">Select team size</option>
                        <option value="1-10">1-10 people</option>
                        <option value="11-50">11-50 people</option>
                        <option value="51-200">51-200 people</option>
                        <option value="200+">200+ people</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-slate-700"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="demo">Request a Demo</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden rounded-lg bg-purple-700 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-purple-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="h-5 w-5 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg
                            className="h-5 w-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </button>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="animate-fade-in rounded-lg bg-green-50 p-4 text-green-800">
                      <div className="flex items-center gap-2">
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-semibold">
                          Message sent successfully! We'll get back to you soon.
                        </span>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Right - Info */}
            <div className="animate-fade-in-right space-y-8">
              {/* Why Contact Us */}
              <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold">Why contact us?</h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Get personalized course recommendations",
                    "Schedule a live platform demo",
                    "Discuss enterprise solutions",
                    "Technical support and assistance",
                    "Partnership opportunities",
                    "Custom training programs",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900">
                  Quick Answers
                </h3>
                <div className="mt-6 space-y-4">
                  {faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group rounded-lg border border-slate-200 p-4"
                    >
                      <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                        {faq.question}
                        <svg
                          className="h-5 w-5 transition-transform group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900">
                  Office Hours
                </h3>
                <div className="mt-6 space-y-3 text-slate-700">
                  <div className="flex justify-between">
                    <span className="font-semibold">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Saturday</span>
                    <span>10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-slate-500">Closed</span>
                  </div>
                  <div className="mt-4 rounded-lg bg-purple-50 p-3 text-sm">
                    <p className="font-semibold text-purple-900">
                      24/7 Email Support Available
                    </p>
                    <p className="text-purple-700">
                      We respond to all emails within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Our Location</h2>
            <p className="mt-2 text-slate-600">
              Visit us at our office in Indore, Madhya Pradesh
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl shadow-xl">
            <div className="h-96 w-full bg-slate-200">
              {/* Replace with actual map iframe */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <svg
                    className="mx-auto h-16 w-16 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-4 text-slate-600">Map placeholder</p>
                  <p className="text-sm text-slate-500">
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Connect with us on social media
          </h2>
          <p className="mt-2 text-slate-600">
            Follow us for updates, tips, and learning resources
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {[
              { name: "Facebook", icon: "📘",img:"/icons/facebook.svg" },
              { name: "Twitter", icon: "🐦" },
              { name: "LinkedIn", icon: "💼" },
              { name: "Instagram", icon: "📷" },
              { name: "YouTube", icon: "▶️" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-2xl transition-all hover:-translate-y-1 hover:bg-purple-700 hover:shadow-lg"
                title={social.name}
              >
                
               {social.img &&  <Image src={social.img} alt={social.name} width={24} height={24} />}
              </a>
            ))}
          </div>
          </div>

       
      </section>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>

    </div>
  );
}