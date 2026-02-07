"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function PopularSkillsPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const skills = {
    development: [
      { name: "Python", learners: "50,227,054 learners" },
      { name: "Web Development", learners: "14,483,339 learners" },
      { name: "Data Science", learners: "8,345,717 learners" },
    ],
    design: [
      { name: "Blender", learners: "3,111,453 learners" },
      { name: "Graphic Design", learners: "4,689,886 learners" },
      { name: "User Experience (UX) Design", learners: "2,151,957 learners" },
    ],
    business: [
      {
        name: "PMI Project Management Professional (PMP)",
        learners: "2,866,858 learners",
      },
      { name: "Microsoft Power BI", learners: "5,148,095 learners" },
      {
        name: "PMI Certified Associate in Project Management (CAPM)",
        learners: "485,943 learners",
      },
    ],
  };

  const caseStudies = [
    {
      company: "Booz | Allen | Hamilton",
      title:
        "Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling",
      stat1: { number: "93%", description: "retention rate among participating employees" },
      stat2: {
        number: "65%",
        description: "of learners noted a positive impact on their productivity",
      },
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Popular Skills Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-bold text-gray-900">
            Popular Skills
          </h2>

          <div className="grid gap-8 lg:grid-cols-4">
            {/* Left Column - Featured Skill */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900">
                ChatGPT is a top skill
              </h3>
              <Link
                href="#"
                className="mt-3 inline-flex items-center text-purple-700 hover:text-purple-800"
              >
                See ChatGPT courses
                <svg
                  className="ml-1 h-4 w-4"
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
              <p className="mt-2 text-sm text-gray-500">5,480,628 learners</p>

              <button className="mt-8 w-full rounded border-2 border-gray-900 bg-white px-6 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-50">
                Show all trending skills ↗
              </button>
            </div>

            {/* Development Column */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-gray-900">
                Development
              </h4>
              <ul className="space-y-4">
                {skills.development.map((skill, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="group flex items-center justify-between"
                    >
                      <span className="text-purple-700 group-hover:text-purple-800">
                        {skill.name}
                      </span>
                      <svg
                        className="h-4 w-4 text-purple-700"
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
                    <p className="mt-1 text-xs text-gray-500">
                      {skill.learners}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design Column */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-gray-900">Design</h4>
              <ul className="space-y-4">
                {skills.design.map((skill, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="group flex items-center justify-between"
                    >
                      <span className="text-purple-700 group-hover:text-purple-800">
                        {skill.name}
                      </span>
                      <svg
                        className="h-4 w-4 text-purple-700"
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
                    <p className="mt-1 text-xs text-gray-500">
                      {skill.learners}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Column */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-gray-900">Business</h4>
              <ul className="space-y-4">
                {skills.business.map((skill, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="group flex items-center justify-between"
                    >
                      <span className="text-purple-700 group-hover:text-purple-800">
                        {skill.name}
                      </span>
                      <svg
                        className="h-4 w-4 text-purple-700"
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
                    <p className="mt-1 text-xs text-gray-500">
                      {skill.learners}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Carousel Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="grid gap-8 overflow-hidden rounded-lg bg-gray-100 shadow-sm lg:grid-cols-2"
            >
              {/* Left Content */}
              <div className="p-12">
                <p className="text-sm font-medium text-gray-600">
                  {study.company}
                </p>
                <h3 className="mt-4 text-3xl font-bold leading-tight text-gray-900">
                  {study.title}
                </h3>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="text-5xl font-bold text-gray-900">
                      {study.stat1.number}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      {study.stat1.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-gray-900">
                      {study.stat2.number}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      {study.stat2.description}
                    </p>
                  </div>
                </div>

                <button className="mt-8 inline-flex items-center rounded bg-purple-700 px-6 py-3 font-bold text-white transition hover:bg-purple-800">
                  Read full story
                  <svg
                    className="ml-2 h-4 w-4"
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
              </div>

              {/* Right Image */}
              <div className="relative h-full min-h-[400px]">
                <Image
                  src={study.image}
                  alt={study.company}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}

          {/* Carousel Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
              className="rounded-full p-2 hover:bg-gray-200"
              aria-label="Previous slide"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeSlide
                      ? "w-8 bg-purple-700"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveSlide(Math.min(3, activeSlide + 1))}
              className="rounded-full p-2 hover:bg-gray-200"
              aria-label="Next slide"
            >
              <svg
                className="h-6 w-6"
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
          </div>
        </div>
      </section>
    </div>
  );
}