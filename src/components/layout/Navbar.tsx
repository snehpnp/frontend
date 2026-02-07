"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "fr", label: "French" },
  { code: "es", label: "Spanish" },
  { code: "de", label: "German" },
  { code: "ar", label: "Arabic" },
  { code: "zh", label: "Chinese" },
  { code: "ja", label: "Japanese" },
  { code: "ru", label: "Russian" },
  { code: "pt", label: "Portuguese" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [langModal, setLangModal] = useState(false);
  const [language, setLanguage] = useState("English");

  const isLogin = pathname === "/login";
  const isRegister = pathname === "/register";

  return (
    <header className="sticky top-0 z-50 border-b bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4">

        {/* ===== TOP BAR ===== */}
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="text-xl font-bold text-purple-700">
            LMS Coursera
          </Link>

          {/* SEARCH (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center px-6">
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full max-w-xl rounded-full border border-slate-300 px-5 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-3">

            {/* Login */}
            <Link
              href="/login"
              className={`rounded-md px-4 py-2 text-sm font-medium border transition
                ${
                  isLogin
                    ? "border-purple-600 text-purple-600"
                    : "border-slate-300 hover:bg-slate-100"
                }
              `}
            >
              Log in
            </Link>

            {/* Register */}
            <Link
              href="/register"
              className={`rounded-md px-4 py-2 text-sm font-medium transition
                ${
                  isRegister
                    ? "bg-purple-700 text-white"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }
              `}
            >
              Sign up
            </Link>

            {/* Language */}
            <button
              onClick={() => setLangModal(true)}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm
                         hover:bg-slate-100"
            >
              🌐 {language}
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-md p-2 hover:bg-slate-100"
          >
            ☰
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {open && (
          <div className="md:hidden space-y-3 border-t py-4">

            <Link
              href="/login"
              className={`block rounded-md border px-4 py-2 text-center
                ${
                  isLogin
                    ? "border-purple-600 text-purple-600"
                    : "border-slate-300"
                }
              `}
              onClick={() => setOpen(false)}
            >
              Log in
            </Link>

            <Link
              href="/register"
              className={`block rounded-md px-4 py-2 text-center text-white
                ${
                  isRegister
                    ? "bg-purple-700"
                    : "bg-purple-600 hover:bg-purple-700"
                }
              `}
              onClick={() => setOpen(false)}
            >
              Sign up
            </Link>

            <button
              onClick={() => {
                setLangModal(true);
                setOpen(false);
              }}
              className="w-full rounded-md border px-4 py-2 text-left hover:bg-slate-100"
            >
              🌐 Language: {language}
            </button>
          </div>
        )}
      </div>

      {/* ===== LANGUAGE MODAL ===== */}
      {langModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-semibold">
              Select Language
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.label);
                    setLangModal(false);
                  }}
                  className={`rounded-md border px-3 py-2 text-sm transition
                    ${
                      language === lang.label
                        ? "border-purple-600 bg-purple-50 text-purple-700"
                        : "border-slate-300 hover:bg-slate-100"
                    }
                  `}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setLangModal(false)}
              className="mt-5 w-full rounded-md bg-slate-200 py-2 text-sm hover:bg-slate-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
