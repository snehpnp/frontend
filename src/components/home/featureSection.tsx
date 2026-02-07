import Image from "next/image";
import Link from "next/link";

export default function FeatureSection() {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 items-center md:grid-cols-2">
        
        {/* ===== LEFT CONTENT ===== */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Reimagine your workflow with AI
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Reduce manual work, improve accuracy, and scale faster using
            OCR-powered automation and smart data extraction.
          </p>

          <ul className="mt-6 space-y-4">
            {[
              "Upload image or PDF documents",
              "Auto extract name, phone, address & reference",
              "Edit extracted data before saving",
              "Secure cloud storage with full control",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✔</span>
                <span className="text-slate-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/dashboard"
            className="
              inline-block mt-8 rounded-lg px-6 py-3 font-medium
              bg-indigo-600 text-white hover:bg-indigo-700
            "
          >
            Explore Dashboard
          </Link>
        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="rounded-2xl p-6 bg-slate-200">
          <Image
            src="/feature.png"
            alt="Feature Preview"
            width={520}
            height={360}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
