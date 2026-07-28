"use client";
import { motion } from "framer-motion";

// Replace these with your actual team members, image paths, and social links
const team = [
  {
    name: "Anand Tudu",
    role: "Founder & AI Research Lead",
    bio: "Former DeepMind researcher. Specializes in large language models and reinforcement learning.",
    image: "https://pbs.twimg.com/profile_images/2037478488295497728/eynpJrbA_400x400.jpg",          // 👈 replace with your image path
    linkedin: "https://www.linkedin.com/in/anand-tudu-60263a212/",                       // 👈 replace with real LinkedIn URL
    twitter: "https://x.com/AnandTudu_078",                        // 👈 replace with real X (Twitter) URL
  },
  {
    name: "Rajiv Menon",
    role: "Co‑founder & ML Engineer",
    bio: "Built AI pipelines at Stripe and Uber. Loves turning research papers into production code.",
    image: "/team/rajiv.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Kapoor",
    role: "Product & Strategy",
    bio: "Ex‑McKinsey. Translates complex AI capabilities into products people actually use.",
    image: "/team/priya.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Arjun Das",
    role: "Full‑Stack AI Engineer",
    bio: "Open‑source contributor. Builds the infrastructure that makes our models run at scale.",
    image: "/team/arjun.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

function TeamCard({
  member,
  delay,
}: {
  member: (typeof team)[0];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-lab-accent/30"
    >
      {/* Profile image */}
      <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image fails to load: show a gradient placeholder with initials
            const target = e.currentTarget;
            target.style.display = "none";
            target.parentElement!.classList.add(
              "bg-gradient-to-br",
              "from-lab-accent/20",
              "to-lab-glow/20",
              "dark:from-lab-accent/30",
              "dark:to-transparent",
              "flex",
              "items-center",
              "justify-center",
              "text-2xl",
              "font-bold",
              "text-lab-accent"
            );
            target.parentElement!.innerText = member.name
              .split(" ")
              .map((n) => n[0])
              .join("");
          }}
        />
      </div>

      {/* Info */}
      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
      <p className="text-lab-accent text-sm font-medium mb-3">{member.role}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
        {member.bio}
      </p>

      {/* Social links */}
      <div className="flex gap-3">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-lab-accent transition-colors text-sm font-medium"
        >
          LinkedIn →
        </a>
        <a
          href={member.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-lab-accent transition-colors text-sm font-medium"
        >
          X (Twitter) →
        </a>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the Team</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          A small, focused team of AI researchers and engineers obsessed with building intelligence that remembers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <TeamCard key={member.name} member={member} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}