"use client";

import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const commerceStack = ["React.js", "Node.js", "Express.js", "MongoDB"];
const commerceEngineering = ["Microservices architecture", "Docker", "Kubernetes", "Jenkins CI/CD", "Prometheus", "Grafana", "Terraform", "Blue-Green Deployment"];
const foodStack = ["React.js", "Node.js", "SQL", "Spring Boot"];
const foodEngineering = ["Role-based access", "Real-time order tracking", "Payment integration", "Spring Boot APIs", "Docker", "Jenkins CI/CD", "High availability / low-latency focus"];
const additionalProjects = [
  {
    number: "03",
    name: "Online Time Table Management",
    duration: "Jan 2024 — Apr 2024",
    category: "Python Full-Stack Web Development",
    description: "Developed an Online Time Table Management System using Python Full Stack (Django), enhancing scheduling efficiency with real-time updates, user authentication, and conflict resolution.",
    detail: "Deployed to PythonAnywhere and enabled multi-user access with role-based permissions, improving scheduling efficiency across departments.",
    technologies: ["Python", "Django"],
    link: "Live Site",
  },
  {
    number: "04",
    name: "Employee Management System",
    duration: "Jun 2024 — Jul 2024",
    category: "Enterprise Java",
    description: "Designed an Employee Management System using Enterprise Java. Streamlined HR operations with features for employee information, attendance, leaves, and payroll management.",
    detail: "Designed to ensure compliance with organizational policies and regulatory requirements, enhancing productivity and fostering a cohesive work environment.",
    technologies: ["Enterprise Java"],
    link: "GitHub",
  },
];

function PlaceholderLink({ label }: { label: string }) {
  return (
    <span aria-label={`${label}: link coming soon`} className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 text-sm font-medium text-zinc-500 transition-colors hover:border-zinc-300 hover:bg-zinc-50">
      {label}
      <ArrowUpRight aria-hidden="true" className="size-3.5" />
      <span className="text-xs text-zinc-400">Coming soon</span>
    </span>
  );
}

