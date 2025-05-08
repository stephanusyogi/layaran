import React from "react";

export default function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="relative h-[400px] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/images/parallax.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Content */}
      <div
        className="relative z-[2] px-4 py-12 text-center text-white max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
          Make Your Event Unforgettable <br />
          with Live Chat on the Big Screen!
        </h3>
        <p className="text-sm sm:text-base md:text-lg mb-6 max-w-xl mx-auto">
          Transform your event into a truly interactive experience. Engage your
          audience with real-time messages, shoutouts, and more – all displayed
          live on videotrons or projectors!
        </p>
      </div>
    </section>
  );
}
