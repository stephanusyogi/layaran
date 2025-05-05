"use client";

import Image from "next/image";
import { BsCheck2All } from "react-icons/bs";

const features = [
  {
    title: "Real-Time Live Chat Display",
    description:
      "Display messages instantly on videotron, projector, or big screens during your event.",
  },
  {
    title: "Customizable Chat Bubble Design",
    description:
      "Change bubble colors, text size, and background to match your event's theme.",
  },
  {
    title: "Secure and Moderated Chat",
    description:
      "Track IP addresses and emails of message senders to ensure a safe and controlled environment.",
  },
  {
    title: "File Image Attachments",
    description:
      "Allow guests to upload images during the event for a more interactive experience.",
  },
  {
    title: "Animation and Visual Effects",
    description:
      "Add animations to chat bubbles to make the display more lively and engaging.",
  },
];

export default function Feature() {
  return (
    <section id="features" className="py-20 features section">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#2d3e50] dark:text-white mb-2 relative inline-block after:content-[''] after:block after:w-16 after:h-[3px] after:bg-[#0d6efd] after:mx-auto after:mt-2">
          Features
        </h2>
        <p className="font-medium text-[color:var(--heading-color)] max-w-2xl mx-auto mt-3">
          Our live chat solution is packed with customizable features to make
          your event interactive, engaging, and unforgettable.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between gap-12 xl:gap-0">
          {/* Left Text Content */}
          <div className="xl:w-5/12" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl font-medium leading-tight mb-4 text-[color:var(--heading-color)]">
              Powerful Features to Elevate Your Event Experience
            </h2>
            <div className="w-16 h-[3px] bg-[var(--accent-color)] mb-6"></div>

            <ul className="space-y-6">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 pt-1">
                  <BsCheck2All className="text-[color:var(--accent-color)] text-xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[color:var(--heading-color)]">
                      {feature.title}
                    </p>
                    <p className="italic text-[color:var(--default-color)]/80 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="xl:w-6/12 relative image-wrapper">
            <div className="images relative">
              <Image
                src="/images/features-illustration-1.webp"
                alt="Features Illustration"
                width={640}
                height={480}
                className="rounded-2xl w-full main-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
