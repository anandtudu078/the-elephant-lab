import FadeInCard from "./FadeInCard";

const projects = [
  {
    title: "Project Nebula",
    category: "Generative AI",
    description: "A text‑to‑3D world generator for immersive experiences.",
    image: "", // add image URL later
  },
  {
    title: "Sentinel",
    category: "Computer Vision",
    description: "Real‑time anomaly detection for industrial safety.",
  },
  {
    title: "Memora",
    category: "NLP & Memory",
    description: "Long‑term context engine for enterprise chatbots.",
  },
  {
    title: "Aether",
    category: "Data Pipelines",
    description: "Unified data fabric for AI model training at scale.",
  },
];

export default function OurWork() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <FadeInCard className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          A selection of projects where we turned research into reality.
        </p>
      </FadeInCard>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <FadeInCard
            key={project.title}
            delay={i * 0.1}
            className="group relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-lab-accent/30"
          >
            {/* Image placeholder – replace with actual images */}
            <div className="h-48 bg-gradient-to-br from-lab-accent/20 to-lab-glow/10 dark:from-lab-accent/30 dark:to-transparent flex items-center justify-center text-4xl">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <span className="opacity-30">🖼️</span>
              )}
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-lab-accent uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-1">{project.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
            </div>
          </FadeInCard>
        ))}
      </div>
    </section>
  );
}