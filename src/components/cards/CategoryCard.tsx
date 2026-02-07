"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

type Props = {
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
};

export default function CategoryCard({
  title,
  description,
  image,
  videoUrl,
}: Props) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className="
        min-w-[300px] max-w-[320px]
        overflow-hidden rounded-2xl
        border border-slate-200
        bg-white transition
        hover:shadow-xl
      "
    >
      {/* MEDIA */}
      <div className="relative">
        {!showVideo || !videoUrl ? (
          <>
            <Image
              src={image}
              alt={title}
              width={400}
              height={250}
              className="h-48 w-full object-cover"
            />

            {videoUrl && (
              <button
                onClick={() => setShowVideo(true)}
                className="
                  absolute inset-0 flex items-center justify-center
                  bg-black/40 text-white font-medium
                  hover:bg-black/50
                "
              >
                ▶ Play Preview
              </button>
            )}
          </>
        ) : (
          <VideoPlayer src={videoUrl} />
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-3 text-sm text-slate-600">
          {description}
        </p>

        <Link
          href="#"
          className="mt-4 inline-block text-sm font-medium text-purple-600 hover:underline"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}
