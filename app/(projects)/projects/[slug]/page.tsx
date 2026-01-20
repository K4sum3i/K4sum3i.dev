import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/data";
import Image from "next/image";
import { features } from "process";
import { Footer } from "@/components/shared";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return <div>none</div>;
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[rgb(20,20,20)]">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[rgb(20,20,20)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>

          <div className="flex items-center gap-4">
            {project.links.github && (
              <Link
                href={project.links.github}
                className="flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">Code</span>
              </Link>
            )}
            {project.links.live && (
              <Link
                href={project.links.live}
                className="flex items-center gap-2 rounded-lg border border-white/5 bg-[rgb(25,25,25)] px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/10 hover:text-white"
              >
                <span>Preview</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            )}
          </div>
        </div>
      </header>
      <section className="border-b border-white/5 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-white/40">
            <span>{project.year}</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>{project.role}</span>
          </div>

          <h1 className="mb-6 text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.1] text-white">
            {project.title}
          </h1>

          <p className="mb-10 max-w-3xl text-xl leading-relaxed text-white/60">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/5 bg-[rgb(25,25,25)] px-4 py-2 text-sm text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/5">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={project.images.thumbnail || "/itinerum.webp"}
                alt={project.title}
                fill
                className="object-fit"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-sm tracking-widest text-white/40">
              FEATURES
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 rounded-lg border border-white/5 bg-[rgb(25,25,25)] p-4 transition-colors hover:border-white/10"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[rgb(198,195,242)]/10 text-xs font-medium text-[rgb(198,195,242)]">
                    {index + 1}
                  </span>
                  <span className="text-white/70">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-8 text-sm tracking-widest text-white/40">
              TECH STACK
            </h2>
            <div className="space-y-8">
              {project.techStack.map((stack) => (
                <div key={stack.category}>
                  <h3 className="mb-4 font-medium text-white">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/5 bg-[rgb(25,25,25)] px-4 py-2 text-sm text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {project.images.gallery.length > 0 && (
        <section className="border-t border-white/5 px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-sm tracking-widest text-white/40">
              GALLERY
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {project.images.gallery.map((_, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-xl border border-white/5 ${
                    index === 0
                      ? "md:col-span-2 md:aspect-[2/1]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={project.images.thumbnail || "/itinerum.webp"}
                      alt={project.title}
                      fill
                      className="object-fit"
                      sizes={
                        index === 0
                          ? "(min-width: 768px) 800px, 100vw"
                          : "(min-width: 768px) 400px, 100vw"
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="border-t border-white/5">
        <div className="grid md:grid-cols-2">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group border-b border-white/5 p-8 transition-colors hover:bg-[rgb(25,25,25)] md:border-b-0 md:border-r md:p-12"
            >
              <span className="mb-2 block text-sm text-white/40">
                <div className="inline-flex">
                  <ArrowLeft className="mt-1 mr-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                  Previous Project
                </div>
              </span>
              <span className="text-xl font-semibold text-white md:text-2xl">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="hidden border-r border-white/5 md:block" />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group p-8 text-right transition-colors hover:bg-[rgb(25,25,25)] md:p-12"
            >
              <span className="mb-2 block text-sm text-white/40">
                <div className="inline-flex">
                  Next Project
                  <ArrowRight className="mt-1 ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </span>
              <span className="text-xl font-semibold text-white md:text-2xl">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div className="hidden border-r border-white/5 md:block" />
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
