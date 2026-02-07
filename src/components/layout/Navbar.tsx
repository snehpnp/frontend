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
  const [showSearch, setShowSearch] = useState(false);
  const [language, setLanguage] = useState("English");

  const isLogin = pathname === "/login";
  const isRegister = pathname === "/register";

  return (
    <header className="sticky top-0 z-50 border-b bg-white text-slate-900 shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        {/* ===== TOP BAR ===== */}
        <div className="flex h-16 items-center justify-between gap-4">
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0 text-xl font-bold text-purple-700">
            LMS Coursera
          </Link>

          {/* SEARCH (Desktop & Tablet) */}
          <div className="hidden flex-1 md:flex md:max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full rounded-full border border-slate-300 py-2 pl-10 pr-4 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-2 lg:flex">
            {/* Plans & Pricing */}
            <Link
              href="/plans-pricing"
              className="whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
            >
              Plans & Pricing
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative rounded-md p-2 text-xl transition hover:bg-slate-100"
              title="Shopping Cart"
            >
              🛒
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">
                0
              </span>
            </Link>

            {/* Login */}
            <Link
              href="/login"
              className={`whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium transition ${
                isLogin
                  ? "border-purple-600 text-purple-600"
                  : "border-slate-300 hover:bg-slate-100"
              }`}
            >
              Log in
            </Link>

            {/* Register */}
            <Link
              href="/register"
              className={`whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition ${
                isRegister
                  ? "bg-purple-700 text-white"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              Sign up
            </Link>

            {/* Language */}
            <button
              onClick={() => setLangModal(true)}
              className="rounded-md border border-slate-300 p-2 text-xl transition hover:bg-slate-100"
              title="Change Language"
            >
              🌐
            </button>
          </div>

          {/* MOBILE/TABLET ICONS (Search, Cart, Menu) */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Search Icon (Mobile) */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="rounded-md p-2 text-xl transition hover:bg-slate-100 md:hidden"
              title="Search"
            >
              🔍
            </button>

            {/* Cart Icon (Mobile/Tablet) */}
            <Link
              href="/cart"
              className="relative rounded-md p-2 text-xl transition hover:bg-slate-100"
              title="Shopping Cart"
            >
              🛒
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">
                0
              </span>
            </Link>

            {/* Hamburger Menu */}
            <button
              onClick={() => setOpen(!open)}
              className="rounded-md p-2 transition hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {open ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ===== MOBILE SEARCH BAR ===== */}
        {showSearch && (
          <div className="border-t py-3 md:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full rounded-full border border-slate-300 py-2 pl-10 pr-4 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        )}

        {/* ===== MOBILE/TABLET MENU ===== */}
        {open && (
          <div className="border-t py-4 lg:hidden">
            <nav className="space-y-2">
              {/* Plans & Pricing */}
              <Link
                href="/pricing"
                className="block rounded-md px-4 py-3 text-sm font-medium transition hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                📋 Plans & Pricing
              </Link>

              {/* Divider */}
              <div className="border-t"></div>

              {/* Login */}
              <Link
                href="/login"
                className={`block rounded-md border px-4 py-3 text-center text-sm font-medium transition ${
                  isLogin
                    ? "border-purple-600 bg-purple-50 text-purple-600"
                    : "border-slate-300 hover:bg-slate-100"
                }`}
                onClick={() => setOpen(false)}
              >
                Log in
              </Link>

              {/* Register */}
              <Link
                href="/register"
                className={`block rounded-md px-4 py-3 text-center text-sm font-medium text-white transition ${
                  isRegister
                    ? "bg-purple-700"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
                onClick={() => setOpen(false)}
              >
                Sign up
              </Link>

              {/* Language Selector */}
              <button
                onClick={() => {
                  setLangModal(true);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-md border border-slate-300 px-4 py-3 text-left text-sm transition hover:bg-slate-100"
              >
                <span className="flex items-center gap-2">
                  🌐 Language
                </span>
                <span className="text-purple-600">{language}</span>
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* ===== LANGUAGE MODAL ===== */}
      {langModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setLangModal(false)}
        >
          <div
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Select Language
              </h2>
              <button
                onClick={() => setLangModal(false)}
                className="rounded-full p-1 transition hover:bg-slate-100"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="grid max-h-96 grid-cols-2 gap-3 overflow-y-auto">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.label);
                    setLangModal(false);
                  }}
                  className={`rounded-md border px-4 py-3 text-sm font-medium transition ${
                    language === lang.label
                      ? "border-purple-600 bg-purple-50 text-purple-700"
                      : "border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setLangModal(false)}
              className="mt-5 w-full rounded-md bg-slate-200 py-2 text-sm font-medium transition hover:bg-slate-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}