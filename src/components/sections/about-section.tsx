"use client";

import { motion, useReducedMotion } from "motion/react";

const informationCards = [
  {
    label: "Location",
    primary: "Bangalore, India",
  },
  {
    label: "Education",
    primary: "B.Tech — Computer Science & Engineering",
    secondary: "KL University · 2022–2026",
  },
  {
    label: "Academic",
    primary: "CGPA 9.67",
  },
];

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  const transition = {
    duration: reduceMotion ? 0 : 0.58,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 border-t border-zinc-100 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={transition}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500">ABOUT ME</p>
          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
            className="mt-5 max-w-xl font-heading text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-zinc-950 sm:text-5xl"
          >
            I build software that solves real problems.
          </motion.h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-zinc-600 sm:text-lg">
            <p>
              I&apos;m a Full Stack Developer with experience building web applications across enterprise systems and modern full-stack environments. I enjoy solving complex problems, improving application performance, and building reliable software that creates real-world value.
            </p>
            <p>
              Currently working as a Software Developer at BNP Paribas, while continuing to grow as an engineer across frontend, backend, databases, and cloud-native technologies.
            </p>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...transition, delay: reduceMotion ? 0 : 0.14 }}
          aria-label="Professional and academic information"
          className="border-l border-zinc-200 pl-6 sm:pl-8 lg:mt-1"
        >
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -2 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="rounded-2xl bg-zinc-950 p-6 text-white shadow-[0_14px_30px_-24px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-400" />
              <p className="text-xs font-medium tracking-[0.1em] text-zinc-400">CURRENT ROLE</p>
            </div>
            <p className="mt-5 text-lg font-semibold tracking-[-0.025em]">Software Developer</p>
            <p className="mt-1 text-sm text-zinc-400">BNP Paribas</p>
          </motion.div>

          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {informationCards.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...transition, delay: reduceMotion ? 0 : 0.2 + index * 0.07 }}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                className={`rounded-2xl border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-[0_12px_26px_-24px_rgba(0,0,0,0.45)] ${index === 2 ? "sm:col-span-2" : ""}`}
              >
                <dt className="text-xs font-semibold tracking-[0.12em] text-zinc-500 uppercase">{item.label}</dt>
                <dd className="mt-3 text-sm font-medium leading-6 text-zinc-950">{item.primary}</dd>
                {item.secondary && <dd className="mt-1 text-sm leading-6 text-zinc-500">{item.secondary}</dd>}
              </motion.div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </section>
  );
}
