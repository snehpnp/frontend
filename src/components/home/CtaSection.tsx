"use client";

import Link from "next/link";
import { useState } from "react";

export default function CtaSection() {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: "⚡",
      text: "10x faster processing",
    },
    {
      icon: "🔒",
      text: "Enterprise-grade security",
    },
    {
      icon: "🚀",
      text: "Instant deployment",
    },
    {
      icon: "💰",
      text: "Free trial available",
    },
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "1M+", label: "Documents Processed" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      quote: "This platform saved us 20 hours per week on manual data entry.",
      author: "Sarah Johnson",
      role: "Operations Manager",
      company: "TechCorp",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      quote: "The AI-powered tools are incredibly accurate and easy to use.",
      author: "Michael Chen",
      role: "Data Analyst",
      company: "DataFlow Inc",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      quote: "Best investment we made for our document management needs.",
      author: "Emily Rodriguez",
      role: "CEO",
      company: "StartupXYZ",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add your email submission logic here
  };

  return (
    <>
      {/* Main CTA Section */}
      <section className="relative overflow-hidden bg-white from-purple-50 via-white to-blue-50 text-slate-900">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-0 h-48 w-48 rounded-full bg-purple-200 opacity-20 blur-3xl sm:h-72 sm:w-72"></div>
          <div className="absolute -right-4 bottom-0 h-48 w-48 rounded-full bg-blue-200 opacity-20 blur-3xl sm:h-72 sm:w-72"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
          {/* Main Content */}
          <div className="text-center">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1.5 text-xs font-semibold text-purple-700 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
              </span>
              <span className="hidden sm:inline">Limited Time Offer - 50% Off for New Users</span>
              <span className="sm:hidden">50% Off - New Users</span>
            </div>

            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Ready to transform your
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                workflow forever?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:mt-6 sm:text-lg md:text-xl">
              Start managing your documents, extracting data automatically, and
              scaling your operations with confidence. Join thousands of teams
              already saving hours every week.
            </p>

            {/* Feature Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
                >
                  <span className="text-base sm:text-lg">{feature.icon}</span>
                  <span className="hidden xs:inline sm:inline">{feature.text}</span>
                  <span className="xs:hidden sm:hidden">{feature.text.split(' ')[0]}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href="/dashboard"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-purple-700 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-purple-800 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4"
              >
                <span className="relative z-10">Get Started Free</span>
                <svg
                  className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1"
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
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </Link>

              <Link
                href="#demo"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 sm:w-auto sm:px-8 sm:py-4"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Demo
              </Link>
            </div>

            {/* Email Signup Form */}
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-6 max-w-md sm:mt-8 sm:flex sm:gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 sm:flex-1 sm:py-3"
                required
              />
              <button
                type="submit"
                className="mt-3 w-full rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 sm:mt-0 sm:w-auto sm:py-3"
              >
                Get Updates
              </button>
            </form>

            <p className="mt-3 text-xs text-slate-500 sm:mt-4 sm:text-sm">
              No credit card required • Free 14-day trial • Cancel anytime
            </p>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-20 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-4 text-center shadow-sm sm:p-6"
              >
                <p className="text-2xl font-bold text-purple-700 sm:text-3xl lg:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-600 sm:mt-2 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Trusted by teams worldwide
            </h3>
            <p className="mt-3 text-base text-slate-600 sm:mt-4 sm:text-lg">
              See what our customers are saying about us
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
              >
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 fill-current sm:h-5 sm:w-5"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-700 sm:mt-4 sm:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3 sm:mt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-10 w-10 rounded-full sm:h-12 sm:w-12"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 sm:text-base">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-slate-600 sm:text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className=" bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wide text-slate-500 sm:mb-8 sm:text-sm">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
            {["Google", "Microsoft", "Amazon", "Meta", "Netflix", "Tesla"].map(
              (company, index) => (
                <div
                  key={index}
                  className="text-lg font-bold text-slate-400 opacity-50 transition-opacity hover:opacity-100 sm:text-xl md:text-2xl"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Frequently Asked Questions
            </h3>
            <p className="mt-3 text-base text-slate-600 sm:mt-4 sm:text-lg">
              Everything you need to know about getting started
            </p>
          </div>

          <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4">
            {[
              {
                q: "How does the free trial work?",
                a: "Get full access to all features for 14 days. No credit card required.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes, you can cancel your subscription at any time with no penalties.",
              },
              {
                q: "What kind of support do you offer?",
                a: "We provide 24/7 email support and live chat during business hours.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-slate-200 bg-white p-4 sm:p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 sm:text-base">
                  {faq.q}
                  <svg
                    className="h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-180"
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
                <p className="mt-3 text-sm text-slate-600 sm:mt-4 sm:text-base">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-6 text-center sm:mt-8">
            <Link
              href="/faq"
              className="text-sm font-semibold text-purple-700 hover:text-purple-800 sm:text-base"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}