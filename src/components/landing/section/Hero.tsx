"use client";
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {
  BsPeopleFill,
  BsChatDotsFill,
  BsLightningFill,
  BsSliders,
  BsActivity,
} from "react-icons/bs";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: <BsPeopleFill className="text-xl" />,
    value: "10+",
    label: "Events Powered",
  },
  {
    icon: <BsChatDotsFill className="text-xl" />,
    value: "12,000",
    label: "Messages Sent",
  },
  {
    icon: <BsLightningFill className="text-xl" />,
    value: "Real-Time",
    label: "Real-Time Guest Engagement",
  },
  {
    icon: <BsSliders className="text-xl" />,
    value: "100%",
    label: "Fully Customizable",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-[150px] bg-[linear-gradient(135deg,_color-mix(in_srgb,var(--accent-color),transparent_95%)_50%,_color-mix(in_srgb,var(--accent-color),transparent_98%)_25%,_transparent_50%)]"
    >
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-wrap items-center">
          {/* Left content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div
              className="relative z-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full font-medium text-[var(--accent-color)] bg-[color-mix(in_srgb,var(--accent-color),transparent_92%)]">
                <BsActivity className="text-xl mr-2" />
                Real-Time Messages, Real-Time Connections!
              </div>

              <h1 className="text-[3.5rem] font-bold leading-[1.2] mb-6 text-center lg:text-left md:text-[2.5rem] sm:text-[2rem]">
                Bring Your <br /> Event to Life with <br />{" "}
                <span className="accent-text">Real-Time Live Chat!</span>
              </h1>

              <p className="mb-6 md:mb-10 text-center lg:text-left">
                Display real-time messages from your guests on videotron,
                projector, or big screens during your event – wedding, club
                parties, festivals, and more!
              </p>

              <div className="flex justify-center lg:justify-start">
                <ScrollLink
                  to="pricing"
                  smooth={true}
                  duration={500}
                  className="btn cursor-pointer btn-get-started mx-1 px-10 py-3 rounded-full font-medium transition-all"
                >
                  Get Started
                </ScrollLink>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full lg:w-1/2">
            <div
              className="relative text-center z-10"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <img
                src="/images/illustration-1.webp"
                alt="Hero"
                className="mx-auto"
              />

              <div className="absolute right-8 bottom-3 max-w-xs p-4 rounded-lg shadow-lg animate-float bg-[var(--surface-color)] md:static md:mx-auto md:mt-4">
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <img
                      key={n}
                      src={`/images/avatar-${n}.webp`}
                      alt={`Customer ${n}`}
                      className="-ml-2 first:ml-0 w-9 h-9 rounded-full border-2 border-[var(--surface-color)]"
                    />
                  ))}
                  <span className="ml-2 w-9 h-9 rounded-full flex items-center justify-center bg-[var(--accent-color)] text-[var(--contrast-color)] text-xs font-bold">
                    12+
                  </span>
                </div>
                <p className="text-sm text-[color-mix(in_srgb,var(--default-color),transparent_40%)] mb-0">
                  Over 12,000+ messages sent to engage audiences and create
                  unforgettable moments!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 bg-[var(--surface-color)] rounded-2xl shadow-md p-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4 p-2 md:p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[color-mix(in_srgb,var(--accent-color),transparent_92%)] hover:bg-[var(--accent-color)] transition-colors text-[var(--accent-color)] hover:text-[var(--contrast-color)]">
                {stat.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">{stat.value}</h4>
                <p className="text-sm text-[color-mix(in_srgb,var(--default-color),transparent_40%)]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 bg-[radial-gradient(circle_at_90%_10%,color-mix(in_srgb,var(--accent-color),transparent_92%),transparent_40%)]"></div>
    </section>
  );
}
