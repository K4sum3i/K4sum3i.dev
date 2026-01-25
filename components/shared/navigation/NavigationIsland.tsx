"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState, useMemo } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Post", href: "/post", disabled: true },
];

function FloatingIsland({
  activeIndex,
  hoveredIndex,
  links,
}: {
  activeIndex: number;
  hoveredIndex: number | null;
  links: (HTMLElement | null)[];
}) {
  const indicatorIndex =
    hoveredIndex !== null &&
    hoveredIndex >= 0 &&
    !navItems[hoveredIndex]?.disabled
      ? hoveredIndex
      : activeIndex;

  if (indicatorIndex < 0 || !links[indicatorIndex]) return null;

  const targetElement = links[indicatorIndex]!;
  const { offsetLeft, offsetWidth } = targetElement;

  return (
    <div
      className="absolute top-[4px] bottom-[4px] rounded-[15px] border border-[#232323] bg-[#191919] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        left: offsetLeft + 1,
        width: offsetWidth - 2,
        willChange: "left, width",
      }}
    />
  );
}

function Loader() {
  return (
    <div className="animate-[spin_0.7s_linear_infinite] rounded-full h-5 w-5 border-2 border-white/30 border-[#232323]" />
  );
}

export function NavigationIsland() {
  const pathname = usePathname();
  const linkRefs = useRef<(HTMLElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeIndex = useMemo(
    () =>
      navItems.findIndex(
        (item) =>
          pathname === item.href ||
          (pathname.startsWith(item.href) && item.href !== "/"),
      ),
    [pathname],
  );

  const socials = useMemo(
    () => [
      {
        Icon: Linkedin,
        name: "Linkedin",
        href: "https://www.linkedin.com/in/k4sum3i/",
      },
      { Icon: Github, name: "GitHub", href: "https://github.com/K4sum3i" },
    ],
    [],
  );

  // States
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showLoader, setShowLoader] = useState(false);
  const [tooltip, setTooltip] = useState({
    href: "",
    visible: false,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const isFirstHomeVisit =
      pathname === "/" &&
      typeof window !== "undefined" &&
      !sessionStorage.getItem("home-initial-loader-shown");

    if (isFirstHomeVisit) {
      setShowLoader(true);
      sessionStorage.setItem("home-initial-loader-shown", "true");
      setTimeout(() => setShowLoader(false), 1500);
    } else {
      setShowLoader(true);
      setTimeout(() => setShowLoader(false), 400);
    }
  }, [pathname]);

  useEffect(() => {
    if (activeIndex >= 0) setHoveredIndex(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (
    showLoader &&
    pathname === "/" &&
    typeof window !== "undefined" &&
    sessionStorage.getItem("home-initial-loader-shown") === null
  ) {
    return (
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#232323] bg-[#0f0f0f]">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <div className="flex items-center gap-2 rounded-[22px] border border-[#232323] bg-[#0f0f0f] px-1 py-1">
          <div className="relative flex overflow-hidden rounded-[19px] border border-[#232323] bg-[#0f0f0f] px-1 py-[2px]">
            <FloatingIsland
              activeIndex={activeIndex}
              hoveredIndex={hoveredIndex}
              links={linkRefs.current}
            />
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;
              const isDisabled = item.disabled;

              if (isDisabled) {
                return (
                  <span
                    key={item.name}
                    ref={(el) => {
                      linkRefs.current[idx] = el;
                    }}
                    className="relative z-10 flex items-center justify-center px-5 h-[40px] text-[15px] text-white/30 line-through cursor-not-allowed select-none"
                  >
                    {item.name}
                  </span>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => {
                    linkRefs.current[idx] = el;
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative z-10 flex items-center justify-center px-5 h-[40px] text-[15px] transition-colors ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div
            className="relative flex items-center gap-2"
            style={{ zIndex: 60, pointerEvents: "auto" }}
          >
            {socials.map(({ Icon, href, name }) => (
              <Link
                key={name}
                href={href}
                className="group relative flex items-center justify-center w-[44px] h-[44px] rounded-[15px] border border-[#232323] bg-[#191919] hover:bg-[#1e1e1e] hover:scale-[1.06] transition-all duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-auto z-50 block"
                rel="noreferrer"
              >
                <Icon size={20} className="pointer-events-none text-white/30" />
              </Link>
            ))}

            <div className="w-[1px] h-[32px] bg-white/20 mx-2" />

            <Link
              href="mailto:manugg24@proton.me"
              className="group relative flex items-center justify-center w-[44px] h-[44px] rounded-[15px] border border-[#232323] bg-[#191919] hover:bg-[#1e1e1e] hover:scale-[1.06] transition-all duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-auto z-50 block"
            >
              <Mail size={20} className="pointer-events-none text-white/30" />
            </Link>
          </div>

          <div
            className="flex items-center justify-center h-[50px] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              width: showLoader ? 44 : 0,
              marginLeft: showLoader ? 1 : 0,
            }}
          >
            {showLoader && <Loader />}
          </div>
        </div>
      </div>

      {tooltip.visible && (
        <div
          className="fixed z-[100] bg-[#0f0f0f]/95 backdrop-blur-sm border border-[#232323]/50 px-3 py-1.5 rounded-lg text-xs text-white/90 shadow-2xl pointer-events-none whitespace-nowrap max-w-[280px] truncate"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.href}
        </div>
      )}
    </>
  );
}
