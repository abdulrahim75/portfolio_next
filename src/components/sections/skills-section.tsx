"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const skillCategories = [
  { number: "01", name: "Frontend", technologies: ["React.js", "Angular", "JavaScript", "HTML", "CSS"] },
  { number: "02", name: "Backend", technologies: ["Java", "Spring Boot", "Node.js", "Express.js", "Django"] },
  { number: "03", name: "Database", technologies: ["Oracle", "MongoDB", "SQL"] },
  { number: "04", name: "DevOps & Tools", technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus", "Grafana", "Git", "Bitbucket", "Maven", "Apache Tomcat", "Jira"] },
];

export function SkillsSection() {
  const reduceMotion = useReducedMotion();
  const transition = { duration: reduceMotion ? 0 : 0.56, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24 border-t border-zinc-100 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={transition} className="max-w-xl lg:sticky lg:top-32 lg:self-start">
          <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500">TECHNICAL TOOLKIT</p>
          <h2 id="skills-heading" className="mt-5 font-heading text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-zinc-950 sm:text-5xl">I work across the stack.</h2>
          <p className="mt-6 max-w-md text-base leading-8 text-zinc-600 sm:text-lg">Tools and technologies I use to build, ship, and maintain software.</p>
        </motion.div>

        <div className="border-t border-zinc-200">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.number}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.07 }}
              whileHover={reduceMotion ? undefined : { x: 4 }}
              className="group grid gap-5 border-b border-zinc-200 py-7 transition-colors hover:bg-zinc-50 sm:grid-cols-[3rem_minmax(8rem,0.7fr)_minmax(0,1.5fr)_1.5rem] sm:items-start sm:gap-5 sm:px-5"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-zinc-400">{category.number}</p>
              <h3 className="flex items-center gap-2 text-sm font-semibold tracking-[0.04em] text-zinc-950 uppercase"><span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-500" />{category.name}</h3>
              <p className="text-sm leading-7 text-zinc-500 transition-colors group-hover:text-zinc-700 sm:pt-0.5">{category.technologies.join(" · ")}</p>
              <ArrowUpRight aria-hidden="true" className="hidden size-4 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
