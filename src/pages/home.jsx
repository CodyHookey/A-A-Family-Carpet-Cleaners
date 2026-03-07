import React from "react";

import HeroSection from "../sections/hero";
import QuickInfo from "../sections/quickInfo";
import ServicesSection from "../sections/services";
import AboutSection from "../sections/about";

class Home extends React.Component {
  render() {
    return (
      <>
        <HeroSection />
        <QuickInfo />
        <ServicesSection />
        <AboutSection />
      </>
    );
  }
}

export default Home;
