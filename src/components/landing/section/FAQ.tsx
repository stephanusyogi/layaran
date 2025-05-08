"use client";
import React, { useState, useEffect } from "react";

export default function FAQ() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
    }
  }, []);

  const faqData = [
    {
      question: "What is Layaran?",
      answer:
        "Layaran is a real-time live chat solution designed to display messages on large screens such as videotrons, projectors, or TVs during events. Guests or event participants can send messages, give feedback, or interact with the event through chat bubbles that appear instantly on the screen. The name 'Layaran' comes from the Javanese word 'Layar,' which means 'screen' or 'display.' Our service turns ordinary screens into interactive communication platforms, making your event more engaging and memorable by allowing your audience to send shoutouts, song requests, or wishes that come to life on the big screen in real time!",
    },
    {
      question: "What types of events are suitable for this service?",
      answer:
        "This service is suitable for various types of events, including: <br/>🎉 Wedding Party<br/> 🎶 Club Event / Nightclub Party<br/> 🏢 Corporate Event <br/>🎤 Music Festival<br/> 🎥 Private Party or Gathering",
    },
    {
      question: "How do I display live chat on a videotron or projector?",
      answer:
        "It’s very easy! Follow these steps:<br/> 1️⃣ Register and choose the event package that suits your needs. <br/>2️⃣ Create and customize your live chat display (bubble, colors, background). <br/>3️⃣ Connect your device to a videotron, projector, or large screen.<br/> 4️⃣ Run your event and see messages appear in real-time on the screen!",
    },
    {
      question: "Is there a limit to the number of messages that can be sent?",
      answer:
        "Yes, each package comes with a message quota that can be sent during the event:<br/> Basic Event: 5,000 messages <br/> Standard Event: 25,000 messages <br/> Pro Event: 100,000 messages Once the quota is reached, you can extend it by purchasing additional quotas.",
    },
    {
      question: "How secure are the messages?",
      answer:
        "We provide security features to ensure that the messages displayed on the screen are moderated: <br/>✅ Email Tracking <br/>✅ IP Address Tracking You can moderate messages to prevent inappropriate content from appearing on the screen.",
    },
    {
      question: "Can I add my event logo or theme?",
      answer:
        "Absolutely! Our service offers full customization features, including: <br/>🎨 Event or Brand Logo <br/>🎨 Chat Bubble Colors <br/>🎨 Background Images or Videos 🎨 Chat Bubble Animations",
    },
    {
      question: "Can this service be used for both online and offline events?",
      answer:
        "Yes, this service can be used for both online and offline events. For offline events, simply connect your device to a large screen or projector. For online events, you can integrate it with a streaming platform.",
    },
    {
      question: "Can the service be used on different devices?",
      answer:
        "Yes, the service can be used on: 💻 Laptop ,📱 Smartphone ,📱 Tablet ,📺 Smart TV You only need an internet connection and a browser to run the service.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[var(--bg-blue-opacity)]">
      <div
        className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10"
        data-aos="fade-up"
      >
        {/* Left Column */}
        <div
          className="lg:col-span-5"
          {...(!isMobile && { "data-aos": "fade-up", "data-aos-delay": "200" })}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Have a question? Check out the FAQ
          </h2>
          <p className="text-gray-600">
            Explore our FAQ to find answers to your questions and tips for
            setting up and customizing your live chat display. Everything you
            need to make your event truly unforgettable is right here!
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--surface-color)] rounded-xl shadow-sm p-5 transition-all duration-300"
              {...(!isMobile && {
                "data-aos": "zoom-in",
                "data-aos-delay": `${index * 100 + 100}`,
              })}
            >
              <div
                onClick={() => handleToggle(index)}
                className="flex justify-between items-center cursor-pointer text-[var(--default-color)]"
              >
                <h3 className="font-medium">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    activeIndex === index ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              {activeIndex === index && (
                <div
                  className="mt-3 text-[var(--default-color)] text-sm"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
