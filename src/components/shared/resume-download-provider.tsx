"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ResumeDownloadContext = createContext<(() => void) | null>(null);

export function ResumeDownloadProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const reduceMotion = useReducedMotion();

  const startResumeDownload = useCallback(() => {
    setAnimationKey((key) => key + 1);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const timeout = window.setTimeout(() => setIsLoading(false), reduceMotion ? 500 : 1800);
    return () => window.clearTimeout(timeout);
  }, [isLoading, animationKey, reduceMotion]);

  return (
    <ResumeDownloadContext.Provider value={startResumeDownload}>
      {children}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="resume-download-overlay"
            role="status"
            aria-label="Downloading your resume"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-white/95 backdrop-blur-sm"
          >
            <div className="flex w-[min(84vw,34rem)] flex-col items-center">
              <div className="relative w-full">
                <Image
                  src="/abdul-rahim-logo.png"
                  alt=""
                  width={2000}
                  height={666}
                  unoptimized
                  className="block h-auto w-full opacity-15"
                />
                <Image
                  key={animationKey}
                  src="/abdul-rahim-logo.png"
                  alt=""
                  width={2000}
                  height={666}
                  unoptimized
                  className={`resume-logo-fill absolute inset-0 block h-auto w-full ${reduceMotion ? "resume-logo-fill-reduced" : ""}`}
                />
              </div>
              <p className="mt-7 text-sm font-medium tracking-wide text-zinc-600">
                Downloading your resume...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ResumeDownloadContext.Provider>
  );
}

export function useResumeDownload() {
  const startResumeDownload = useContext(ResumeDownloadContext);

  if (!startResumeDownload) {
    throw new Error("useResumeDownload must be used within a ResumeDownloadProvider");
  }

  return startResumeDownload;
}
