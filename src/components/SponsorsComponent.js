import React from 'react';

const Sponsors = () => {
  return(
    <div>
      <p data-aos="fade-down" data-aos-delay="50" data-aos-duration="300" className="rcBlue text-center DM700 text-4xl mb-0 sm:mb-10 lg:mb-24 mt-24 md:mt-28 lg:mt-32 lg:text-4xl">Sponsors</p>
      <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="300"  className="lg:flex lg:items-center lg:justify-center lg:space-x-14">
        <a target="_blank" rel="noopener noreferrer" href="https://repl.it/"><img className="h-16 w-48 mx-auto my-4 lg:my-0" src="assets/images/replitLight.svg" alt="replit" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.codeasylums.com/"><img className="h-28 w-48 mx-auto my-4 lg:my-0" src="assets/images/codeAsylums.png" alt="codeAsylums" /></a>
        <a target="_blank" rel="noopener noreferrer" href="http://www.recoverads.in/"><img className="h-12 w-48 mx-auto my-4 lg:my-0 lg:mt-4" src="assets/images/recoverads.png" alt="recoverads" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://uaceit.com/"><img className="h-16 w-48 mx-auto my-4 lg:my-0" src="assets/images/uaceit.svg" alt="uaceit" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://classroom.ltd/"><p className="text-3xl text-center mx-auto my-4 lg:my-0 sponsor">Class<p className="room inline">Room</p></p></a>
      </div>
    </div>
  );
}

export default Sponsors;