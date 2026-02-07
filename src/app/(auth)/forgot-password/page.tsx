"use client";

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* ---------------- SCHEMA ---------------- */
const forgotSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotForm = z.infer<typeof forgotSchema>;

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ForgotForm>({
    resolver: zodResolver(forgotSchema),
  });

  const onSubmit = async (data: ForgotForm) => {
    console.log("Forgot Password Email:", data.email);
    // 🔐 API call later (send reset link)
  };

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* ===== LEFT IMAGE ===== */}
      <div className="hidden w-1/2 items-center justify-center  md:flex">
        <Image
          src="/auth/forgot-password.png"
          alt="Forgot Password Illustration"
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
              Forgot your password?
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Enter your email and we’ll send you a reset link
            </p>
          </div>

          {/* SUCCESS MESSAGE */}
          {isSubmitSuccessful ? (
            <div className="rounded-lg bg-green-50 p-4 text-sm text-green-700">
              ✅ If an account exists for this email, a password reset
              link has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-medium text-black">
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

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full rounded-lg bg-purple-600 py-2.5 text-sm font-semibold text-white
                  hover:bg-purple-700 transition
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {isSubmitting ? "Sending link..." : "Send reset link"}
              </button>
            </form>
          )}

          {/* Back to Login */}
          <p className="mt-8 text-center text-sm text-slate-600">
            Remembered your password?{" "}
            <Link
              href="/login"
              className="font-medium text-purple-600 hover:underline"
            >
              Back to login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
