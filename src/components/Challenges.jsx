import { Award, Flame, Gauge, PlayCircle } from "lucide-react";

const challenges = [
  {
    id: 1,
    title: "Login flow with 2FA",
    difficulty: "Intermediate",
    tags: ["auth", "cookies", "waits"],
    stats: { solved: 1421, rating: 4.7 },
    description:
      "Automate a username/password login with a mock TOTP step. Persist session and validate redirect to dashboard.",
  },
  {
    id: 2,
    title: "File upload + progress",
    difficulty: "Beginner",
    tags: ["upload", "network", "assertions"],
    stats: { solved: 2103, rating: 4.6 },
    description:
      "Upload a CSV and verify server-side parsing. Stub the network to simulate a slow connection and assert progress UI.",
  },
  {
    id: 3,
    title: "Handle iframes & modals",
    difficulty: "Advanced",
    tags: ["iframe", "modal", "selectors"],
    stats: { solved: 683, rating: 4.8 },
    description:
      "Interact with an iframe editor, then close a modal triggered by autosave. Ensure robust selectors and retries.",
  },
  {
    id: 4,
    title: "Infinite scroll + lazy images",
    difficulty: "Intermediate",
    tags: ["scroll", "waits", "visual"],
    stats: { solved: 1198, rating: 4.5 },
    description:
      "Scroll to load 60+ items and verify lazy-loaded thumbnails are displayed and cached across navigations.",
  },
  {
    id: 5,
    title: "Network interception & stubs",
    difficulty: "Advanced",
    tags: ["api", "stubs", "fixtures"],
    stats: { solved: 754, rating: 4.9 },
    description:
      "Intercept product API calls, return fixtures for empty states, and assert UI reacts correctly to failures.",
  },
  {
    id: 6,
    title: "Accessing shadow DOM",
    difficulty: "Intermediate",
    tags: ["shadow-dom", "selectors"],
    stats: { solved: 942, rating: 4.4 },
    description:
      "Work with custom elements and pierce shadow roots to toggle a preference stored in localStorage.",
  },
];

export default function Challenges() {
  return (
    <section id="challenges" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">Practice challenges</h2>
            <p className="mt-2 text-zinc-600">Short, focused tasks designed to build real-world automation muscle memory.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm text-indigo-700 hover:text-indigo-900 font-medium">
            <Award className="h-4 w-4" /> Explore tracks
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c) => (
            <article
              key={c.id}
              className="group rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold rounded-full border border-amber-200 bg-amber-50 text-amber-700 px-2 py-0.5">
                    <Flame className="h-3.5 w-3.5" /> {c.difficulty}
                  </span>
                  <div className="text-xs text-zinc-500">⭐ {c.stats.rating}</div>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900 group-hover:text-indigo-700 transition-colors">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 line-clamp-3">{c.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="text-xs text-zinc-600 bg-zinc-100 border border-zinc-200 rounded-md px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-5 py-4 border-t border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  <Gauge className="h-4 w-4" /> {c.stats.solved.toLocaleString()} solved
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="#get-started"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-700 hover:text-indigo-900"
                  >
                    <PlayCircle className="h-4 w-4" /> Practice
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
