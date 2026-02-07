// app/pricing/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PricingPage() {
  const [showComparison, setShowComparison] = useState(false);

  const plans = [
    {
      id: "personal",
      name: "Personal Plan",
      subtitle: "For you",
      audience: "Individual",
      price: "₹500",
      period: "per month",
      billing: "Billed monthly or annually. Cancel anytime.",
      buttonText: "Start subscription",
      buttonVariant: "primary",
      features: [
        "Access to 26,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
      ],
      highlight: false,
    },
    {
      id: "team",
      name: "Team Plan",
      subtitle: "For your team",
      audience: "2 to 50 people",
      price: "₹2,000",
      period: "a month per user",
      billing: "Billed annually. Cancel anytime.",
      buttonText: "Start subscription",
      buttonVariant: "primary",
      features: [
        "Access to 13,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Analytics and adoption reports",
      ],
      highlight: true,
    },
    {
      id: "enterprise",
      name: "Enterprise Plan",
      subtitle: "For your whole organization",
      audience: "More than 20 people",
      price: "Contact sales for pricing",
      period: "",
      billing: "",
      buttonText: "Request a demo",
      buttonVariant: "secondary",
      features: [
        "Access to 30,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Advanced analytics and insights",
        "Dedicated customer success team",
        "International course collection featuring 15 languages",
        "Customizable content",
        "Hands-on tech training with add-on",
        "Strategic implementation services with add-on",
      ],
      highlight: false,
    },
  ];

  const comparisonFeatures = [
    {
      category: "Learner experience",
      features: [
        {
          name: "Top-rated courses",
          personal: "26000+",
          team: "13000+",
          enterprise: "30,000+ (including international collection)",
          info: true,
        },
        {
          name: "Certification prep courses and practice tests",
          personal: true,
          team: true,
          enterprise: true,
          info: true,
        },
        {
          name: "AI-powered coding exercises",
          personal: true,
          team: true,
          enterprise: true,
          info: true,
        },
        {
          name: "Goal-aligned recommendations",
          personal: true,
          team: true,
          enterprise: true,
          info: true,

        },
        {
          name: "Instructor Q&A",
          personal: true,
          team: true,
          enterprise: true,
          info: true,

        },
        {
          name: "Mobile app access",
          personal: true,
          team: true,
          enterprise: true,
          info: true,

        },
      ],
    },
    {
      category: "Admin experience",
      features: [
        {
          name: "Insights and reporting",
          personal: false,
          team: "Basic",
          enterprise: "Advanced",
          info: true,
        },
        {
          name: "Learning paths",
          personal: false,
          team: true,
          enterprise: true,
          info: false,
        },
        {
          name: "Custom learning paths",
          personal: false,
          team: false,
          enterprise: true,
          info: false,
        },
        {
          name: "User groups",
          personal: false,
          team: true,
          enterprise: true,
          info: false,
        },
        {
          name: "SSO and LMS integrations",
          personal: false,
          team: "Available with add-on",
          enterprise: true,
          info: true,
        },
      ],
    },
    {
      category: "Customer success",
      features: [
        {
          name: "24/7 support",
          personal: true,
          team: true,
          enterprise: true,
          info: false,
        },
        {
          name: "Dedicated customer success team",
          personal: false,
          team: false,
          enterprise: true,
          info: false,
        },
        {
          name: "Strategic planning and consulting",
          personal: false,
          team: false,
          enterprise: "Available with add-on",
          info: false,
        },
      ],
    },
  ];

  const trustedCompanies = [
    { name: "Volkswagen", logo: "/images/companies/vw.png" },
    { name: "Samsung", logo: "/images/companies/samsung.png" },
    { name: "Cisco", logo: "/images/companies/cisco.png" },
    { name: "Vimeo", logo: "/images/companies/vimeo.png" },
    { name: "P&G", logo: "/images/companies/pg.png" },
    { name: "Hewlett Packard", logo: "/images/companies/hp.png" },
    { name: "Citi", logo: "/images/companies/citi.png" },
    { name: "Ericsson", logo: "/images/companies/ericsson.png" },
  ];

  const testimonials = [
    {
      quote:
        "LMS was rated the most popular online course or certification program for learning how to code according to StackOverflow's 2023 Developer survey.",
      author: "Stack Overflow",
      type: "survey",
      responses: "87,078 responses collected",
      link: "View Web Development courses",
    },
    {
      quote:
        "LMS was truly a game-changer and a great guide for me as we brought Dimensional to life.",
      author: "Alvin Lim",
      role: "Technical Co-Founder, CTO at",
      company: "Dimensional",
      link: "View this iOS & Swift course",
    },
    {
      quote:
        "LMS gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
      author: "William A. Wachlin",
      role: "Partner Account Manager at Amazon Web Services",
      link: "View this AWS course",
    },
    {
      quote:
        "With LMS Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.",
      author: "Ian Stevens",
      role: "Head of Capability Development, North America at Publicis Sapient",
      link: "Read full story",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Choose a plan for success
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Don't want to buy courses one by one? Pick a plan to help you, your team, or your
            organization achieve outcomes faster.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative overflow-hidden rounded-lg border-2 bg-white ${
                  plan.highlight
                    ? "border-purple-600 shadow-xl"
                    : "border-gray-200 shadow-sm"
                }`}
              >
                {/* Purple top border */}
                <div className="h-1 bg-purple-600"></div>

                <div className="p-6">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-slate-600">{plan.subtitle}</p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      {plan.audience}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    {plan.id === "enterprise" ? (
                      <p className="text-lg font-semibold text-slate-900">
                        {plan.price}
                      </p>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-slate-900">
                            Starting at {plan.price}
                          </span>
                          <span className="text-sm text-slate-600">
                            {plan.period}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-600">
                          {plan.billing}
                        </p>
                      </>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`mb-6 w-full rounded-lg px-6 py-3 font-bold transition ${
                      plan.buttonVariant === "primary"
                        ? "bg-purple-700 text-white hover:bg-purple-800"
                        : "border-2 border-slate-900 bg-white text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {plan.buttonText}
                    <svg
                      className="ml-2 inline-block h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Plans Button */}
      <section className="bg-gray-50 px-6 pb-12">
        <div className="mx-auto max-w-7xl text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-800 transition"
          >
            Compare plans and features
            <svg
              className={`h-4 w-4 transition-transform ${
                showComparison ? "rotate-180" : ""
              }`}
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
          </button>
        </div>
      </section>

      {/* Comparison Table */}
      {showComparison && (
        <section className="bg-white px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Compare plans and features
            </h2>

            {/* Legend */}
            <div className="mb-6 flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-700">Included in plan</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-slate-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-slate-700">Available with add-on</span>
              </div>
            </div>

            {/* Plan Headers */}
            <div className="mb-6 grid grid-cols-4 gap-4">
              <div></div>
              {plans.map((plan) => (
                <div key={plan.id} className="text-center">
                  <div className="mb-4 rounded-lg border-2 border-purple-600 bg-purple-50 p-4">
                    <h3 className="font-bold text-slate-900">{plan.name}</h3>
                    <p className="text-sm text-slate-600">
                      {plan.id === "enterprise"
                        ? plan.price
                        : `Starting at ${plan.price} ${plan.period}`}
                    </p>
                    <p className="mt-2 flex items-center justify-center gap-2 text-xs text-slate-600">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {plan.audience}
                    </p>
                    <button
                      className={`mt-4 w-full rounded-lg px-4 py-2 text-sm font-bold transition ${
                        plan.buttonVariant === "primary"
                          ? "bg-purple-700 text-white hover:bg-purple-800"
                          : "border-2 border-slate-900 bg-white text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {plan.buttonText}
                      <svg
                        className="ml-1 inline-block h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Rows */}
            {comparisonFeatures.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {section.category}
                </h3>
                <div className="space-y-2">
                  {section.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`grid grid-cols-4 gap-4 rounded-lg p-4 ${
                        featureIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-700">
                          {feature.name}
                        </span>
                        {feature?.info && (
                          <button className="text-slate-400 hover:text-slate-600">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        )}
                      </div>
                      <div className="flex items-center justify-center">
                        {typeof feature.personal === "boolean" ? (
                          feature.personal ? (
                            <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )
                        ) : (
                          <span className="text-sm font-medium text-slate-900">
                            {feature.personal}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-center">
                        {typeof feature.team === "boolean" ? (
                          feature.team ? (
                            <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )
                        ) : (
                          <span className="text-sm font-medium text-slate-900">
                            {feature.team}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-center">
                        {typeof feature.enterprise === "boolean" ? (
                          feature.enterprise ? (
                            <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )
                        ) : (
                          <span className="text-sm font-medium text-slate-900">
                            {feature.enterprise}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Trusted Companies */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-center text-slate-600">
            Trusted by over 17,000 companies and millions of learners around the world
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {trustedCompanies.map((company, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-slate-400 opacity-60 hover:opacity-100 transition"
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Join others transforming their lives through learning
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="mb-4 text-4xl text-purple-700">"</div>
                <p className="mb-6 text-sm text-slate-700">{testimonial.quote}</p>
                
                {testimonial.type === "survey" ? (
                  <div className="mb-4">
                    <div className="mb-2 h-8 w-24 bg-orange-400"></div>
                    <p className="text-xs text-slate-500">
                      {testimonial.responses}
                    </p>
                  </div>
                ) : (
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-slate-200"></div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-slate-600">
                        {testimonial.role} {testimonial.company}
                      </p>
                    </div>
                  </div>
                )}
                
                <Link
                  href="#"
                  className="text-sm font-medium text-purple-700 hover:text-purple-800"
                >
                  {testimonial.link}
                  <svg
                    className="ml-1 inline-block h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is included in the Personal Plan?",
                a: "The Personal Plan includes access to 26,000+ top-rated courses, certification prep, goal-focused recommendations, and AI-powered coding exercises. You'll have lifetime access to all courses and can learn at your own pace.",
              },
              {
                q: "Can I switch plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, debit cards, PayPal, and various local payment methods depending on your region.",
              },
              {
                q: "Is there a free trial available?",
                a: "Yes, we offer a 7-day free trial for new users. You can cancel anytime during the trial period without being charged.",
              },
              {
                q: "What's the refund policy?",
                a: "We offer a 30-day money-back guarantee. If you're not satisfied with your subscription, contact us within 30 days for a full refund.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-slate-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  {faq.q}
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
                <p className="mt-4 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-purple-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to start learning?
          </h2>
          <p className="mt-4 text-lg text-purple-100">
            Choose the plan that's right for you and start your learning journey today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-lg bg-white px-8 py-3 font-bold text-purple-700 transition hover:bg-purple-50"
            >
              View Plans
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border-2 border-white px-8 py-3 font-bold text-white transition hover:bg-purple-800"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}