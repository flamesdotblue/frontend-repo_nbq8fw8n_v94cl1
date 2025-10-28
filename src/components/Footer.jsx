import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="font-semibold text-zinc-900">AutomationNest</p>
            <p className="mt-2 text-zinc-600">
              A playground to master web automation through realistic, hands-on challenges.
            </p>
          </div>
          <div>
            <p className="font-semibold text-zinc-900">Learn</p>
            <ul className="mt-2 space-y-2 text-zinc-600">
              <li><a href="#challenges" className="hover:text-zinc-900">Challenges</a></li>
              <li><a href="#how" className="hover:text-zinc-900">How it works</a></li>
              <li><a href="#leaderboard" className="hover:text-zinc-900">Leaderboard</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-zinc-900">Playgrounds</p>
            <ul className="mt-2 space-y-2 text-zinc-600">
              <li>Cypress</li>
              <li>Playwright</li>
              <li>Puppeteer</li>
              <li>Selenium</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-zinc-900">Connect</p>
            <ul className="mt-2 space-y-2 text-zinc-600">
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-zinc-900"><Github className="h-4 w-4"/> GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-zinc-900"><Twitter className="h-4 w-4"/> Twitter</a></li>
              <li><a href="mailto:hello@automationnest.dev" className="inline-flex items-center gap-2 hover:text-zinc-900"><Mail className="h-4 w-4"/> Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} AutomationNest. All rights reserved.</p>
          <p>
            Built with love for testers and QA engineers. <span className="hidden sm:inline">Ship higher quality with confidence.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
