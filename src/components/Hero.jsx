import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImg from "../assets/images/Illustration.svg";

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: "power3.out" },
      });

      tl.from(".hero-title", { y: 30, opacity: 0 })
        .from(".hero-subtitle", { y: 20, opacity: 0 }, "-=0.5")
        .from(".hero-section .btn-nexcent", { y: 20, opacity: 0 }, "-=0.4")
        .from(".hero-image", { x: 60, opacity: 0 }, "-=0.7");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="hero-section d-flex align-items-center"
      ref={sectionRef}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* النص */}
          <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
            <h1 className="hero-title mb-3">
              Lessons and insights <br />
              <span>from 8 years</span>
            </h1>
            <p className="hero-subtitle mb-4">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="btn btn-nexcent px-4">Register</button>
          </div>

          {/* الصورة */}
          <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0 text-center">
            <img
              src={heroImg}
              alt="Lessons and insights illustration"
              className="img-fluid hero-image w-50"
            />
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <span className="hero-dot hero-dot-active"></span>
          <span className="hero-dot"></span>
          <span className="hero-dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
