import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { FaUsers } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";

import logo1 from "../assets/images/Logo (1).svg";
import logo2 from "../assets/images/Logo (2).svg";
import logo3 from "../assets/images/Logo (3).svg";
import logo4 from "../assets/images/Logo (4).svg";
import logo5 from "../assets/images/Logo (5).svg";
import logo6 from "../assets/images/Logo (6).svg";

const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

const cards = [
  {
    icon: <FaUsers />,
    title: "Membership Organisations",
    text: "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    icon: <MdApartment />,
    title: "National Associations",
    text: "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    icon: <FaPeopleGroup />,
    title: "Clubs And Groups",
    text: "Our membership management software provides full automation of membership renewals and payments.",
  },
];

const Clients = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { duration: 0.6, ease: "power3.out" },
      });

      tl.from(".section-title", { y: 20, opacity: 0 })
        .from(".section-subtitle", { y: 20, opacity: 0 }, "-=0.4")
        .from(".client-logo", { y: 20, opacity: 0, stagger: 0.1 }, "-=0.2")
        .from(".client-card", { y: 30, opacity: 0, stagger: 0.15 }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="clients-section py-5" ref={sectionRef}>
      <div className="container text-center">
        <h2 className="section-title mb-2">Our Clients</h2>
        <p className="section-subtitle mb-4">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="row justify-content-center align-items-center g-4 mb-5">
          {clientLogos.map((logo, index) => (
            <div
              className="col-4 col-md-2 d-flex justify-content-center"
              key={index}
            >
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="img-fluid client-logo"
              />
            </div>
          ))}
        </div>

        <h2 className="section-title mb-2">
          Manage your entire community <br className="d-none d-md-block" />
          in a single system
        </h2>
        <p className="section-subtitle mb-5">Who is Nexcent suitable for?</p>

        <div className="row g-4">
          {cards.map((card, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="client-card h-100 p-4 text-center">
                <div className="client-card-icon mb-3">{card.icon}</div>
                <h3 className="client-card-title mb-2">{card.title}</h3>
                <p className="client-card-text mb-0">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
