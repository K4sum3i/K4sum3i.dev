"use client";

import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-6xl">
        <div
          className={`mb-8 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[rgb(25,25,25)] px-4 py-2 text-sm text-white/60">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]" />
            Available for web projects
          </span>
        </div>

        <h1
          className={`mb-6 text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-white transition-all delay-100 duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="block">Hello, I&apos;m</span>
          <span className="block">K4sum3i</span>
        </h1>

        <p
          className={`text-justify mb-12 max-w-xl text-lg leading-relaxed text-white/60 transition-all delay-200 duration-700 ease-out md:text-xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Junior Web Developer passionate about creating clear and functional
          digital experiences. Currently seeking my first professional
          opportunity to grow and refine my skills.
        </p>

        <div
          className={`flex flex-wrap items-center gap-4 transition-all delay-300 duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Link
            href="#"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-medium text-[rgb(20,20,20)] transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
          >
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-x-0.5" />
            Contactar
          </Link>

          <Link
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
          >
            <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-y-0.5 " />
            Descargar CV
          </Link>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[rgb(63,138,226)]/5 blur-[100px]" />
      </div>
    </section>
  );
}
