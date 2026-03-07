import React from "react";

import HeroSection from "../sections/hero";
import QuickInfo from "../sections/quickInfo";

class Home extends React.Component {
  render() {
    return (
      <>
        <HeroSection />
        <QuickInfo />
      </>
    );
  }
}

export default Home;
