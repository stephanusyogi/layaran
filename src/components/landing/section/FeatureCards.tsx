import {
  BsChatDotsFill,
  BsPaletteFill,
  BsShieldLockFill,
  BsFolderFill,
} from "react-icons/bs";

export default function FeaturesCards() {
  const features = [
    {
      icon: <BsChatDotsFill className="text-[#f4a261]" />,
      title: "Real-Time Messaging",
      description:
        "Instantly display guest messages on screens to keep the audience engaged.",
      bg: "bg-[#fff3e2]",
    },
    {
      icon: <BsPaletteFill className="text-[#3498db]" />,
      title: "Customizable Design",
      description:
        "Change bubble colors, background, and fonts to fit your event's theme.",
      bg: "bg-[#deedfd]",
    },
    {
      icon: <BsShieldLockFill className="text-[#2ecc71]" />,
      title: "Secure & Moderated",
      description:
        "Track IP addresses and emails to ensure safe and controlled chat sessions.",
      bg: "bg-[#d5f1e4]",
    },
    {
      icon: <BsFolderFill className="text-[#e74c3c]" />,
      title: "File Image Attachments",
      description: "Allow attendees to share images during the event.",
      bg: "bg-[#fdeded]",
    },
  ];

  return (
    <section id="features-cards" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 ${feature.bg} h-full shadow-sm`}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100 + 100}`}
            >
              <div className="text-[36px] mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
