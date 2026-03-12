import React from "react";
import { Helmet } from "react-helmet-async";

import GalleryWidget from "../components/galleryWidget";
import Contact from "../sections/contact";

class Gallery extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>
            Our Carpet Cleaning Results | Before & After | A&A Family Carpet
            Cleaners
          </title>

          <meta
            name="description"
            content="See real before and after results from our professional carpet and upholstery cleaning services across Bedford, Northampton and Milton Keynes."
          />

          <meta name="robots" content="index, follow" />

          <meta
            property="og:title"
            content="Before & After Carpet Cleaning Results | A&A Family Carpet Cleaners"
          />
          <meta
            property="og:description"
            content="Real cleaning results from carpets, sofas and upholstery cleaned across Bedford, Northampton and Milton Keynes."
          />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Carpet Cleaning Results | A&A Family Carpet Cleaners"
          />
          <meta
            name="twitter:description"
            content="View real before and after carpet cleaning results from our professional family-run cleaning service."
          />
        </Helmet>
        <div className="container py-5 mb-5">
          <h1 className="fw-bold text-center">Our Work</h1>
          <h5 className="text-center">
            See the difference our professional cleaning can make. Browse our
            before and after photos to see how we restore carpets, sofas, and
            upholstery to their best condition.
          </h5>
        </div>
        <GalleryWidget />
        <Contact />
      </>
    );
  }
}

export default Gallery;
