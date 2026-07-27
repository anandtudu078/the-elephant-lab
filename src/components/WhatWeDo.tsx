import FadeInCard from "./FadeInCard";

const services = [
  {
    icon: "🧪",
    title: "Experiment",
    description: "Rapid prototyping with the latest foundation models and custom architectures.",
  },
  {
    icon: "📊",
    title: "Analyze",
    description: "Turn unstructured data into actionable intelligence with robust pipelines.",
  },
  {
    icon: "🚀",
    title: "Deploy",
    description: "Scalable, production‑ready AI systems that work where your users are.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <FadeInCard className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          We help startups and enterprises turn AI research into real products.
        </p>
      </FadeInCard>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <FadeInCard
            key={service.title}
            delay={i * 0.15}
            className="group p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl hover:border-lab-accent/30 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
          </FadeInCard>
        ))}
      </div>
    </section>
  );
}