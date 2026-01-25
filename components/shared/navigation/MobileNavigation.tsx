"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Pencil, Diamond, Mail, Github, Linkedin } from "lucide-react";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const startY = useRef<number | null>(null);

  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: Diamond },
    { name: "Post", href: "/post", icon: Pencil, disabled: true },
  ];

  const socials = [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/k4sum3i/",
      icon: Linkedin,
    },
    { name: "GitHub", href: "https://github.com/k4sum3i", icon: Github },
  ];

  const currentNav = navItems.find(
    (i) =>
      pathname === i.href || (pathname && pathname.startsWith(i.href + "/")),
  );
  const currentPage = currentNav?.name || "Menu";

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startY.current !== null) {
      const delta = e.touches[0].clientY - startY.current;
      if (delta > 0) {
        setDragY(delta);
      }
    }
  };

  const handleTouchEnd = () => {
    if (dragY > 100) {
      setOpen(false);
    }
    setDragY(0);
    startY.current = null;
  };

  return (
    <div className="md:hidden">
      <div className="z-30 fixed bottom-[20px] left-1/2 h-[56px] -translate-x-1/2 rounded-3xl bg-[#0f0f0f] backdrop-blur-lg md:bottom-[56px]">
        <div className="fixed bottom-[20px] left-1/2 -translate-x-1/2 h-[56px] rounded-3xl border border-[#232323] bg-[#0f0f0f] backdrop-blur-lg md:bottom-[56px] flex items-center justify-center px-2">
          <button
            onClick={() => setOpen(true)}
            className="relative h-10 w-[calc(100vw-100px)] overflow-hidden rounded-[19px] border border-[#232323] bg-[#191919] text-sm font-medium outline-none md:hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center w-full text-sm text-white/90">
              <span>{currentPage}</span>
            </div>
          </button>
        </div>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        role="dialog"
        aria-hidden={!open}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateY(${open ? dragY : windowHeight || 1000}px)`,
        }}
        className={`fixed inset-x-0 bottom-0 z-50 w-full max-h-[90%] rounded-t-2xl border border-[#232323] bg-[#0f0f0f] p-4 space-y-4 
          transition-transform duration-300 ease-out
          ${open ? "translate-y-0" : "translate-y-full"}
          overflow-y-auto`}
      >
        <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-white/30" />

        <div className="rounded-xl border border-[#2a2a2a] bg-[#121212] p-1.5 text-sm text-white/70 relative">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (pathname && pathname.startsWith(item.href + "/"));
            if (item.disabled) {
              return (
                <div
                  key={item.name}
                  className="flex h-12 items-center justify-between pl-6 pr-3 rounded-lg opacity-50 cursor-not-allowed"
                >
                  <span className="flex items-center gap-4">
                    <item.icon size={17} />
                    <s className="font-medium">{item.name}</s>
                  </span>
                  <div className="mr-[11px] flex h-[calc(100%-22px)] items-center rounded-[7.5px] px-[13px] text-xs border bg-[#171717] border-[#2a2a2a]">
                    ~/post
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex h-12 items-center justify-between pl-6 pr-3 rounded-lg ${
                  isActive
                    ? "text-white bg-[#181818] border border-[#2a2a2a]"
                    : "hover:bg-[#151515]"
                }`}
              >
                <span className="flex items-center gap-4">
                  <item.icon size={17} />
                  <span className="font-medium">{item.name}</span>
                </span>
                <div
                  className={`mr-[11px] flex h-[calc(100%-22px)] items-center rounded-[7.5px] px-[13px] text-xs border
                    ${
                      isActive
                        ? "bg-[#1a1a1a] border-[#333]"
                        : "bg-[#141414] border-[#2a2a2a]"
                    }`}
                >
                  ~/{item.name.toLowerCase()}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {socials.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              rel="noreferrer"
              className="flex items-center justify-center h-12 rounded-xl border border-[#2a2a2a] bg-[#171717] hover:bg-[#1c1c1c] transition"
            >
              <s.icon size={20} className="opacity-70 text-white/30" />
            </Link>
          ))}
        </div>

        <div className="mx-auto h-px w-full bg-white/20" />

        <Link
          href="mailto:manugg24@proton.me"
          className="flex h-12 w-full items-center justify-between rounded-xl border border-[#2a2a2a] bg-[#171717] px-4 hover:bg-[#1c1c1c] transition text-white"
        >
          <span className="text-sm font-medium">manugg24@proton.me</span>
          <Mail size={18} className="opacity-70" />
        </Link>
      </div>
    </div>
  );
}
