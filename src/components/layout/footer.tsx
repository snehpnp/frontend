import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1c1d1f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* ===== TOP SECTION - Company Tagline ===== */}
        <div className="mb-12 border-b border-gray-700 pb-8">
          <p className="text-base">
            Top companies choose{" "}
            <span className="font-bold text-purple-400">LMS Platform</span> to
            build in-demand career skills.
          </p>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Column 1: In-demand Careers */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
              In-demand Careers
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:underline">
                  Data Scientist
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Full Stack Web Developer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Cloud Engineer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Project Manager
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Game Developer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  All Career Accelerators
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Web Development */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
              Web Development
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:underline">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  React JS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Angular
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Java
                </Link>
              </li>
            </ul>

            <h4 className="mb-4 mt-8 text-sm font-bold uppercase tracking-wide">
              Certifications by Skill
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:underline">
                  Cybersecurity Certification
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Project Management Certification
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Cloud Certification
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Data Analytics Certification
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  HR Management Certification
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  See all Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: IT Certifications & Data Science */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
              IT Certifications
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:underline">
                  Amazon AWS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  AWS Certified Cloud Practitioner
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  AZ-900: Microsoft Azure Fundamentals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  AWS Certified Solutions Architect - Associate
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Kubernetes
                </Link>
              </li>
            </ul>

            <h4 className="mb-4 mt-8 text-sm font-bold uppercase tracking-wide">
              Data Science
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:underline">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Python
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  ChatGPT
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Deep Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Leadership & Communication */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
              Leadership
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:underline">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Management Skills
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Personal Productivity
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Emotional Intelligence
                </Link>
              </li>
            </ul>

            <h4 className="mb-4 mt-8 text-sm font-bold uppercase tracking-wide">
              Communication
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:underline">
                  Communication Skills
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Presentation Skills
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Public Speaking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Writing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  PowerPoint
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Business Analytics */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
              Business Analytics & Intelligence
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:underline">
                  Microsoft Excel
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  SQL
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Microsoft Power BI
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Business Analysis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== BOTTOM SECTION ===== */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 sm:flex-row">
          <div className="flex items-center gap-6">
            <h3 className="text-xl font-bold text-purple-400">LMS</h3>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} LMS, Inc.
            </p>
          </div>

          <div className="flex gap-4 text-sm text-gray-300">
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Privacy policy
            </Link>
            <Link href="#" className="hover:underline">
              Sitemap
            </Link>
            <Link href="#" className="hover:underline">
              Accessibility statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}