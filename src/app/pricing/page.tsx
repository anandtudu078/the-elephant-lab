import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";

const tiers = [
  {
    name: "Starter",
    price: "$499",
    description: "For small teams exploring AI.",
    features: [
      "Up to 5 projects",
      "Basic model access",
      "Community support",
      "1 GB data processing",
      "Monthly reports",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$1,499",
    description: "For growing businesses serious about AI.",
    features: [
      "Unlimited projects",
      "Advanced model fine-tuning",
      "Priority support",
      "100 GB data processing",
      "Real-time analytics",
      "Custom integrations",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale, mission-critical deployments.",
    features: [
      "Dedicated infrastructure",
      "On-premise deployment",
      "SLA & 24/7 support",
      "Unlimited data",
      "Custom model training",
      "Audit logs & compliance",
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your AI ambitions. Upgrade or downgrade at any time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <PricingCard key={tier.name} {...tier} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}