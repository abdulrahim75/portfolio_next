"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function PortfolioIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setIsVisible(false),
      reduceMotion ? 500 : 2250,
    );

    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-label="Loading Abdul Rahim's portfolio"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="portfolio-intro fixed inset-0 z-[100] grid place-items-center"
        >
          <div className="relative w-[min(94vw,90rem)]">
            <Image
              src="/abdul-rahim-logo.png"
              alt=""
              aria-hidden="true"
              width={2000}
              height={666}
              unoptimized
              className="block h-auto w-full opacity-15"
            />
            <Image
              src="/abdul-rahim-logo.png"
              alt=""
              aria-hidden="true"
              width={2000}
              height={666}
              unoptimized
              className={`portfolio-intro-logo absolute inset-0 block h-auto w-full${reduceMotion ? " portfolio-intro-logo-reduced" : ""}`}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
