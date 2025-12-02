// src/components/Stats.jsx
import React, { useEffect, useRef } from "react";
import {
  FaUsers,
  FaBiking,
  FaCalendarCheck,
  FaCreditCard,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// القيم النهائية للأرقام
const stats = [
  { icon: <FaUsers />, value: 2245341, label: "Members" },
  { icon: <FaBiking />, value: 46328, label: "Clubs" },
  { icon: <FaCalendarCheck />, value: 828867, label: "Event Bookings" },
  { icon: <FaCreditCard />, value: 1926436, label: "Payments" },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // أنيميشن دخول السكشن (نص + أرقام)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { duration: 0.7, ease: "power3.out" },
      });

      tl.from(".stats-left", { x: -40, opacity: 0 }).from(
        ".stat-item",
        { y: 30, opacity: 0, stagger: 0.15 },
        "-=0.3"
      );

      // تشغيل العدّادات لما السكشن يدخل في الفيو
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          numberRefs.current.forEach((el, index) => {
            if (!el) return;

            const endValue = stats[index].value;
            const obj = { count: 0 };

            gsap.to(obj, {
              count: endValue,
              duration: 2.5, // زمن العداد
              ease: "power3.out", // يبدأ سريع و يبطّأ في الآخر
              onUpdate: () => {
                el.textContent = Math.floor(obj.count).toLocaleString();
              },
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stats-section py-5" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">
          {/* النص على الشمال */}
          <div className="col-lg-5 mb-4 mb-lg-0 stats-left">
            <h2 className="section-title mb-2">
              Helping a local <br />
              <span className="text-nexcent-primary">
                business reinvent itself
              </span>
            </h2>
            <p className="section-subtitle mb-0">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* الأرقام على اليمين */}
          <div className="col-lg-7">
            <div className="row g-4">
              {stats.map((item, index) => (
                <div className="col-6" key={item.label}>
                  <div className="d-flex align-items-center stat-item">
                    <div className="stat-icon me-3">{item.icon}</div>
                    <div>
                      <div
                        className="stat-number"
                        ref={(el) => (numberRefs.current[index] = el)}
                      >
                        0
                      </div>
                      <div className="stat-label">{item.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
