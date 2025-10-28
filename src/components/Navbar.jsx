import { Rocket, Trophy, Play, Github } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 grid place-content-center text-white shadow-lg shadow-indigo-500/30">
              <Rocket className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-zinc-900">AutomationNest</p>
              <p className="text-xs text-zinc-500">Practice • Automate • Master</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#challenges" className="text-zinc-600 hover:text-zinc-900 transition-colors">Challenges</a>
            <a href="#how" className="text-zinc-600 hover:text-zinc-900 transition-colors">How it works</a>
            <a href="#leaderboard" className="text-zinc-600 hover:text-zinc-900 transition-colors flex items-center gap-2">
              <Trophy className="h-4 w-4" /> Leaderboard
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#get-started"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-zinc-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-zinc-800 transition-colors"
            >
              <Play className="h-4 w-4" /> Start practicing
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors"
            >
              <Github className="h-4 w-4" /> Star us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
