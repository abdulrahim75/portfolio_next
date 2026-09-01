"use client";

import { ArrowRight, Code2, Download, GitFork, Link, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/abdulrahim75", icon: GitFork },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdulrahimxp7/", icon: Link },
  { label: "LeetCode", href: "https://leetcode.com/u/klu_2200031648/", icon: Code2 },
  { label: "Email", href: "mailto:abdulrahimxp7@gmail.com", icon: Mail },
];

const engineeringFocus = [
  "Full Stack Development",
  "Enterprise Applications",
  "Backend Systems",
  "Cloud & AI",
];

const technologyStack = [
  "Java",
  "Spring Boot",
  "React",
  "Angular",
  "Python",
  "Django",
  "MongoDB",
  "Oracle",
  "Docker",
  "AI",
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const transition = {
    duration: reduceMotion ? 0 : 0.58,
    ease: [0.22, 1, 0.36, 1] as const,
  };
  const resumeAvailable = true;

  return (
    <main className="flex flex-1 flex-col px-6 py-10 sm:px-10 lg:px-16 lg:py-16">
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="mx-auto w-full max-w-7xl"
      >
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
              className="mb-6 inline-flex items-center gap-2 border border-zinc-200 bg-white px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500"
            >
              <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
              currently working
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: reduceMotion ? 0 : 0.06 }}
              className="text-sm font-medium tracking-[0.02em] text-zinc-600"
            >
              Hello, I&apos;m Abdul Rahim
            </motion.p>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: reduceMotion ? 0 : 0.12 }}
              className="mt-6 font-heading text-[clamp(3.3rem,7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-zinc-950"
            >
              <span className="block">Software Developer</span>
              <span className="mt-2 block text-zinc-500">&amp; Full Stack Engineer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: reduceMotion ? 0 : 0.22 }}
              className="mt-8 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg"
            >
              I build reliable software and full-stack applications that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: reduceMotion ? 0 : 0.3 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                href="#projects"
                onClick={(event) => {
                  event.preventDefault();
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    const header = document.querySelector("header");
                    const navbarHeight = header?.getBoundingClientRect().height ?? 0;
                    const targetTop = Math.max(
                      0,
                      projectsSection.getBoundingClientRect().top + window.scrollY - navbarHeight,
                    );
                    window.history.replaceState(null, "", "#projects");
                    window.scrollTo({ top: targetTop, behavior: reduceMotion ? "auto" : "smooth" });
                  }
                }}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                View My Work
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
              </motion.a>
              <motion.a
                href="/Abdul-Rahim-Resume.pdf"
                download="Abdul-Rahim-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Download Abdul Rahim resume"
                title="Download resume"
                whileHover={resumeAvailable && !reduceMotion ? { y: -2 } : undefined}
                whileTap={resumeAvailable && !reduceMotion ? { scale: 0.985 } : undefined}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                <Download aria-hidden="true" className="size-4" strokeWidth={2} />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.nav
              aria-label="Social links"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: reduceMotion ? 0 : 0.38 }}
              className="mt-9 flex flex-wrap gap-x-5 gap-y-2"
            >
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
                  >
                    <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
                    {link.label}
                  </motion.a>
                );
              })}
            </motion.nav>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.16 }}
            className="w-full max-w-xl lg:pt-8"
          >
            <div className="rounded-[1.6rem] border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">Current</p>
                <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-600">
                  Active
                </span>
              </div>

              <div className="mt-5">
                <p className="text-2xl font-semibold tracking-[-0.05em] text-zinc-950">Software Developer</p>
                <p className="mt-2 text-sm text-zinc-600">BNP Paribas</p>

                <div className="mt-6 grid gap-4 border-t border-zinc-200 pt-4 text-sm text-zinc-600 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Period</p>
                    <p className="mt-2 font-medium text-zinc-900">Jan 2026 — Present</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Location</p>
                    <p className="mt-2 font-medium text-zinc-900">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: reduceMotion ? 0 : 0.42 }}
              className="mt-5 rounded-[1.5rem] border border-zinc-200 bg-white p-5"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">Engineering Focus</p>
              <ol className="mt-4 divide-y divide-zinc-200">
                {engineeringFocus.map((item, index) => (
                  <li key={item} className="flex items-center gap-3 py-3">
                    <span className="w-8 text-[10px] font-medium tracking-[0.18em] text-zinc-400">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-sm font-medium text-zinc-900">{item}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.48 }}
          className="mt-10 border-t border-zinc-200 pt-6"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500">Technology</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-600">
              {technologyStack.map((item, index) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="text-zinc-500">{item}</span>
                  {index < technologyStack.length - 1 ? <span aria-hidden="true" className="text-zinc-300">·</span> : null}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
