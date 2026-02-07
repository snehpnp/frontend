// components/cards/CategoryCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Course } from "@/src/types/course";
import VideoPlayer from "./VideoPlayer";

type Props = {
  course: Course;
};

export default function CategoryCard({ course }: Props) {
  const [showVideo, setShowVideo] = useState(false);

  const discountPercentage = Math.round(
    ((course.price.original - course.price.current) / course.price.original) *
      100
  );

  return (
    <Link href={`/courses/${course.id}`}>
      <div className="group min-w-[300px] max-w-[320px] cursor-pointer overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:shadow-xl">
        {/* MEDIA */}
        <div className="relative">
          {!showVideo || !course.videoUrl ? (
            <>
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {course.videoUrl && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowVideo(true);
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 font-medium text-white opacity-0 transition-opacity hover:bg-black/50 group-hover:opacity-100"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    ▶
                  </div>
                </button>
              )}

              {/* Tags */}
              {(course.bestseller || course.trending || course.new) && (
                <div className="absolute left-3 top-3 flex gap-2">
                  {course.bestseller && (
                    <span className="rounded bg-yellow-400 px-2 py-1 text-xs font-bold text-slate-900">
                      Bestseller
                    </span>
                  )}
                  {course.trending && (
                    <span className="rounded bg-purple-600 px-2 py-1 text-xs font-bold text-white">
                      Trending
                    </span>
                  )}
                  {course.new && (
                    <span className="rounded bg-green-500 px-2 py-1 text-xs font-bold text-white">
                      New
                    </span>
                  )}
                </div>
              )}
            </>
          ) : (
            <VideoPlayer src={course.videoUrl} />
          )}
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <h3 className="line-clamp-2 text-base font-bold text-slate-900">
            {course.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-slate-600">
            {course.description}
          </p>

          {/* Instructor */}
          <p className="mt-2 text-xs text-slate-500">{course.instructor.name}</p>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-slate-900">
                {course.rating.score}
              </span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(course.rating.score)
                        ? "fill-current"
                        : "fill-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <span className="text-xs text-slate-500">
              ({course.rating.count.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-lg font-bold text-slate-900">
              {course.price.currency}
              {course.price.current}
            </span>
            <span className="text-sm text-slate-500 line-through">
              {course.price.currency}
              {course.price.original}
            </span>
            <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
              {discountPercentage}% off
            </span>
          </div>

          {/* Category Badge */}
          <div className="mt-3">
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
              {course.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}