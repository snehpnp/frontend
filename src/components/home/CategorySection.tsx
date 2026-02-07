"use client";

import { useRef } from "react";
import CategoryCard from "../cards/CategoryCard";

export default function CategorySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="categories" className="bg-white px-6 py-24 text-slate-900">
      {/* Single Row Layout: 30% Heading + 70% Scrollable Cards */}
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center gap-8">
          {/* Heading Section - 30% */}
          <div className="w-[30%] flex-shrink-0">
            <h2 className="text-4xl font-bold leading-tight">
              Learn essential career & life skills
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Explore powerful tools designed to automate work, manage data, and
              leverage AI for smarter decisions.
            </p>
            
            {/* Navigation Buttons */}
            <div className="mt-6 flex gap-3">
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

          {/* Cards Section - 70% with Horizontal Scroll */}
          <div className="w-[70%] overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <CategoryCard
                title="OCR & Automation"
                description="Convert scanned images and PDFs into structured digital data automatically."
                image="https://www.managedoutsource.com/wp-content/uploads/2023/06/significance-and-benefits-of-ocr-in-robotic-process-automation.png"
                videoUrl="https://v.ftcdn.net/18/98/54/87/700_F_1898548774_6XkyLSbTO0fUlCzw4AYulPLFKmoFkuId_ST.mp4"
              />
              <CategoryCard
                title="Data Management"
                description="Securely store, edit, and manage records with complete control."
                image="https://as1.ftcdn.net/v2/jpg/02/51/20/20/1000_F_251202063_mBlwdtqj09VrD9DmxzV0u8oAsnHKOWv0.jpg"
              />
              <CategoryCard
                title="AI Powered Tools"
                description="Extract, validate, and analyze data using advanced AI models."
                image="https://www.channelpronetwork.com/wp-content/uploads/2024/12/AI-powered-tools_DALL-E.jpg"
              />
              <CategoryCard
                title="OCR & Automation"
                description="Convert scanned images and PDFs into structured digital data automatically."
                image="https://www.managedoutsource.com/wp-content/uploads/2023/06/significance-and-benefits-of-ocr-in-robotic-process-automation.png"
                videoUrl="https://v.ftcdn.net/18/98/54/87/700_F_1898548774_6XkyLSbTO0fUlCzw4AYulPLFKmoFkuId_ST.mp4"
              />
              <CategoryCard
                title="Data Management"
                description="Securely store, edit, and manage records with complete control."
                image="https://as1.ftcdn.net/v2/jpg/02/51/20/20/1000_F_251202063_mBlwdtqj09VrD9DmxzV0u8oAsnHKOWv0.jpg"
              />
              <CategoryCard
                title="AI Powered Tools"
                description="Extract, validate, and analyze data using advanced AI models."
                image="https://www.channelpronetwork.com/wp-content/uploads/2024/12/AI-powered-tools_DALL-E.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}