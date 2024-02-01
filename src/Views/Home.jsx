import React from "react";

import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
// import Construction from "../Components/Construction.jsx";


const Home = () => {
  return (
    <div className="mt-4 flex flex-col lg:mx-auto">
      {/* <Construction /> */}
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
};

export default Home;
