import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blog1 from "../assets/images/blog-1.svg";
import blog2 from "../assets/images/blog-2.svg";
import blog3 from "../assets/images/blog-3.svg";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    image: blog1,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    linkText: "Readmore",
  },
  {
    image: blog2,
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
    linkText: "Readmore",
  },
  {
    image: blog3,
    title: "Revamping the Membership Model with Triathlon Australia",
    linkText: "Readmore",
  },
];

const BlogSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-card", {
        y: 40,
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
    <section className="blog-section py-5" ref={sectionRef}>
      <div className="container text-center">
        <h2 className="section-title mb-2">Caring is the new marketing</h2>
        <p className="section-subtitle mb-5">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lots
          more.
        </p>

        <div className="row g-4">
          {posts.map((posts, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="blog-card h-100 ">
                <div className="blog-card-image-wrapper">
                  <img
                    src={posts.image}
                    alt={posts.title}
                    className="blog-card-image "
                  />
                </div>
                <div className="blog-card-body ">
                  <h3 className="blog-card-title">{posts.title}</h3>
                  <button
                    type="button"
                    className="blog-card-link btn btn-link p-0"
                  >
                    {posts.linkText} <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
