export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <h1 className="text-xl font-bold">RouteIQ AI</h1>
        <a
          href="#waitlist"
          className="rounded-xl bg-white px-4 py-2 font-semibold text-black"
        >
          Get Early Access
        </a>
      </header>

      <section className="mx-auto mt-16 max-w-5xl px-6 text-center">
        <h1 className="text-5xl font-bold leading-tight md:text-6xl">
          Optimize your AI API costs
          <br />
          without slowing down your product
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          RouteIQ intelligently routes your AI requests to the right model to
          balance cost, speed, and performance.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500">
          Built for AI startups looking to control LLM costs and improve
          performance.
        </p>

        <p className="mt-4 text-sm text-slate-400">
          Are you sending every request to your most expensive model?
        </p>

        <div
          id="waitlist"
          className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <p className="text-sm uppercase tracking-wide text-slate-400">
            Get Early Access
          </p>

          <p className="text-center text-sm text-slate-400">
            Join the RouteIQ waitlist and we’ll reach out when early access
            opens.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScTVhb8oRYbNysfEHDnDx5GGCQ3NnyNOO1TO2R_UJEq8DGYqA/viewform?usp=publish-editor"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-black transition hover:opacity-90"
          >
            Get Early Access
          </a>

          <p className="text-xs text-slate-500">
            No spam. We’ll only reach out when early access opens.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {[
          ["Cost-aware", "Routing Logic"],
          ["Latency-focused", "Performance"],
          ["Flexible", "Model Selection"],
          ["Early Access", "Now Open"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
          >
            <h2 className="text-2xl font-bold">{value}</h2>
            <p className="mt-2 text-slate-400">{label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold">
          Why founders choose RouteIQ
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Smart Routing",
              "Automatically selects the best AI model for each request.",
            ],
            [
              "Lower Costs",
              "Reduce LLM and API spend with intelligent routing logic.",
            ],
            [
              "Reliable Performance",
              "Keep latency low with fallback models and consistent uptime.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold">How it works</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          RouteIQ helps AI teams control model costs with a simple routing
          workflow.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "1. Connect your workflow",
              "Start with your current AI usage patterns, prompts, or API flow.",
            ],
            [
              "2. Route requests intelligently",
              "Send each request to the right model based on cost, latency, and performance needs.",
            ],
            [
              "3. Monitor and improve",
              "Track usage, reduce waste, and improve system performance as you scale.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-4xl px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold">Early Access</h2>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-xl font-semibold">Join the RouteIQ Pilot</h3>
          <p className="mt-4 text-4xl font-bold">Contact Us</p>

          <ul className="mt-6 space-y-2 text-slate-400">
            <li>✔ Smart model routing</li>
            <li>✔ Cost optimization insights</li>
            <li>✔ Performance monitoring</li>
            <li>✔ Founder support</li>
          </ul>

          <a
            href="#waitlist"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black"
          >
            Get Early Access
          </a>
        </div>
      </section>
    </div>
  );
}