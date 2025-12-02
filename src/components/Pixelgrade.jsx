import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import rafikiImg from "../assets/images/rafiki.svg";

gsap.registerPlugin(ScrollTrigger);

const Pixelgrade = () => {
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
    <section className="feature-section py-5" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">
          {/* الصورة */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center feature-image">
            <img
              src={rafikiImg}
              alt="Spending three years at Pixelgrade "
              className="img-fluid w-50"
            />
          </div>

          {/* النص */}
          <div className="col-lg-6 feature-content">
            <h2 className="section-title mb-3">
              The unseen of spending three <br className="d-none d-md-block" />
              years at Pixelgrade
            </h2>
            <p className="section-subtitle mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn btn-nexcent px-4">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pixelgrade;