function CommerceMockup() {
  return (
    <div aria-label="Conceptual e-commerce interface mockup" role="img" className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_20px_44px_-36px_rgba(0,0,0,0.38)] sm:p-5">
      <div className="flex items-center justify-between border-b border-zinc-100 pb-4 text-xs font-medium text-zinc-500">
        <div className="flex items-center gap-2 text-zinc-950"><ShoppingBag aria-hidden="true" className="size-4" /> SHOP</div>
        <div className="hidden gap-4 sm:flex"><span>Featured</span><span>Collections</span><span>Essentials</span></div>
        <span className="rounded-md bg-zinc-100 px-2 py-1 text-zinc-700">Bag · 02</span>
      </div>
      <div className="mt-5 flex items-end justify-between gap-3">
        <div><p className="text-lg font-semibold tracking-[-0.04em] text-zinc-950 sm:text-xl">Everyday forms.</p><p className="mt-1 text-xs text-zinc-500">Essential pieces, considered.</p></div>
        <span className="hidden rounded-full border border-zinc-200 px-2.5 py-1 text-[10px] font-medium text-zinc-500 sm:block">Spring / Summer</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
        {["bg-stone-200", "bg-zinc-200", "bg-neutral-300"].map((color, index) => (
          <div key={color} className="min-w-0">
            <div className={`aspect-[3/4] rounded-xl ${color}`}>
              <div className="mx-auto h-full w-1/2 rounded-t-[2rem] bg-white/45" />
            </div>
            <p className="mt-2 truncate text-[10px] font-medium text-zinc-700 sm:text-xs">{["Boxy tee", "Field jacket", "Wide trouser"][index]}</p>
            <p className="mt-0.5 text-[10px] text-zinc-400">$ {48 + index * 36}.00</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FoodMockup() {
  return (
    <div aria-label="Conceptual food ordering interface mockup" role="img" className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_20px_44px_-36px_rgba(0,0,0,0.38)] sm:p-5">
      <div className="flex items-center justify-between"><div><p className="text-[10px] font-semibold tracking-[0.12em] text-zinc-400">UI CONCEPT</p><p className="mt-2 text-lg font-semibold tracking-[-0.04em] text-zinc-950">What&apos;s for dinner?</p></div><span className="grid size-8 place-items-center rounded-full bg-emerald-50 text-[10px] font-semibold text-emerald-700">AR</span></div>
      <div className="mt-5 grid grid-cols-[1.1fr_0.9fr] gap-3">
        <div className="rounded-xl bg-zinc-100 p-3"><div className="h-16 rounded-lg bg-amber-100" /><p className="mt-3 text-xs font-semibold text-zinc-900">Basil Kitchen</p><p className="mt-1 text-[10px] text-zinc-500">Italian · 25–35 min</p><div className="mt-3 h-1.5 w-3/4 rounded-full bg-zinc-200" /></div>
        <div className="rounded-xl border border-zinc-200 p-3"><p className="text-[10px] font-medium tracking-[0.08em] text-zinc-500">YOUR ORDER</p><p className="mt-3 text-xs font-semibold text-zinc-900">Order #F-2048</p><p className="mt-1 text-[10px] text-zinc-500">Preparing your meal</p><div className="mt-4 flex gap-1"><span className="size-1.5 rounded-full bg-emerald-500" /><span className="size-1.5 rounded-full bg-emerald-500" /><span className="size-1.5 rounded-full bg-zinc-200" /><span className="size-1.5 rounded-full bg-zinc-200" /></div><p className="mt-3 text-[10px] text-zinc-500">Arriving in 18 min</p></div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-zinc-950 px-3 py-2.5 text-[10px] text-white"><span>Free delivery over $20</span><span className="font-medium">View order</span></div>
    </div>
  );
}

function ProjectTags({ title, tags, primary }: { title: string; tags: string[]; primary?: boolean }) {
  const reduceMotion = useReducedMotion();
  return <div><h4 className="text-xs font-semibold tracking-[0.14em] text-zinc-500">{title}</h4><div className="mt-3 flex flex-wrap gap-2">{tags.map((tag) => <motion.span key={tag} whileHover={reduceMotion ? undefined : { y: -1 }} className={`rounded-lg px-2.5 py-1.5 text-xs font-medium ${primary ? "bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-700"}`}>{tag}</motion.span>)}</div></div>;
}

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();
  const transition = { duration: reduceMotion ? 0 : 0.58, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24 border-t border-zinc-100 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={transition} className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500">SELECTED WORK</p>
          <h2 id="projects-heading" className="mt-5 font-heading text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-zinc-950 sm:text-5xl">Projects that go beyond the interface.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">A selection of full-stack applications built with modern development, deployment, and infrastructure practices.</p>
        </motion.div>

        <motion.article initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ ...transition, delay: reduceMotion ? 0 : 0.1 }} className="mt-14 grid gap-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-5 sm:p-8 lg:mt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:p-10">
          <motion.div whileHover={reduceMotion ? undefined : { y: -3 }} transition={{ duration: reduceMotion ? 0 : 0.25 }} className="flex items-center rounded-2xl bg-zinc-100 p-3 sm:p-6"><CommerceMockup /></motion.div>
          <div className="flex flex-col"><p className="text-xs font-semibold tracking-[0.16em] text-zinc-500">01</p><h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-4xl">E-commerce Clothing Store</h3><p className="mt-3 text-sm font-medium text-zinc-500">Full Stack · Cloud Native</p><p className="mt-6 text-base leading-8 text-zinc-600">Scalable e-commerce application with authentication, payment integration, live order management, and an AI-powered chatbot.</p><div className="mt-8 space-y-6"><ProjectTags title="TECHNOLOGIES" tags={commerceStack} primary /><ProjectTags title="ENGINEERING" tags={commerceEngineering} /></div><div className="mt-8 flex flex-wrap gap-2"><PlaceholderLink label="Live Site" /><PlaceholderLink label="GitHub" /></div></div>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ ...transition, delay: reduceMotion ? 0 : 0.12 }} className="mt-8 grid gap-8 rounded-3xl border border-zinc-200 bg-white p-5 sm:p-8 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-10">
          <motion.div whileHover={reduceMotion ? undefined : { y: -3 }} transition={{ duration: reduceMotion ? 0 : 0.25 }} className="flex items-center rounded-2xl bg-zinc-50 p-3 sm:p-6 lg:order-2"><FoodMockup /></motion.div>
          <div className="flex flex-col lg:order-1"><p className="text-xs font-semibold tracking-[0.16em] text-zinc-500">02</p><h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-4xl">Online Food Ordering System</h3><p className="mt-3 text-sm font-medium text-zinc-500">Full Stack · Backend</p><p className="mt-6 text-base leading-8 text-zinc-600">Scalable food delivery application with role-based access, real-time order tracking, and payment integration.</p><div className="mt-8 space-y-6"><ProjectTags title="TECHNOLOGIES" tags={foodStack} primary /><ProjectTags title="ENGINEERING" tags={foodEngineering} /></div><div className="mt-8"><PlaceholderLink label="GitHub" /></div></div>
        </motion.article>

        <div className="mt-20 border-t border-zinc-200 pt-12 sm:mt-24 sm:pt-14">
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={transition}>
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500">ADDITIONAL PROJECTS</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-3xl">More systems built for real-world workflows.</h3>
          </motion.div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:gap-6">
            {additionalProjects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_16px_32px_-30px_rgba(0,0,0,0.36)] transition-shadow hover:shadow-[0_20px_36px_-30px_rgba(0,0,0,0.42)] sm:p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500">{project.number}</p>
                  <p className="text-right text-xs leading-5 text-zinc-500">{project.duration}</p>
                </div>
                <h4 className="mt-8 text-xl font-semibold tracking-[-0.035em] text-zinc-950">{project.name}</h4>
                <p className="mt-2 text-sm font-medium text-zinc-500">{project.category}</p>
                <p className="mt-5 text-sm leading-7 text-zinc-600">{project.description}</p>
                <p className="mt-4 border-l border-zinc-200 pl-4 text-sm leading-7 text-zinc-500">{project.detail}</p>
                <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-zinc-100 pt-5">
                  <div><p className="text-[11px] font-semibold tracking-[0.14em] text-zinc-500">TECHNOLOGY</p><div className="mt-3 flex flex-wrap gap-2">{project.technologies.map((technology) => <motion.span key={technology} whileHover={reduceMotion ? undefined : { y: -1 }} className="rounded-lg bg-zinc-100 px-2.5 py-1.5 text-xs font-medium text-zinc-700">{technology}</motion.span>)}</div></div>
                  <PlaceholderLink label={project.link} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
