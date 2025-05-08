import { BsCheckCircleFill } from "react-icons/bs";

type Plan = {
  key: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: string;
};

const plans: Plan[] = [
  {
    key: "basic",
    name: "Basic Plan",
    price: "25.000,-",
    period: "/ event",
    description:
      "Perfect for small events where you want to engage guests with real-time messages displayed on big screens.",
    features: [
      "5.000 Messages",
      "Customizable message bubble colors, fonts, and sizes",
      "IP & Email Tracking",
      "Up to 100 MB storage",
      "Rehearsal Access 6 hours before event date",
    ],
  },
  {
    key: "standard",
    name: "Standard Plan",
    price: "45.000,-",
    period: "/ event",
    description:
      "A perfect package for multi-day events like club nights, corporate events, and small festivals.",
    popular: "Most Popular",
    features: [
      "25.000 Messages",
      "Full Customization (Bubble & Background)",
      "Send Image Attachments (up to 10 MB / file)",
      "IP & Email Tracking",
      "Up to 300 MB storage",
      "Rehearsal Access 12 hours before event date",
    ],
  },
  {
    key: "premium",
    name: "Premium Plan",
    price: "75.000,-",
    period: "/ event",
    description:
      "Best solution for large festivals and recurring events with custom animations and more storage for interactive experiences.",
    features: [
      "100.000 Messages",
      "Full Customization (Bubble & Background)",
      "Animations Effect Features",
      "Chats Themes",
      "Send Image Attachments (up to 15 MB / file)",
      "IP & Email Tracking",
      "Up to 1 GB storage",
      "Rehearsal Access 24 hours before event date",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-[var(--bg-blue-opacity)]">
      <div
        className="container mx-auto px-4 text-center mb-12"
        data-aos="fade-up"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-[#2d3e50] dark:text-white mb-2 relative inline-block after:content-[''] after:block after:w-16 after:h-[3px] after:bg-[#0d6efd] after:mx-auto after:mt-2">
          Pricing
        </h2>
      </div>

      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => {
            const isPopular = plan.key === "standard";
            return (
              <div
                key={plan.key}
                className={`w-full md:w-[300px] lg:w-[320px] rounded-2xl p-6 transition-all duration-300 relative ${
                  isPopular
                    ? "bg-[var(--accent-color)] text-[var(--contrast-color)] shadow-xl"
                    : "bg-[var(--surface-color)] text-[var(--default-color)] hover:shadow-lg"
                }`}
                data-aos="fade-up"
                data-aos-delay={`${index * 100 + 100}`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[var(--contrast-color)] text-[var(--accent-color)] px-4 py-1 rounded-full text-sm font-semibold shadow">
                    {plan.popular}
                  </div>
                )}
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isPopular ? "text-[var(--contrast-color)]" : ""
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="price mb-6">
                  <span className="text-xl font-bold align-top">Rp.</span>{" "}
                  <span className="text-5xl font-extrabold">{plan.price}</span>{" "}
                  <span className="text-sm opacity-60">{plan.period}</span>
                </div>
                <p
                  className={`text-sm mb-6 ${
                    isPopular ? "text-[var(--contrast-color)]" : "text-gray-700"
                  }`}
                >
                  {plan.description}
                </p>
                <h4
                  className={`text-base font-semibold mb-3 ${
                    isPopular ? "text-[var(--contrast-color)]" : ""
                  }`}
                >
                  Featured Included:
                </h4>
                <ul className="text-sm space-y-3 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <BsCheckCircleFill
                        className={`text-lg mt-1 ${
                          isPopular
                            ? "text-[var(--contrast-color)]"
                            : "text-[var(--accent-color)]"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
