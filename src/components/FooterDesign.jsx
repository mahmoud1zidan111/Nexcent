import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import panaImg from "../assets/images/pana.svg";

gsap.registerPlugin(ScrollTrigger);

const FooterDesign = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { duration: 0.7, ease: "power3.out" },
      });

      tl.from(".feature-image", { x: -60, opacity: 0 }).from(
        ".feature-content",
        { x: 60, opacity: 0 },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="feature-section feature-section-alt py-5"
      ref={sectionRef}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* الصورة */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center feature-image">
            <img
              src={panaImg}
              alt="How to design your site footer like we did"
              className="img-fluid w-50"
            />
          </div>

          {/* النص */}
          <div className="col-lg-6 feature-content">
            <h2 className="section-title mb-3">
              How to design your site footer like{" "}
              <br className="d-none d-md-block" />
              we did
            </h2>
            <p className="section-subtitle mb-4">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, porta nisl facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisl eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisl ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn btn-nexcent px-4">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterDesign;
