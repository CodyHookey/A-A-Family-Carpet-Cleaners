import React from "react";
import { Helmet } from "react-helmet-async";

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
        <Helmet>
          <title>
            Carpet Cleaning Bedford, Northampton & Milton Keynes | A&A Family
            Carpet Cleaners
          </title>

          <meta
            name="description"
            content="Professional carpet, sofa and upholstery cleaning in Bedford, Northampton and Milton Keynes. Family-run service removing stains, dirt and odours for a fresher home."
          />

          <meta
            name="keywords"
            content="carpet cleaning Bedford, carpet cleaning Northampton, carpet cleaning Milton Keynes, upholstery cleaning Bedford, sofa cleaning Bedford, mattress cleaning Bedford"
          />

          <meta name="robots" content="index, follow" />

          <meta
            property="og:title"
            content="Professional Carpet Cleaning | A&A Family Carpet Cleaners"
          />
          <meta
            property="og:description"
            content="Expert carpet, sofa and upholstery cleaning across Bedford, Northampton and Milton Keynes."
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="A&A Family Carpet Cleaners" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Professional Carpet Cleaning Bedford, Northampton & Milton Keynes"
          />
          <meta
            name="twitter:description"
            content="Family-run carpet and upholstery cleaning service delivering deep cleaning and fresh results."
          />
        </Helmet>
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
