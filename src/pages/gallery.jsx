import React from "react";

import GalleryWidget from "../components/galleryWidget";
import Contact from "../sections/contact";

class Gallery extends React.Component {
  render() {
    return (
      <>
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
