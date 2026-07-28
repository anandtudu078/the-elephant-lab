import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInCard from "@/components/FadeInCard";

const values = [
  {
    icon: "🧠",
    title: "Memory First",
    description: "We believe AI must remember context to be truly useful. Every product we build is centered around persistent, structured memory.",
  },
  {
    icon: "🔬",
    title: "Research Driven",
    description: "We don't just use AI—we advance it. Our team publishes, experiments, and pushes the boundaries of what's possible.",
  },
  {
    icon: "🤝",
    title: "Radical Transparency",
    description: "No black boxes. We explain how our models work, what data they're trained on, and what they can (and can't) do.",
  },
  {
    icon: "🌍",
    title: "Real‑World Impact",
    description: "AI is a tool, not a toy. We focus on solving hard problems in healthcare, climate, and education.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInCard>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Elephant Lab</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              We're an AI research lab and product studio. Our mission is to build intelligence that remembers—AI systems that learn from every interaction and grow smarter over time.
            </p>
          </FadeInCard>

          <FadeInCard className="mt-16">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Elephant Lab was founded in 2025 by a group of researchers who were frustrated with the state of AI: brilliant models that forgot everything the moment a conversation ended.
              </p>
              <p>
                We started in a small garage in Bangalore, experimenting with memory‑augmented neural networks. Within months, our prototypes were outperforming much larger models on long‑context reasoning tasks.
              </p>
              <p>
                Today, we're a distributed team of 4, working with startups and enterprises to build AI that doesn't just answer questions—it remembers who asked them.
              </p>
            </div>
          </FadeInCard>

          <FadeInCard className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="text-3xl">{v.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInCard>

          <FadeInCard className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Want to work with us?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're always open to new collaborations and interesting problems.
            </p>
            <a
              href="/contact"
              className="inline-block bg-lab-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-lab-glow transition-colors"
            >
              Get in touch
            </a>
          </FadeInCard>
        </div>
      </section>
      <Footer />
    </main>
  );
}