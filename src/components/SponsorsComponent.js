import React from 'react';

const Sponsors = () => {
  return(
    <div>
      <p className="rcBlue text-center DM700 text-2xl mb-0 sm:mb-10 md:mb-24 lg:text-4xl">Sponsors</p>
      <div className="flex sm:justify-evenly">
        <a href="#"><img className="h-16 w-48" src="assets/images/replitLight.svg" alt="replit" /></a>
        <a href="#"><img className="h-28 w-48" src="assets/images/codeAsylums.png" alt="codeAsylums" /></a>
        <a href="#"><img className="h-12 w-48" src="assets/images/recoverads.png" alt="recoverads" /></a>
        <a href="#"><img className="h-16 w-48" src="assets/images/uaceit.png" alt="uaceit" /></a>
        <a href="#"><img className="hidden" src="" alt="" /></a>
      </div>
    </div>
  );
}

export default Sponsors;