"use client";

import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

export default function About() {
  return (
    <section id="about" className="py-20 about section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between gap-12 xl:gap-0">
          {/* Text Content */}
          <div className="xl:w-5/12" data-aos="fade-up" data-aos-delay="200">
            <span className="about-meta text-[color:var(--accent-color)] font-semibold mb-4 inline-block">
              MORE ABOUT US - LAYARAN
            </span>
            <h2 className="about-title text-3xl font-medium leading-tight mb-4">
              We bring your event to life with interactive live chat displayed
              on big screens – perfect for any occasion!
            </h2>
            <p className="about-description text-[color:var(--default-color)]/80 mb-6">
              The name <strong>"Layaran"</strong> is inspired by the Javanese
              word "Layar," which means "screen" or "display." At Layaran, we
              transform ordinary event screens into interactive, real-time
              communication platforms. Our solution allows your audience to send
              messages, shoutouts, and requests that are instantly displayed on
              videotrons, projectors, or big screens. Whether it's a wedding, a
              club night, or a corporate event, Layaran enhances audience
              engagement and creates unforgettable moments by bringing messages
              to life on the big screen!
            </p>

            <div className="flex flex-wrap gap-6">
              <ul className="feature-list space-y-3">
                <li className="flex items-center gap-2 text-base">
                  <BsCheckCircleFill className="text-[color:var(--accent-color)] text-xl" />
                  Wedding Party
                </li>
                <li className="flex items-center gap-2 text-base">
                  <BsCheckCircleFill className="text-[color:var(--accent-color)] text-xl" />
                  Diskotik / Club Event
                </li>
              </ul>
              <ul className="feature-list space-y-3">
                <li className="flex items-center gap-2 text-base">
                  <BsCheckCircleFill className="text-[color:var(--accent-color)] text-xl" />
                  Corporate Event
                </li>
                <li className="flex items-center gap-2 text-base">
                  <BsCheckCircleFill className="text-[color:var(--accent-color)] text-xl" />
                  Music Festival
                </li>
              </ul>
            </div>
          </div>

          {/* Image Side */}
          <div className="xl:w-6/12 relative image-wrapper">
            <div className="images relative">
              <Image
                src="/images/about_us.jpeg"
                alt="Business Meeting"
                width={640}
                height={480}
                className="rounded-2xl w-full main-image"
              />
              <Image
                src="/images/about_us_3.jpg"
                alt="Team Discussion"
                width={320}
                height={240}
                className="small-image rounded-2xl hidden md:block"
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "-10%",
                  width: "45%",
                  border: "8px solid var(--surface-color)",
                }}
              />
            </div>

            <div className="experience-badge floating absolute bottom-[5%] right-[5%] bg-[var(--accent-color)] text-[var(--contrast-color)] text-center py-4 px-6 rounded-lg min-w-[200px]">
              <h3 className="text-4xl font-bold leading-tight text-white">
                3+ <span className="text-base ml-1">Years</span>
              </h3>
              <p className="mt-1 text-sm text-white">
                of unforgettable experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
