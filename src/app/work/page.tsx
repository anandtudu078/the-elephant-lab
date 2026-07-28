import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInCard from "@/components/FadeInCard";
import Link from "next/link";

const projects = [
  {
    title: "Project Nebula",
    category: "Generative AI",
    description: "A text‑to‑3D world generator for immersive training simulations. Reduced asset creation time by 90%.",
    impact: "Used by 3 major gaming studios",
    image: "", // add image path later
    link: "#",
  },
  {
    title: "Sentinel",
    category: "Computer Vision",
    description: "Real‑time anomaly detection for factory safety. Processes 60 video streams simultaneously with <100ms latency.",
    impact: "Deployed in 12 factories across India",
    link: "#",
  },
  {
    title: "Memora",
    category: "NLP & Memory",
    description: "Long‑term context engine for enterprise chatbots. Remembers every customer interaction and preferences.",
    impact: "Improved customer satisfaction scores by 35%",
    link: "#",
  },
  {
    title: "Aether",
    category: "Data Pipelines",
    description: "Unified data fabric for cleaning, embedding, and querying petabytes of unstructured data.",
    impact: "Processes 10TB/day for a Fortune 500 client",
    link: "#",
  },
  {
    title: "Elephant Tune (internal)",
    category: "Tooling",
    description: "Our own fine‑tuning platform that reduced model training costs by 60% and time from weeks to hours.",
    impact: "Used to train all our production models",
    link: "/tools",
  },
];

export default function WorkPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInCard className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Case studies and projects where we turned AI research into measurable impact.
            </p>
          </FadeInCard>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <FadeInCard key={project.title} delay={i * 0.1}>
                <Link
                  href={project.link}
                  className="block group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:border-lab-accent/30"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-lab-accent uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h2 className="text-2xl font-bold mt-2 group-hover:text-lab-accent transition-colors">
                        {project.title}
                      </h2>
                    </div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                      {project.impact}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                  <span className="inline-block mt-4 text-sm text-lab-accent font-medium group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              </FadeInCard>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}