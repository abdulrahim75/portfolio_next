"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useResumeDownload } from "@/components/shared/resume-download-provider";

const navigationItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const programmaticScrollRef = useRef<{ id: string; top: number } | null>(null);
  const reduceMotion = useReducedMotion();
  const resumeAvailable = true;
  const startResumeDownload = useResumeDownload();

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const header = document.querySelector("header");
    const headerHeight = header?.getBoundingClientRect().height ?? 0;
    const latestEntries = new Map<string, IntersectionObserverEntry>();

    const updateActiveSection = (entries: IntersectionObserverEntry[]) => {
      if (programmaticScrollRef.current) {
        return;
      }

      entries.forEach((entry) => latestEntries.set(entry.target.id, entry));

      const firstSection = sections[0].getBoundingClientRect();
      const lastSection = sections[sections.length - 1];
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (firstSection.top >= -headerHeight || isAtBottom) {
        setActiveSection(isAtBottom ? lastSection.id : sections[0].id);
        return;
      }

      const visibleEntries = sections
        .map((section) => latestEntries.get(section.id))
        .filter((entry): entry is IntersectionObserverEntry => entry?.isIntersecting === true);
      const bestMatch = visibleEntries.sort((a, b) => {
        const aScore = a.intersectionRatio * 1000 - Math.abs(a.boundingClientRect.top - headerHeight);
        const bScore = b.intersectionRatio * 1000 - Math.abs(b.boundingClientRect.top - headerHeight);
        return bScore - aScore;
      })[0];

      if (bestMatch) {
        setActiveSection(bestMatch.target.id);
      }
    };

    const observer = new IntersectionObserver(updateActiveSection, {
      root: null,
      rootMargin: `-${headerHeight}px 0px -50% 0px`,
      threshold: [0, 0.15, 0.3, 0.5, 0.7, 0.9, 1],
    });

    sections.forEach((section) => observer.observe(section));

    const finishProgrammaticScroll = () => {
      if (!programmaticScrollRef.current) {
        return;
      }

      const { top } = programmaticScrollRef.current;
      if (Math.abs(window.scrollY - top) <= 2) {
        programmaticScrollRef.current = null;
      }
    };

    const handleScrollEnd = () => {
      programmaticScrollRef.current = null;
    };

    window.addEventListener("scroll", finishProgrammaticScroll, { passive: true });
    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", finishProgrammaticScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  function handleNavigation(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    const section = document.getElementById(id);

    setIsMenuOpen(false);

    if (section) {
      event.preventDefault();
      setActiveSection(id);
      const header = document.querySelector("header");
      const navbarHeight = header?.getBoundingClientRect().height ?? 0;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      const targetTop = Math.max(
        0,
        Math.min(section.getBoundingClientRect().top + window.scrollY - navbarHeight, maxScrollTop),
      );

      programmaticScrollRef.current = { id, top: targetTop };
      window.scrollTo({ top: targetTop, behavior: reduceMotion ? "auto" : "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    }
  }

  function handleResumeClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!resumeAvailable) {
      event.preventDefault();
      return;
    }

    startResumeDownload();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#home"
          onClick={(event) => handleNavigation(event, "home")}
          className="inline-flex min-h-11 items-center rounded-lg pr-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
          aria-label="Abdul Rahim, back to home"
        >
          <Image
            src="/abdul-rahim-logo.png"
            alt="Abdul Rahim logo"
            width={520}
            height={160}
            unoptimized
            className="h-12 w-auto shrink-0 object-contain sm:h-16"
          />
        </a>

        <nav aria-label="Primary navigation" className="hidden xl:flex xl:items-center xl:gap-1">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleNavigation(event, item.id)}
              aria-current={activeSection === item.id ? "page" : undefined}
              className="relative inline-flex min-h-11 items-center px-2.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="active-navigation-item"
                  className="absolute inset-x-2.5 bottom-1 h-px bg-zinc-950"
                  transition={{ duration: reduceMotion ? 0 : 0.25 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block">
          <motion.a
            href={resumeAvailable ? "/Abdul-Rahim-Resume.pdf" : undefined}
            download={resumeAvailable ? true : undefined}
            aria-disabled={!resumeAvailable}
            title={resumeAvailable ? "Download resume" : "Resume file not available"}
            onClick={handleResumeClick}
            whileHover={resumeAvailable && !reduceMotion ? { y: -1 } : undefined}
            whileTap={resumeAvailable && !reduceMotion ? { scale: 0.985 } : undefined}
            className={`inline-flex min-h-10 items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 ${resumeAvailable ? "bg-zinc-950 text-white hover:bg-zinc-800" : "cursor-not-allowed bg-zinc-200 text-zinc-500"}`}
          >
            Download Resume
          </motion.a>
        </div>

        <motion.button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          whileTap={reduceMotion ? undefined : { scale: 0.96 }}
          className="grid size-11 place-items-center rounded-lg text-zinc-950 transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 xl:hidden"
        >
          {isMenuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-zinc-100 bg-white xl:hidden"
          >
            <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 sm:px-10">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleNavigation(event, item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className="inline-flex min-h-12 items-center rounded-lg px-3 text-base font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  {item.label}
                </a>
              ))}
              <motion.a
                href={resumeAvailable ? "/Abdul-Rahim-Resume.pdf" : undefined}
                download={resumeAvailable ? true : undefined}
                aria-disabled={!resumeAvailable}
                title={resumeAvailable ? "Download resume" : "Resume file not available"}
                onClick={handleResumeClick}
                whileTap={resumeAvailable && !reduceMotion ? { scale: 0.985 } : undefined}
                className={`mt-2 inline-flex min-h-12 items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 ${resumeAvailable ? "bg-zinc-950 text-white hover:bg-zinc-800" : "cursor-not-allowed bg-zinc-200 text-zinc-500"}`}
              >
                Download Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
