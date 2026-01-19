"use client"
import { projects } from "@/data/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export default function page() {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const filteredProjects = activeFilter ? projects.filter((p) => p.tags.includes(activeFilter)) : projects;

    return <main className="min-h-screen bg-[rgb(20,20,20)]">
        <header className="sticky top-0 z-40 border-b border-white/5 bg-[rgb(20,20,20)]/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
                <Link
                    href="/"
                    className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Volver al inicio
                </Link>
                <span className="text-sm text-white/40">
                    {filteredProjects.length} proyecto{filteredProjects.length !== 1 && "s"}
                </span>
            </div>
        </header>
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">
            <div className="mb-16">
                <h1 className="mb-6 text-[clamp(2.5rem,6vw,4rem)] font-bold leading-tight text-white">
                    All Projects
                </h1>
                <p className="max-w-xl text-lg text-white/60">
                    A collection of personal projects where I have explored various web development technologies and concepts.
                </p>
            </div>

            <div className="mb-12 flex flex-wrap gap-2">
                <button onClick={() => setActiveFilter(null)} className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${activeFilter === null
                    ? "bg-white/5 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                >All</button>
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveFilter(tag === activeFilter ? null : tag)}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${activeFilter === tag
                            ? "bg-white/5 text-white"
                            : "text-white/60 hover:bg-white/5 hover:text-white"
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    </main>;
}
