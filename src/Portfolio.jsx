import { useState } from "react";
import "./Portfolio.css";
import { NavBar } from "./Components/NavBar";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { MyWorks } from "./Components/MyWorks";
import { Feedback } from "./Components/Feedback";
import Pricing from "./Components/Pricing";
import { Contact } from "./Components/Contact";
import { Questions } from "./Components/Questions";
import { Footer } from "./Components/Footer";
import { PortfolioProvider } from "./context/contextApi";
function Portfolio() {
  return (
    <PortfolioProvider>
      <main className="Portfolio">
        <NavBar />
        <Hero />
        <About />
        <MyWorks />
        <Feedback />
        <Pricing />
        <Questions />
        <Contact />
        <Footer />
      </main>
    </PortfolioProvider>
  );
}

export default Portfolio;
