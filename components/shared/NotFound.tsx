"use client";

import Link from "next/link";

export function NotFoundPage() {
  return (
    <div className="flex items-center justify-center w-full min-h-dvh bg-[rgb(20,20,20)] px-6 sm:px-10 py-12 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-[1000px] items-center w-full">
        <div className="flex flex-col items-start text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
            We can't find that page
          </h1>
          <p className="text-base text-white/50 leading-relaxed">
            The page you are looking for might have been removed, renamed, or is
            temporarily unavailable. Check the URL or return home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white text-[rgb(20,20,20)] font-medium text-sm transition hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
            >
              Go Home
            </Link>
            <Link
              href="mailto:manugg24@proton.me"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-white/10 text-white/70 font-medium text-sm transition duration-300 hover:text-white hover:border-white/20"
            >
              Contact Support
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center mt-12 md:mt-0">
          <div className="text-[160px] sm:text-[220px] md:text-[280px] font-extrabold leading-none tracking-[-0.08em] bg-gradient-to-br from-[#333] to-[#111] bg-clip-text text-transparent select-none">
            404
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none">
            <div className="absolute top-[20%] right-[20%] w-5 h-5 bg-primary rounded-full blur-[20px] opacity-40"></div>
            <div className="absolute bottom-[10%] left-[10%] w-[100px] h-[100px] bg-white rounded-full blur-[80px] opacity-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
