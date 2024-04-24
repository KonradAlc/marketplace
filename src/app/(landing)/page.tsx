import React from "react";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Stats from "./sections/Stats";
import CallToAction from "./sections/CallToAction";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <CallToAction />
    </main>
  );
};

export default LandingPage;
