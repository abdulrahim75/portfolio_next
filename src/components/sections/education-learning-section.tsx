"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const educationEntries = [
  {
    period: "Aug 2022 — 2026",
    institution: "KL University",
    degree: "Bachelor of Technology — BTech, Computer Science Engineering",
  },
  {
    period: "2020 — 2022",
    institution: "Narayana Educational Institutions",
    degree: "Intermediate — MPC",
  },
  {
    period: "2020",
    institution: "FIITJEE",
    degree: "Class X",
  },
];

const certifications = [
  {
    number: "01",
    name: "Redis Associate Cloud Operator",
    issuer: "Redis",
    issued: "August 2026",
    validity: "Valid through August 2028",
    url: "https://credentials.redis.io/9cae7bc7-e94b-4435-b09b-8f5ac9019c8f",
  },
  {
    number: "02",
    name: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    issued: "August 2026",
    validity: null,
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=2E6AD485CD2554043269BD24841859630833E1A990B1A7458CA9BB54309A9072",
  },
  {
    number: "03",
    name: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    issued: "November 2024",
    validity: null,
    url: null,
    unavailable: true,
  },
  {
    number: "04",
    name: "Graph Developer - Associate",
    issuer: "Apollo GraphQL",
    issued: "June 2024",
    validity: null,
    url: "https://www.apollographql.com/tutorials/certifications/cc741d9c-993c-4a67-a07a-f16ea271cd9d",
  },
  {
    number: "05",
    name: "Automation Anywhere Certified Essentials RPA Professional (Automation 360) - 2023",
    issuer: "Automation Anywhere",
    issued: "June 2024",
    validity: null,
    url: "https://certificates.automationanywhere.com/12aff618-370c-4cb9-85ae-f1de98e1df24",
  },
  {
    number: "06",
    name: "Certified Application Developer",
    issuer: "ServiceNow",
    issued: "August 2025",
    validity: null,
    url: "https://www.credly.com/badges/328225dd-ca66-4566-b263-171e0a4dcbae/public_url",
  },
  {
    number: "07",
    name: "OCI Generative AI Certified Professional",
    issuer: "Oracle",
    issued: "July 2024",
    validity: "Expired · July 2026",
    url: "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC5162612&trackId=OCI2024GAIOCP&key=a7d7a61a44216ab4b36fc02fd5ae37a8788d8ae7",
  },
  {
    number: "08",
    name: "Microsoft Certified Azure AI Fundamentals",
    issuer: "Microsoft",
    issued: "June 2024",
    validity: null,
    url: "https://learn.microsoft.com/en-us/users/abdulrahim-1024/credentials/3563b17c04aa2e86?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    number: "09",
    name: "Certified System Administrator",
    issuer: "ServiceNow",
    issued: "June 2025",
    validity: null,
    url: "https://www.credly.com/badges/90084eb8-c5e9-4750-b013-467512013af6/linked_in_profile",
  },
  {
    number: "10",
    name: "Red Hat Certified Enterprise Application Developer",
    issuer: "Red Hat",
    issued: "September 2024",
    validity: "Valid through September 2027",
    url: "https://www.credly.com/badges/c2d9c55a-5802-4eb9-8ca4-5eb9ff7de6aa/linked_in_profile",
  },
];

export function EducationLearningSection() {
  const reduceMotion = useReducedMotion();
  const transition = {
    duration: reduceMotion ? 0 : 0.56,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section id="certifications" aria-labelledby="education-learning-heading" className="scroll-mt-24 border-t border-zinc-100 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={transition}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500">EDUCATION & LEARNING</p>
          <h2 id="education-learning-heading" className="mt-5 max-w-2xl font-heading text-4xl font-semibold leading-[1.03] tracking-[-0.06em] text-zinc-950 sm:text-5xl">
            Building a strong foundation.
            <span className="block text-zinc-600">Always learning beyond it.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
            My academic journey and continued learning across software development and modern engineering.
          </p>
        </motion.div>

        <div className="mt-12 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.08 }}
            className="max-w-3xl"
          >
            <div className="mb-8 flex items-baseline justify-between gap-4">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-950">Education</h3>
            </div>

            <div className="relative pl-5 sm:pl-6">
              <span className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200" aria-hidden="true" />
              <div className="space-y-10">
                {educationEntries.map((entry, index) => (
                  <div key={entry.institution} className="relative pl-6">
                    <span className="absolute left-[-1.1rem] top-1.5 size-2.5 rounded-full border border-zinc-200 bg-white ring-4 ring-white" aria-hidden="true" />
                    <p className="text-xs font-semibold tracking-[0.14em] text-zinc-500 uppercase">{entry.period}</p>
                    <div className="mt-3 space-y-1">
                      <p className="text-xl font-medium tracking-[-0.03em] text-zinc-950">{entry.institution}</p>
                      <p className="text-base leading-7 text-zinc-600">{entry.degree}</p>
                    </div>
                    {index < educationEntries.length - 1 ? <div className="mt-8 h-6" aria-hidden="true" /> : null}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.12 }}
            className="max-w-6xl"
          >
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-950">Certifications</h3>
              <p className="text-sm font-medium tracking-[0.12em] text-zinc-500 uppercase">{certifications.length} certifications</p>
            </div>

            <p className="mb-8 max-w-xl text-base leading-8 text-zinc-600">
              Credentials that reflect continuous learning across cloud, AI, development, and enterprise platforms.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {certifications.map((certification, index) => (
                <motion.article
                  key={certification.number}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.05 }}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  className="group rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[0.7rem] font-semibold tracking-[0.14em] text-zinc-400">{certification.number}</span>
                    {certification.url && !certification.unavailable ? (
                      <a
                        href={certification.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View credential for ${certification.name}`}
                        className="inline-flex items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors group-hover:border-zinc-300 group-hover:text-zinc-900"
                      >
                        <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : null}
                  </div>

                  <div className="mt-5 space-y-3">
                    <h4 className="text-xl font-medium tracking-[-0.03em] text-zinc-950">{certification.name}</h4>
                    <div className="space-y-1 text-sm text-zinc-500">
                      <p>{certification.issuer}</p>
                      <p>Issued · {certification.issued}</p>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-zinc-200 pt-4">
                    {certification.unavailable ? (
                      <p className="text-sm text-zinc-500">Credential link unavailable</p>
                    ) : certification.validity ? (
                      <p className="text-sm text-zinc-500">{certification.validity}</p>
                    ) : null}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
