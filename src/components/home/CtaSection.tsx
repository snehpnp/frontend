import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-white text-slate-900
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to transform your workflow?
        </h2>

        <p
          className="
            mt-4 max-w-2xl mx-auto text-lg
            text-slate-600
          "
        >
          Start managing your documents, extracting data automatically,
          and scaling your operations with confidence.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          {/* Primary CTA */}
          <Link
            href="/dashboard"
            className="
              rounded-lg px-8 py-3 font-semibold
              bg-purple-700 text-white
              hover:bg-purple-800
            "
          >
            Get Started
          </Link>

          {/* Secondary CTA */}
          <Link
            href="#categories"
            className="
              rounded-lg px-8 py-3 font-semibold
              border border-slate-300
              hover:bg-slate-100
            "
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
