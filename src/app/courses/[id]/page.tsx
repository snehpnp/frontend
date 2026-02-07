// app/courses/[id]/page.tsx
"use client";

import { use } from "react";
import Image from "next/image";
import { useState } from "react";
import { coursesData } from "@/src/data/courses";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState<
    "overview" | "curriculum" | "reviews"
  >("overview");
  const router = useRouter();

  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", course.id);
    // Implement cart logic
  };

  const handleBuyNow = () => {
    console.log("Buy now:", course.id);
    // Implement purchase logic
  };
  const BackLastTab = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <div className="mb-4">
                {/* Back Button */}
                <button
                  onClick={() => router.back()}
                  className="mb-3 flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200 transition"
                >
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </button>

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-purple-400">
                  <Link href="/" className="hover:text-purple-300 transition">
                    Home
                  </Link>
                  <span>/</span>
                  <button
                    onClick={() => router.back()}
                    className="text-purple-300 hover:text-purple-200 transition"
                  >
                    {course.category}
                  </button>
                  <span>/</span>
                  <span className="text-white">{course.title}</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold md:text-4xl">{course.title}</h1>
              <p className="mt-4 text-lg text-slate-300">
                {course.fullDescription}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {course.bestseller && (
                  <span className="rounded bg-yellow-400 px-3 py-1 text-sm font-bold text-slate-900">
                    Bestseller
                  </span>
                )}
                {course.trending && (
                  <span className="rounded bg-purple-600 px-3 py-1 text-sm font-bold">
                    Trending
                  </span>
                )}
                {course.new && (
                  <span className="rounded bg-green-500 px-3 py-1 text-sm font-bold">
                    New
                  </span>
                )}
              </div>

              {/* Meta Info */}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="font-bold">{course.rating.score}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(course.rating.score)
                              ? "fill-current"
                              : "fill-gray-600"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-purple-300">
                    ({course.rating.count.toLocaleString()} ratings)
                  </span>
                </div>

                <div className="text-slate-300">
                  {course.students.toLocaleString()} students
                </div>

                <div className="text-slate-300">
                  Created by {course.instructor.name}
                </div>

                <div className="text-slate-300">
                  Last updated {course.lastUpdated}
                </div>
              </div>
            </div>

            {/* Right Card - Course Preview */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 overflow-hidden rounded-lg bg-white text-slate-900 shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold">
                      {course.price.currency}
                      {course.price.current}
                    </span>
                    <span className="text-lg text-slate-500 line-through">
                      {course.price.currency}
                      {course.price.original}
                    </span>
                    <span className="rounded bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">
                      {Math.round(
                        ((course.price.original - course.price.current) /
                          course.price.original) *
                          100,
                      )}
                      % off
                    </span>
                  </div>

                  <div className="mt-6 space-y-3">
                    <button
                      onClick={handleBuyNow}
                      className="w-full rounded-lg bg-purple-700 py-3 font-bold text-white transition hover:bg-purple-800"
                    >
                      Buy Now
                    </button>

                    <button
                      onClick={handleAddToCart}
                      className="w-full rounded-lg border-2 border-slate-900 bg-white py-3 font-bold text-slate-900 transition hover:bg-slate-50"
                    >
                      Add to Cart
                    </button>
                  </div>

                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center gap-3">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{course.duration} on-demand video</span>
                    </div>

                    <div className="flex items-center gap-3">
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>Downloadable resources</span>
                    </div>

                    <div className="flex items-center gap-3">
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
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Access on mobile and TV</span>
                    </div>

                    <div className="flex items-center gap-3">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Full lifetime access</span>
                    </div>

                    <div className="flex items-center gap-3">
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="border-b border-slate-200">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`border-b-2 pb-4 font-semibold ${
                    activeTab === "overview"
                      ? "border-purple-700 text-purple-700"
                      : "border-transparent text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`border-b-2 pb-4 font-semibold ${
                    activeTab === "curriculum"
                      ? "border-purple-700 text-purple-700"
                      : "border-transparent text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Curriculum
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`border-b-2 pb-4 font-semibold ${
                    activeTab === "reviews"
                      ? "border-purple-700 text-purple-700"
                      : "border-transparent text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Reviews
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  {/* What You'll Learn */}
                  <div className="rounded-lg border border-slate-200 bg-white p-6">
                    <h3 className="text-2xl font-bold text-black">
                      What you'll learn
                    </h3>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {course.whatYouLearn.map((item, index) => (
                        <div key={index} className="flex gap-3">
                          <svg
                            className="mt-1 h-5 w-5 flex-shrink-0 text-green-600"
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
                          <span className="text-sm text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h3 className="text-2xl font-bold text-black">
                      Requirements
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex gap-3 text-slate-700">
                          <span>•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-black">
                      Description
                    </h3>
                    <p className="mt-4 text-slate-700">
                      {course.fullDescription}
                    </p>
                  </div>

                  {/* Instructor */}
                  <div className="rounded-lg border border-slate-200 bg-white p-6">
                    <h3 className="text-2xl font-bold text-black">
                      Instructor
                    </h3>
                    <div className="mt-4 flex items-start gap-4">
                      <Image
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-black">
                          {course.instructor.name}
                        </h4>
                        <p className="text-slate-600">
                          {course.instructor.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div className="space-y-4">
                  {course.syllabus.map((section, index) => (
                    <details
                      key={index}
                      className="group rounded-lg border border-slate-200 bg-white"
                    >
                      <summary className="flex cursor-pointer items-center justify-between p-4 font-semibold">
                        <span className="text-sm text-slate-700">
                          Section {index + 1}: {section.title}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-500">
                            {section.lessons.length} lectures
                          </span>
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
                        </div>
                      </summary>
                      <div className="border-t border-slate-200 p-4">
                        <ul className="space-y-2">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <li
                              key={lessonIndex}
                              className="flex items-center gap-3 text-sm text-slate-700"
                            >
                              <svg
                                className="h-5 w-5 text-purple-600"
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
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  ))}
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  {course.reviews.length > 0 ? (
                    course.reviews.map((review) => (
                      <div
                        key={review.id}
                        className="rounded-lg border border-slate-200 bg-white p-6"
                      >
                        <div className="flex items-start gap-4">
                          <Image
                            src={review.avatar}
                            alt={review.author}
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-black">{review.author}</h4>
                              <span className="text-sm text-slate-500">
                                {review.date}
                              </span>
                            </div>
                            <div className="mt-1 flex items-center gap-1 text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "fill-current"
                                      : "fill-gray-300"
                                  }`}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                              ))}
                            </div>
                            <p className="mt-3 text-slate-700">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-slate-500">No reviews yet</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Additional Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Course Info */}
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="font-bold text-black">Course Info</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Level</span>
                    <span className="font-semibold text-black">
                      {course.level}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Duration</span>
                    <span className="font-semibold text-black">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Students</span>
                    <span className="font-semibold text-black">
                      {course.students.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Category</span>
                    <span className="font-semibold text-black">
                      {course.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
