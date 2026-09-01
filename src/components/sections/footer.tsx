export function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-7 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 text-sm text-zinc-600 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-base font-medium tracking-[-0.02em] text-zinc-950">Abdul Rahim</p>
          <p className="mt-1 text-zinc-500">Software Developer · Bangalore, India</p>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="https://github.com/abdulrahim75" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">GitHub</a>
            <a href="https://www.linkedin.com/in/abdulrahimxp7/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">LinkedIn</a>
            <a href="https://leetcode.com/u/klu_2200031648/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">LeetCode</a>
            <a href="mailto:abdulrahimxp7@gmail.com" className="transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950">Email</a>
          </div>

          <p className="text-zinc-500">© 2026 Abdul Rahim</p>
        </div>
      </div>
    </footer>
  );
}
