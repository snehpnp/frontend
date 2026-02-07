import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
     <Image
  src="/hero.png"
  alt="Hero Background"
  fill
  priority
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 100vw,
         100vw"
  className="object-cover"
/>


      {/* Overlay (Light / Dark aware) */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-white/90 via-white/70 to-transparent
          dark:from-black/80 dark:via-black/50
        "
      />

      {/* Content */}
      <div className="relative z-10  max-w-7xl px-6">
        <div className="max-w-2xl
          text-slate-900
          dark:text-white
        ">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build in-demand skills for
            <span className="
              block
              text-purple-700
              dark:text-yellow-300
            ">
              your future career
            </span>
          </h1>

          <p className="
            mt-6 text-lg
            text-slate-600
            dark:text-slate-200
          ">
            Learn from real-world experts. Upload documents, scan data,
            and manage everything in one powerful platform.
          </p>

          <div className="mt-8 flex gap-4">
            {/* Primary Button */}
            <Link
              href="/dashboard"
              className="
                rounded-lg px-6 py-3 font-semibold
                bg-purple-600 text-white
                hover:bg-purple-700
                dark:bg-yellow-400 dark:text-black
                dark:hover:bg-yellow-300
              "
            >
              Get Started
            </Link>

            {/* Secondary Button */}
            <Link
              href="#categories"
              className="
                rounded-lg px-6 py-3
                border
                border-slate-300 text-slate-900
                hover:bg-slate-200

                dark:border-white/40 dark:text-white
                dark:hover:bg-white/10
              "
            >
              Explore Features
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
