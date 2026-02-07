"use client";

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SocialButton from "@/src/components/auth/SocialButton";

/* ---------------- SCHEMA ---------------- */
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* ===== LEFT IMAGE ===== */}
      <div className="hidden w-1/2 items-center justify-center md:flex">
        <Image
          src="/auth/hand-drawn-vpn-illustration.png"
          alt="Login Illustration"
          width={460}
          height={460}
          className="animate-fadeIn"
        />
      </div>

      {/* ===== RIGHT CARD ===== */}
      <div className="flex w-full items-center justify-center px-4 md:w-1/2">
        <div className="w-full max-w-md rounded-2xl bg-white px-8 py-10 shadow-xl">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-slate-900">
              Welcome back 👋
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Login to continue learning
            </p>
          </div>

          {/* ===== FORM ===== */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="you@example.com"
                className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm
    text-black placeholder:text-black/60
    focus:outline-none focus:ring-2
    ${
      errors.email
        ? "border-red-500 focus:ring-red-400"
        : "border-slate-300 focus:ring-purple-500"
    }
  `}
              />

              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="••••••••"
                className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm
    text-black placeholder:text-black/60
    focus:outline-none focus:ring-2
    ${
      errors.password
        ? "border-red-500 focus:ring-red-400"
        : "border-slate-300 focus:ring-purple-500"
    }
  `}
              />

              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot */}
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-purple-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full rounded-lg bg-purple-600 py-2.5 text-sm font-semibold text-white
                hover:bg-purple-700 transition
                disabled:opacity-60 disabled:cursor-not-allowed
              "
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">OR</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Social Login */}
          <div className="flex items-center justify-center gap-4">
            <SocialButton provider="google" />
            <SocialButton provider="facebook" />
          </div>

          {/* Register */}
          <p className="mt-8 text-center text-sm text-slate-600">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-purple-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
