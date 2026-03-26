export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">RouteIQ AI</h1>
        <button className="bg-white text-black px-4 py-2 rounded-xl font-semibold">
          Book Demo
        </button>
      </header>

      {/* HERO */}
      <section className="text-center mt-20 px-6">
        <h1 className="text-5xl font-bold leading-tight">
          Cut AI costs <br /> without slowing down
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          RouteIQ intelligently routes your AI requests to the best model,
          saving money while maintaining performance.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            Start Free
          </button>
          <button className="border border-white px-6 py-3 rounded-xl">
            Live Demo
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-20 px-6">
        {[
          ["40%", "Cost Reduction"],
          ["2x", "Faster Responses"],
          ["99.9%", "Uptime"],
          ["24/7", "Monitoring"],
        ].map(([value, label]) => (
          <div key={label} className="bg-white/5 p-6 rounded-2xl text-center">
            <h2 className="text-2xl font-bold">{value}</h2>
            <p className="text-gray-400 mt-2">{label}</p>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold text-center">
          Why founders choose us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            ["Smart Routing", "Automatically selects the best AI model"],
            ["Save Costs", "Reduce API bills by up to 70%"],
            ["Fast Performance", "Low latency with fallback models"],
          ].map(([title, desc]) => (
            <div key={title} className="bg-white/5 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-400 mt-3">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-4xl mx-auto mt-24 px-6 text-center">
        <h2 className="text-3xl font-bold">Simple Pricing</h2>

        <div className="bg-white/5 p-8 rounded-3xl mt-10">
          <h3 className="text-xl font-semibold">Starter Plan</h3>
          <p className="text-4xl font-bold mt-4">$99/month</p>

          <ul className="mt-6 text-gray-400 space-y-2">
            <li>✔ 100K requests</li>
            <li>✔ Cost dashboard</li>
            <li>✔ Smart routing</li>
            <li>✔ Email support</li>
          </ul>

          <button className="mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold">
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
}