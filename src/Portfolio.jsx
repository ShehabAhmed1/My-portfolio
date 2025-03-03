import { useState } from "react";
import "./Portfolio.css";
import { NavBar } from "./Components/NavBar";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { MyWorks } from "./Components/MyWorks";
import { Feedback } from "./Components/Feedback";
import { Contact } from "./Components/Contact";
import { Questions } from "./Components/Questions";
import { Footer } from "./Components/Footer";
function Portfolio() {
  return (
    <main className="Portfolio">
      <NavBar />
      <Hero />
      <About />
      <MyWorks />
      <Feedback />
      <Questions />
      <Contact />
      <Footer />
    </main>
  );
}

export default Portfolio;
