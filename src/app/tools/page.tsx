import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInCard from "@/components/FadeInCard";
import Link from "next/link";

const tools = [
  {
    name: "Memory Engine",
    icon: "🧠",
    shortDesc: "Long‑term context for AI agents.",
    description:
      "A plug‑and‑play memory layer that gives any LLM persistent, searchable recall across sessions. No more repeating yourself—your AI remembers past conversations, user preferences, and domain knowledge.",
    features: [
      "Vector + graph hybrid storage",
      "Automatic summarization",
      "API‑first design",
    ],
    status: "Private beta",
    cta: "Request access",
    link: "/contact",
  },
  {
    name: "Data Fabric",
    icon: "🔗",
    shortDesc: "Unified data pipeline for AI.",
    description:
      "Cleans, embeds, and indexes unstructured data from any source (PDFs, Slack, databases, etc.) into a queryable knowledge graph. Built for teams that need to turn messy data into reliable training sets.",
    features: [
      "200+ connectors",
      "Real‑time sync",
      "Semantic search out of the box",
    ],
    status: "Coming Q3 2026",
    cta: "Join waitlist",
    link: "/contact",
  },
  {
    name: "Elephant Tune",
    icon: "🎛️",
    shortDesc: "Fine‑tune open‑source models in minutes.",
    description:
      "Our internal fine‑tuning platform, now available to select partners. Upload your dataset, choose a base model, and get a production‑ready adapter—no ML engineering required. Typically 10x faster than manual pipelines.",
    features: [
      "LoRA / QLoRA support",
      "One‑click deployment",
      "Cost tracking dashboard",
    ],
    status: "Early access",
    cta: "Apply for access",
    link: "/contact",
  },
];

export default function ToolsPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInCard className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Tools</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              AI infrastructure and developer tools built by Elephant Lab. Some are free, some are paid—all are
              battle‑tested.
            </p>
          </FadeInCard>

          <div className="space-y-12">
            {tools.map((tool, i) => (
              <FadeInCard key={tool.name} delay={i * 0.15}>
                <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left column: icon + basic info */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lab-accent/20 to-lab-glow/20 dark:from-lab-accent/30 dark:to-transparent flex items-center justify-center text-4xl">
                        {tool.icon}
                      </div>
                    </div>
                    {/* Right column: details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold">{tool.name}</h2>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            tool.status === "Private beta"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : tool.status === "Early access"
                              ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                              : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          }`}
                        >
                          {tool.status}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{tool.description}</p>
                      {/* Feature list */}
                      <ul className="space-y-2 mb-6">
                        {tool.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="text-lab-accent mt-1">✓</span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                      {/* CTA button */}
                      <Link
                        href={tool.link}
                        className="inline-block bg-lab-accent text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-lab-glow transition-colors"
                      >
                        {tool.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeInCard>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}