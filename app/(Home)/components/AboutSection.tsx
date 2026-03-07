"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { skills, education } from "@/data/data";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

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
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-white">
            {t("about.titleLine1")}
            <br />
            <span className="text-[rgb(198,195,242)]">
              {t("about.titleLine2")}
            </span>
          </h2>
        </div>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div
            className={`transition-all delay-200 duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="space-y-6 text-lg leading-relaxed text-white/70">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
            </div>

            <div className="mt-12 flex gap-12 border-t border-white/10 pt-12">
              <div>
                <span className="block text-4xl font-bold text-white">3+</span>
                <span className="text-sm text-white/50">
                  {t("about.statsProjects")}
                </span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white">
                  500+
                </span>
                <span className="text-sm text-white/50">
                  {t("about.statsHours")}
                </span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white">
                  100%
                </span>
                <span className="text-sm text-white/50">
                  {t("about.statsCommitment")}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div
              className={`transition-all delay-300 duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h3 className="mb-6 text-sm tracking-widest text-white/40">
                {t("about.techStack")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/5 bg-[rgb(25,25,25)] px-4 py-2 text-sm text-white/80 transition-all duration-300 cursor-default hover:border-white/10 hover:text-white"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`transition-all delay-400 duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h3 className="mb-6 text-sm tracking-widest text-white/40">
                {t("about.education")}
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.title}
                    className="group rounded-lg border border-white/5 bg-[rgb(25,25,25)] p-5 transition-all duration-300 hover:border-white/10"
                  >
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-white">{edu.title}</h4>
                        <p className="text-sm text-[rgb(198,195,242)]">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="shrink-0 text-xs text-white/40">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-sm text-white/50 text-justify">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
