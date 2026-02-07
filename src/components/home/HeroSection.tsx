"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
                </span>
                🎓 Trusted by 50,000+ Students
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-slate-900">
                Master New Skills
                <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Anytime, Anywhere
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join the world's largest online learning platform. Access 10,000+ courses from industry experts and transform your career with cutting-edge skills.
              </p>

              {/* Feature Pills */}
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm border border-slate-200">
                  ✅ Lifetime Access
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm border border-slate-200">
                  📱 Mobile Learning
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm border border-slate-200">
                  🏆 Certificates
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/courses"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10">Start Learning Free</span>
                  <svg
                    className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </Link>

                <Link
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold text-lg border-2 border-slate-300 text-slate-900 hover:bg-slate-50 transition-all"
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
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-indigo-600">10K+</p>
                  <p className="mt-1 text-sm sm:text-base text-slate-600">Courses</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-purple-600">50K+</p>
                  <p className="mt-1 text-sm sm:text-base text-slate-600">Students</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-pink-600">4.9★</p>
                  <p className="mt-1 text-sm sm:text-base text-slate-600">Rating</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-first lg:order-last">
              {/* Main Image Container */}
              <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
                {/* Decorative Background Shapes */}
                <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 h-72 w-72 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-20 blur-3xl"></div>
                
                {/* Image */}
                <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                    alt="Students learning online"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
                </div>

                {/* Floating Card 1 - Course Info */}
                <div className="absolute top-8 -left-4 sm:left-0 bg-white rounded-2xl shadow-xl p-4 sm:p-6 max-w-[200px] sm:max-w-[240px] animate-float">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
                      UI
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">UI/UX Design</p>
                      <p className="text-xs text-slate-500">12 Lessons</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-pink-400"
                        />
                      ))}
                    </div>
                    <p className="text-xs font-semibold text-indigo-600">+2.4k enrolled</p>
                  </div>
                </div>

                {/* Floating Card 2 - Progress */}
                <div className="absolute bottom-8 -right-4 sm:right-0 bg-white rounded-2xl shadow-xl p-4 sm:p-6 max-w-[180px] sm:max-w-[220px] animate-float-delayed">
                  <p className="text-sm font-bold text-slate-900 mb-3">Learning Progress</p>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">Python</span>
                        <span className="font-semibold text-indigo-600">85%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">React</span>
                        <span className="font-semibold text-purple-600">72%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-[72%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Card 3 - Achievement */}
                <div className="absolute top-1/2 -left-6 sm:-left-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl shadow-xl p-4 animate-pulse-slow">
                  <p className="text-3xl">🏆</p>
                  <p className="text-xs font-bold text-white mt-1">Top Learner</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="0.3" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}