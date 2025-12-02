import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CtaSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([".cta-title", ".cta-section .btn-nexcent"], {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta-section py-5" ref={sectionRef}>
      <div className="container text-center">
        <h2 className="cta-title mb-4">
          Pellentesque suscipit <br className="d-none d-md-block" />
          fringilla libero eu.
        </h2>

        <button className="btn btn-nexcent px-4">Get a Demo →</button>
      </div>
    </section>
  );
};

export default CtaSection;
