import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import Background from '../bgs/ellipse-2.png';

import { INFO } from '../dataStore';

import 'react-accessible-accordion/dist/fancy-example.css';

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
}

const FAQ = () => {

  const question = INFO.map((item) => {
    return(
      <AccordionItem data-aos="fade-up" data-aos-delay="150" data-aos-duration="300" key={item.id} className="my-8 mx-8 lg:mx-32">
        <AccordionItemHeading className="">
          <AccordionItemButton className="rounded-lg focus:outline-none transition duration-300 transform translate-y-2 shadow-lg p-2 lg:p-6 DM400 text-sm sm:text-xl accordion__button">
            {item.question}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="rcBlueBg shadow-lg rounded-b-lg text-white DM400 text-sm sm:text-xl p-1 p-4">
          <p>{item.answer}</p>
        </AccordionItemPanel>
      </AccordionItem>
    );
  });


  return(
    <section style={sectionStyle}>
      <div> 
        <div data-aos="fade-down" data-aos-delay="50" data-aos-duration="300" className="rcBlue text-center DM700 text-2xl lg:text-4xl">Frequently Asked Questions</div>
      </div>
      <Accordion allowZeroExpanded={true}>
        {question}
      </Accordion>
      <div className="lg:flex lg:justify-evenly mb-2">
        <a href="https://vit.ac.in/" target="_blank" rel="noopener noreferrer"><img className="my-4 mx-auto lg:mx-0" src="assets/images/vit-white-2.svg" alt="vit" /></a>
        <a href="https://acmvit.in/" target="_blank" rel="noopener noreferrer"><img className="my-4 mx-auto lg:mx-0" src="assets/images/acm-white-2.svg" alt="acm" /></a>
        <div className="flex lg:justify-evenly my-8">
          <a target="_blank" rel="noopener noreferrer" className="px-4 mx-auto lg:m-0" href="https://www.linkedin.com/company/acm-vit-chapter?trk=public_post_share-update_actor-text"><img src="assets/images/link.png" alt="linkedin" /></a>
          <a target="_blank" rel="noopener noreferrer" className="px-4 mx-auto lg:m-0" href="https://twitter.com/ACM_VIT"><img src="assets/images/twit.png" alt="twitter" /></a>
          <a target="_blank" rel="noopener noreferrer" className="px-4 mx-auto lg:m-0" href="https://www.facebook.com/ACM.VITU/?__xts__[0]=68.ARA65dIx9TOCijPmAX4VacMyTDqKi_W8-OAhWA6rA3ZCNc49KYCTCpaM0NtgAqM0oCW8k9YFcdIAYiJ9zLwaf5X1VrK4gkc4a47q1H3Zbk-pyP8PFD-32lIE0FYEM-G0U88_-i5dWkZJO7AYTMNWVWfhOX2eJyCWPqwRlMD8iso2AV8dmLfZzXdi3G6aQsU8kqpm7c0RrfbWkxILzt7DA6-gzl_Onl-GiXTtW5OAvMXHgqbctIxp776o5M9vLijshxUEX6RbqYKCoz1wlWDEukwdKLIVCAx0i6A8WkzWCNB753qsRVyu6bRXpKOQibzqdHgBgj38Ht7DTtEWIXBF"><img src="assets/images/facebook.png" alt="fb" /></a>
          <a target="_blank" rel="noopener noreferrer" className="px-4 mx-auto lg:m-0" href="https://www.instagram.com/acmvit/"><img src="assets/images/instagram.png" alt="ig" /></a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;