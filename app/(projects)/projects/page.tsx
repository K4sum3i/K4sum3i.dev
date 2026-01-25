"use client";
import { Footer } from "@/components/shared";
import { MagicCard } from "@/components/ui/magic-card";
import { projects } from "@/data/data";
import { ArrowLeft, ArrowRight, FolderCode } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

const VISIBLE_TAGS = 3;

export default function page() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? projects.filter((p) => p.tags.includes(activeFilter))
    : projects;

  const visibleTags = allTags.slice(0, VISIBLE_TAGS);
  const extraTags = allTags.slice(VISIBLE_TAGS);

  return (
    <main className="min-h-screen bg-[rgb(20,20,20)]">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[rgb(20,20,20)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
          <span className="text-sm text-white/40">
            {filteredProjects.length} proyecto
            {filteredProjects.length !== 1 && "s"}
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">
        <div className="mb-16">
          <h1 className="mb-6 text-[clamp(2.5rem,6vw,4rem)] font-bold leading-tight text-white">
            All Projects
          </h1>
          <p className="max-w-xl text-lg text-white/60">
            A collection of personal projects where I have explored various web
            development technologies and concepts.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveFilter(null)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeFilter === null
                ? "bg-white/5 text-white"
                : "text-white/60 hover:bg-white/5 hover:text-white"
            }`}
          >
            All
          </button>

          {visibleTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag === activeFilter ? null : tag)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === tag
                  ? "bg-white/5 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}

          {extraTags.length > 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="ml-auto rounded-lg border-white/10 bg-transparent text-sm text-white/60 transition-all duration-300 hover:bg-white/5 hover:text-white">
                  More filters
                </Button>
              </DialogTrigger>
              <DialogContent className="border-white/10 bg-[rgb(20,20,20)]">
                <DialogHeader>
                  <DialogTitle className="text-white">More filters</DialogTitle>
                </DialogHeader>

                <div className="mt-4 flex flex-wrap gap-2">
                  {extraTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() =>
                        setActiveFilter(tag === activeFilter ? null : tag)
                      }
                      className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        activeFilter === tag
                          ? "bg-white/5 text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div className="border border-text-white/5"></div>

                <DialogFooter className="mt-6 flex justify-end gap-2">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      className="bg-white text-black hover:bg-white/90"
                    >
                      Aceptar
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <MagicCard className="group flex h-full flex-col justify-between rounded-lg bg-[rgb(25,25,25)] p-8 transition-all duration-300 hover:border-white/10">
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="mb-3 text-2xl font-bold text-white">
                        <FolderCode className="mr-2 mb-1 inline-block text-white/15 transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-x-1 group-hover:text-white/80" />
                        {project.title}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-white/15 transition-all duration-300 group-hover:text-white/80" />
                    </div>
                    <div className="relative mb-3 aspect-video overflow-hidden rounded-md border border-white/5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={project.images?.thumbnail || "/itinerum.webp"}
                          alt={project.title}
                          fill
                          className="object-fit"
                          sizes="(min-width: 768px) 800px, 100vw"
                        />
                      </div>
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
        <Footer />
      </div>
    </main>
  );
}
