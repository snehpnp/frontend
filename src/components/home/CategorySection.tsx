// components/home/CategorySection.tsx
"use client";

import { useRef, useState } from "react";
import CategoryCard from "../cards/CategoryCard";
import { coursesData } from "@/src/data/courses";
import { categories } from "@/src/types/course";

export default function CategorySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredCourses =
    selectedCategory === "All"
      ? coursesData
      : coursesData.filter((course) => course.category === selectedCategory);

  return (
    <section id="categories" className="bg-white px-4 py-12 text-slate-900 sm:px-6 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Category Filter Tabs */}
        <div className="mb-6 overflow-x-auto sm:mb-8">
          <div className="flex gap-2 pb-4 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition sm:px-6 sm:text-sm ${
                  selectedCategory === category
                    ? "bg-purple-700 text-white shadow-md"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Layout */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
          {/* Heading Section - Full width on mobile, 30% on desktop */}
          <div className="lg:w-[30%] lg:flex-shrink-0">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Learn essential career & life skills
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:mt-4 sm:text-lg">
              Explore powerful tools designed to automate work, manage data, and
              leverage AI for smarter decisions.
            </p>

            {/* Results Count */}
            <p className="mt-3 text-xs text-slate-500 sm:mt-4 sm:text-sm">
              Showing {filteredCourses.length} courses
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>

            {/* Navigation Buttons - Hidden on mobile, visible on tablet+ */}
            <div className="mt-4 hidden gap-3 sm:mt-6 md:flex">
              <button
                onClick={() => scroll("left")}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-300 bg-white transition-all hover:border-slate-900 hover:bg-slate-50"
                aria-label="Scroll left"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-300 bg-white transition-all hover:border-slate-900 hover:bg-slate-50"
                aria-label="Scroll right"
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Cards Section - Full width on mobile, 70% on desktop */}
          <div className="w-full overflow-hidden lg:w-[70%]">
            <div
              ref={scrollContainerRef}
              className="scrollbar-hide flex gap-4 overflow-x-auto pb-4 sm:gap-6"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {filteredCourses.map((course) => (
                <CategoryCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}