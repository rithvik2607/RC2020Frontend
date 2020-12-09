import React from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import RulesInstructions from './RulesInstructionsComponent';
import FAQ from './FAQComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

const Main = () => {
  return(
    <div className="overflow-hidden">
      <Home />
      <About />
      <RulesInstructions />
      <FAQ />
    </div>
  );
}

export default Main;