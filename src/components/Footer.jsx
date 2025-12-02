// src/components/Footer.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// تفعيل ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// نفس الأيقونة اللي في الـ Navbar
import logo from "../assets/images/Icon.svg";

import {
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%", // أول ما الفوتر يطلع في آخر الصفحة
          once: true, // مرة واحدة بس
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer py-5" ref={footerRef}>
      <div className="container">
        <div className="row gy-4">
          {/* الشمال: اللوجو + حقوق النشر + السوشيال */}
          <div className="col-md-4">
            <a
              href="#"
              className="d-flex align-items-center gap-2 mb-3 text-decoration-none"
            >
              <img src={logo} alt="Nexcent logo" width="32" height="32" />
              <span className="footer-brand">Nexcent</span>
            </a>

            <p className="footer-text mb-1">Copyright © 2020 Landify UI Kit.</p>
            <p className="footer-text mb-3">All rights reserved</p>

            <div className="d-flex gap-2">
              <a href="#" className="footer-social">
                <FaInstagram />
              </a>
              <a href="#" className="footer-social">
                <FaDribbble />
              </a>
              <a href="#" className="footer-social">
                <FaTwitter />
              </a>
              <a href="#" className="footer-social">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading">Company</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading">Support</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>

          {/* Stay up to date */}
          <div className="col-md-4">
            <h6 className="footer-heading">Stay up to date</h6>
            <form className="mt-3">
              <div className="footer-input-wrapper">
                <input
                  type="email"
                  className="form-control footer-input"
                  placeholder="Your email address"
                />
                <button type="submit" className="footer-input-icon">
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
