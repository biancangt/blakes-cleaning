import React from "react";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      {/* Vídeo Desktop (sem som) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero--video-background desktop-video"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Vídeo Mobile (sem som) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero--video-background-mobile mobile-video"
      >
        <source src="/videos/mobile-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
