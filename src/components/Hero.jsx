import { Play, Code2, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-2.5 py-1">
              <Zap className="h-3.5 w-3.5" /> New: Playgrounds for Cypress & Playwright
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
              LeetCode for Web Automation
            </h1>
            <p className="mt-4 text-lg text-zinc-600 max-w-xl">
              Hone your end-to-end testing and RPA skills with bite-sized, real-world challenges. Practice with selectors, waits, network
              controls, file uploads, iframes, and more.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#challenges"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-zinc-800 transition-colors"
              >
                <Play className="h-4 w-4" /> Browse challenges
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                <Code2 className="h-4 w-4" /> How it works
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <Feature text="Locator mastery" />
              <Feature text="Smart waits" />
              <Feature text="Network stubs" />
              <Feature text="Visual asserts" />
              <Feature text="Auth flows" />
              <Feature text="CI-ready" />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 grid place-content-center text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Realistic, safe sandboxes</p>
                  <p className="text-sm text-zinc-500">Break things here, not in prod. Every challenge runs in isolation.</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <Stat label="Challenges" value="120+" />
                <Stat label="Playgrounds" value="4 runtimes" />
                <Stat label="Avg. session" value="14 min" />
                <Stat label="Success rate" value="72%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-2 text-zinc-700">
      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
      {text}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
      <p className="text-xs text-zinc-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-zinc-900">{value}</p>
    </div>
  );
}
