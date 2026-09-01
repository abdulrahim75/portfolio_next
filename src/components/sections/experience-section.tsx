"use client";

import { motion, useReducedMotion } from "motion/react";

const responsibilities = [
  "Migrate legacy projects/applications toward modern architecture using Angular and Spring Boot.",
  "Develop and maintain application functionality using Angular and Spring Boot.",
  "Work with Jenkins for build and deployment workflows.",
  "Perform deployment of WAR applications to application servers.",
  "Maintain and enhance enterprise banking applications using Java, Apache Struts and Oracle Database.",
  "Resolve production bugs and implement new features based on Jira stories and business requirements.",
  "Develop UI screens, backend logic, reports, and optimize SQL queries, procedures, functions and triggers.",
  "Collaborate in Agile teams using Git, Bitbucket, Maven and Apache Tomcat for development and deployment.",
];

const technologies = ["Angular", "Spring Boot", "Java", "Apache Struts", "Oracle", "Jenkins", "Linux", "Apache Tomcat", "Maven", "Git", "Bitbucket", "Jira", "Agile"];

export function ExperienceSection() {
  const reduceMotion = useReducedMotion();
  const transition = {
    duration: reduceMotion ? 0 : 0.58,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-24 border-t border-zinc-100 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={transition}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500">EXPERIENCE</p>
          <h2 id="experience-heading" className="mt-5 font-heading text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-zinc-950 sm:text-5xl">
            Building software in the real world.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
            Currently working as a Software Developer at BNP Paribas, building and maintaining enterprise banking applications.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10 lg:mt-16 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
            className="relative border-l border-zinc-200 pl-6 md:pl-8"
          >
            <span aria-hidden="true" className="absolute -left-1.5 top-1 size-3 rounded-full border-2 border-white bg-emerald-500" />
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500">01</p>
            <p className="mt-5 text-base font-semibold text-zinc-950">BNP Paribas</p>
            <p className="mt-1 text-sm leading-6 text-zinc-600">Software Developer</p>
            <p className="mt-4 text-sm leading-6 text-zinc-500">Jan 2026 — Present</p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.15 }}
            whileHover={reduceMotion ? undefined : { y: -2 }}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_18px_38px_-32px_rgba(0,0,0,0.32)] transition-shadow hover:shadow-[0_22px_44px_-32px_rgba(0,0,0,0.38)] sm:p-8 lg:p-10"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-3xl">Software Developer</h3>
                <p className="mt-3 text-sm text-zinc-600 sm:text-base">BNP Paribas · Bangalore, India</p>
                <p className="mt-1 text-sm text-zinc-500">Jan 2026 — Present</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold tracking-[0.1em] text-emerald-700">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-500" />
                CURRENT
              </span>
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/80 px-4 py-3 sm:px-5">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-emerald-700">MODERNIZATION</p>
              <p className="mt-2 text-sm text-zinc-700 sm:text-base">
                Legacy → <span className="font-semibold text-zinc-900">Angular + Spring Boot</span>
              </p>
            </div>

            <div className="mt-10 border-t border-zinc-100 pt-8">
              <h4 className="text-xs font-semibold tracking-[0.14em] text-zinc-500">RESPONSIBILITIES</h4>
              <ul className="mt-5 space-y-4">
                {responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3 text-sm leading-7 text-zinc-600 sm:text-base">
                    <span aria-hidden="true" className="mt-3 size-1 shrink-0 rounded-full bg-zinc-400" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 border-t border-zinc-100 pt-8">
              <h4 className="text-xs font-semibold tracking-[0.14em] text-zinc-500">TECHNOLOGIES</h4>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {technologies.map((technology, index) => (
                  <motion.span
                    key={technology}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ ...transition, delay: reduceMotion ? 0 : 0.26 + index * 0.035 }}
                    className="rounded-lg bg-zinc-100 px-3 py-2 text-xs font-medium text-zinc-700"
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
