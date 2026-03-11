import React from "react";

import HeroSection from "../sections/hero";
import QuickInfo from "../sections/quickInfo";
import ServicesSection from "../sections/services";
import AboutSection from "../sections/about";
import Referral from "../sections/whyChooseUs";
import Contact from "../sections/contact";
import Testimonials from "../sections/testimonials";

class Home extends React.Component {
  render() {
    return (
      <>
        <HeroSection />
        <QuickInfo />
        <ServicesSection />
        <Testimonials />
        <AboutSection />
        <Referral />
        <Contact />
      </>
    );
  }
}

export default Home;
