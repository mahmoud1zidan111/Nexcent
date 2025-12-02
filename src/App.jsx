import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Pixelgrade from "./components/Pixelgrade";
import Stats from "./components/Stats";
import FooterDesign from "./components/FooterDesign";
import CustomerHighlight from "./components/CustomerHighlight";
import BlogSection from "./components/BlogSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Pixelgrade />
      <Stats />
      <FooterDesign />
      <CustomerHighlight />
      <BlogSection />
      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
