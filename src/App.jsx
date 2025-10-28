import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Challenges />
      </main>
      <Footer />
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-16 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">How it works</h2>
          <p className="mt-3 text-zinc-600">
            Pick a challenge, launch a safe sandbox, and write automation to pass the hidden checks. Earn streaks, badges, and mastery.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Step
            index={1}
            title="Choose a challenge"
            text="Filter by topic and difficulty. Each prompt mirrors a real UI scenario you’ll see at work."
          />
          <Step
            index={2}
            title="Automate in sandbox"
            text="Use your favorite tool in an isolated playground. Break and retry safely with instant feedback."
          />
          <Step
            index={3}
            title="Validate & learn"
            text="Submit to run robust checks. Review hints and best practices to level up for the next one."
          />
        </div>
      </div>
    </section>
  );
}

function Step({ index, title, text }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-content-center font-semibold">
        {index}
      </div>
      <h3 className="mt-4 font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{text}</p>
    </div>
  );
}

export default App;
