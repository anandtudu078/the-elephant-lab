import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInCard from "@/components/FadeInCard";

const tools = [
  {
    name: "Memory Engine",
    description: "Long‑term context for AI agents. Never forget a conversation.",
    status: "Coming soon",
    icon: "🧠",
  },
  {
    name: "Data Fabric",
    description: "Unified pipeline for cleaning, embedding, and querying unstructured data.",
    status: "In beta",
    icon: "🔗",
  },
  {
    name: "Elephant Tune",
    description: "Fine‑tune open‑source models with your own data in minutes.",
    status: "Coming soon",
    icon: "🎛️",
  },
];

export default function ToolsPage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Tools</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            AI infrastructure and developer tools built by Elephant Lab. Some are free, some are paid—all are
            battle‑tested.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <FadeInCard
              key={tool.name}
              delay={i * 0.1}
              className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{tool.description}</p>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-lab-accent/10 text-lab-accent">
                {tool.status}
              </span>
            </FadeInCard>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}