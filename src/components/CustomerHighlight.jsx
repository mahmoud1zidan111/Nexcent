import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

import customerImg from "../assets/images/image 9.svg";

import logo1 from "../assets/images/Logo (1).svg";
import logo2 from "../assets/images/Logo (2).svg";
import logo3 from "../assets/images/Logo (3).svg";
import logo4 from "../assets/images/Logo (4).svg";
import logo5 from "../assets/images/Logo (5).svg";
import logo6 from "../assets/images/Logo (6).svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const CustomerHighlight = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".customer-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
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
    <section className="customer-section py-5" ref={sectionRef}>
      <div className="container">
        <div className="customer-card row align-items-center g-4">
          <div className="col-md-4 text-center">
            <img
              src={customerImg}
              alt="Customer avatar"
              className="img-fluid customer-main-image w-75"
            />
          </div>

          <div className="col-md-8">
            <p className="customer-text">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>

            <h5 className="customer-name text-nexcent-primary mb-1">
              Tim Smith
            </h5>
            <p className="customer-role mb-4">
              British Dragon Boat Racing Association
            </p>

            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div className="d-flex flex-wrap align-items-center gap-3 customer-logos">
                {logos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="customer-logo"
                  />
                ))}
              </div>

              <button type="button" className="customer-link btn btn-link p-0">
                <span>Meet all customers</span>
                <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerHighlight;
