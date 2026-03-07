import React from "react";

import HeroSection from "../sections/hero";
import QuickInfo from "../sections/quickInfo";
import ServicesSection from "../sections/services";
import AboutSection from "../sections/about";
import Referral from "../sections/whyChooseUs";

class Home extends React.Component {
  render() {
    return (
      <>
        <HeroSection />
        <QuickInfo />
        <ServicesSection />
        <AboutSection />
        <Referral />
      </>
    );
  }
}

export default Home;
