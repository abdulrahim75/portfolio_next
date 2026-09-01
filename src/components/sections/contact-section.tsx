"use client";

import { Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/abdulrahim75" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdulrahimxp7/" },
  { label: "LeetCode", href: "https://leetcode.com/u/klu_2200031648/" },
  { label: "Email", href: "mailto:abdulrahimxp7@gmail.com" },
];

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const transition = {
    duration: reduceMotion ? 0 : 0.5,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 border-t border-zinc-200 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={transition}
        className="mx-auto w-full max-w-7xl"
      >
        <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500">CONTACT</p>

        <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 id="contact-heading" className="font-heading text-4xl font-semibold leading-[1.03] tracking-[-0.06em] text-zinc-950 sm:text-5xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-zinc-600 sm:text-lg">
              Have a project, opportunity, or just want to talk tech? I&apos;m always open to interesting conversations.
            </p>
          </div>

          <motion.a
            href="mailto:abdulrahimxp7@gmail.com"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.99 }}
            className="inline-flex w-fit items-center justify-center gap-2.5 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            <Mail aria-hidden="true" className="size-4" />
            Email me
          </motion.a>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6">
          <nav aria-label="Social links" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-600">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={reduceMotion ? undefined : { y: -1 }}
                className="inline-flex items-center transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>
    </section>
  );
}
