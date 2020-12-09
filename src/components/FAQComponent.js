import React,{ useState } from 'react';
import Background from '../bgs/ellipse-2.png';
import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel
} from 'react-accordion-with-header';


import { INFO } from '../dataStore';
import Sponsors from './SponsorsComponent';

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0px top 10px",
}

const FAQ = () => {
  var [p, setP] = useState(undefined);

  const actionCallback = (panels, state) => {
    // fires any time headers are clicked and panels change state
    // receives array of panels: [{ panel: 3, open: true }, { panel: 6, open: true }]
    // and the AccordionWithHeader state
    setP(p = state.active[0]);
  }

  const question = INFO.map((item) => {
    return(
      <AccordionNode key={item.id} className="my-4 mx-8 sm:16 md:mx-32 lg:mx-48">
        <AccordionHeader
         className=" accordionHeader"
         horizontalAlignment="spaceBetween"
        >
          <div className="text-white py-1 rounded-lg DM400 text-base lg:text-xl md:ml-6">
            {item.question}
          </div>
          <img className="float-right" src={(item.id === p ) ? "assets/images/close.svg" : "assets/images/open.svg"} alt="arrow" />
        </AccordionHeader>
        <AccordionPanel className="py-4">
          <div className="rcBlueBg rounded-lg text-white DM400 text-base px-2 sm:px-8 py-1 sm:text-xl">{item.answer}</div>
        </AccordionPanel>
      </AccordionNode>
    );
  });


  return(
    <div>
      <section style={sectionStyle} className="pt-10 sm:pt-16">
        <div> 
          <div data-aos="fade-down" data-aos-delay="50" data-aos-duration="300" className="rcBlue text-center DM700 text-3xl mb-0 sm:mb-10 md:mb-24 lg:text-4xl">Frequently Asked Questions</div>
        </div>
        <div
          data-aos="fade-up" 
          data-aos-delay="150" 
          data-aos-duration="300" 
        >
          <AccordionWithHeader 
            actionCallback={actionCallback}
            speed={100}
            style={{marginBottom: 'none'}}
          >
            {question}
          </AccordionWithHeader>
        </div>
      </section>
      <div>
        <Sponsors />
      </div>
      <div className="lg:flex lg:justify-evenly mt-16 mb-2">
        <a href="https://vit.ac.in/" target="_blank" rel="noopener noreferrer"><img className="my-4 h-16 w-48 mx-auto lg:mx-0" src="assets/images/vit-white-2.svg" alt="vit" /></a>
        <a href="https://acmvit.in/" target="_blank" rel="noopener noreferrer"><img className="my-4 h-16 w-48 mx-auto lg:mx-0" src="assets/images/acm-white-2.svg" alt="acm" /></a>
        <div className="flex lg:justify-evenly my-8">
          <a target="_blank" rel="noopener noreferrer" className="px-4 mx-auto lg:m-0" href="https://www.linkedin.com/company/acm-vit-chapter?trk=public_post_share-update_actor-text"><img src="assets/images/link.svg" alt="linkedin" /></a>
          <a target="_blank" rel="noopener noreferrer" className="px-4 mx-auto lg:m-0" href="https://twitter.com/ACM_VIT"><img src="assets/images/twit.svg" alt="twitter" /></a>
          <a target="_blank" rel="noopener noreferrer" className="px-4 mx-auto lg:m-0" href="https://www.facebook.com/ACM.VITU/?__xts__[0]=68.ARA65dIx9TOCijPmAX4VacMyTDqKi_W8-OAhWA6rA3ZCNc49KYCTCpaM0NtgAqM0oCW8k9YFcdIAYiJ9zLwaf5X1VrK4gkc4a47q1H3Zbk-pyP8PFD-32lIE0FYEM-G0U88_-i5dWkZJO7AYTMNWVWfhOX2eJyCWPqwRlMD8iso2AV8dmLfZzXdi3G6aQsU8kqpm7c0RrfbWkxILzt7DA6-gzl_Onl-GiXTtW5OAvMXHgqbctIxp776o5M9vLijshxUEX6RbqYKCoz1wlWDEukwdKLIVCAx0i6A8WkzWCNB753qsRVyu6bRXpKOQibzqdHgBgj38Ht7DTtEWIXBF"><img src="assets/images/facebook.svg" alt="fb" /></a>
          <a target="_blank" rel="noopener noreferrer" className="px-4 mx-auto lg:m-0" href="https://www.instagram.com/acmvit/"><img src="assets/images/instagram.svg" alt="ig" /></a>
        </div>
      </div>
    </div>
  );
}

export default FAQ;