"use client";

import { MagicCard } from "@/components/ui/magic-card";
import { projects } from "@/data/data";
import { ArrowRight, ArrowUpRight, FolderCode } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-6 py-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-20 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-white">
              Selected
              <br />
              <span className="text-white/50">Projects</span>
            </h2>
            <Link
              href="#"
              className="inline-flex items-center gap-2 py-2.5 px-5 rounded-lg text-sm border border-white/5 bg-[rgb(25,25,25)] text-white/80 transition duration-300 hover:border-white/10 hover:text-white"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <MagicCard className="group flex flex-col justify-between h-full rounded-lg bg-[rgb(25,25,25)] p-8 transition-all duration-300 hover:border-white/10">
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="mb-3 text-2xl font-bold text-white">
                        <FolderCode className="inline-block mr-2 mb-1 text-white/15 transition-all duration-300 group-hover:text-white/80 group-hover:translate-x-1" />
                        {project.title}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-white/15 group-hover:text-white/80 transition-all duration-300" />
                    </div>
                    <p className="max-w-md text-white/50">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/5 px-3 py-1 text-xs text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MagicCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
