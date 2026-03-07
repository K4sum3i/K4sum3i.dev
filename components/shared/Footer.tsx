"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export function Footer() {
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
    <section ref={sectionRef} className="relative px-6 py-10 md:px-12 lg:px-20">
      <div
        className={`flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-12 transition-all md:flex-row md:items-center ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{ transitionDelay: "400ms", transitionDuration: "700ms" }}
      >
        <div className="flex items-center gap-4 text-white/40">
          © {new Date().getFullYear()} K4sum3i. {t("footer.rights")}
        </div>

        <p className="text-white/40">{t("footer.madeBy")}</p>
      </div>
    </section>
  );
}
