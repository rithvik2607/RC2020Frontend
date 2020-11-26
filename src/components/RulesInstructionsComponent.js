import React from 'react';

const RulesInstructions = () => {
  return(
    <div className="py-16 lg:py-24">
      <p  data-aos="fade-left" data-aos-delay="50" data-aos-duration="300" className="rcBlue DM700 text-4xl text-center mb-24">Rules</p>
      <div  data-aos="fade-up" data-aos-delay="150" data-aos-duration="300" className="md:flex justify-evenly mx-32">
        <div>
          <div className="DM500 text-lg lg:text-xl z-10 text-gray-300 mx-auto">A team can have maximum<br />2 participants</div>
          <div className="poppins300 z-0 transform translate-x-20 md:translate-x-40 lg:translate-x-48 -translate-y-20 text-8xl rcBlue opacity-25">01</div>
        </div>
        <div>
          <div className="DM500 text-lg lg:text-xl z-10 text-gray-300 mx-auto">A participant cannot leave<br /> a team once joined</div>
          <div className="poppins300 z-0 transform translate-x-20 md:translate-x-40 lg:translate-x-48 -translate-y-20 text-8xl rcBlue opacity-25">02</div>
        </div>
      </div>
      <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="300" className="rcBlue DM700 text-4xl text-center mt-8 mb-24">Instructions</p>
      <div data-aos="fade-down" data-aos-delay="250" data-aos-duration="300" className="md:flex justify-evenly mx-28 md:mx-auto lg:mx-28">
        <div>
          <div className="DM500 text-lg lg:text-xl z-10 text-gray-300 mx-auto">Register</div>
          <div className="poppins300 z-0 transform translate-x-12 -translate-y-14 md:-translate-y-10 lg:translate-x-12 lg:-translate-y-14 text-8xl md:text-6xl lg:text-8xl rcBlue opacity-25">01</div>
        </div>
        <div>
          <div className="DM500 text-lg lg:text-xl z-10 text-gray-300 mx-auto">Create a team<br />/Join a team</div>
          <div className="poppins300 z-0 transform translate-x-24 -translate-y-20 md:translate-x-20 md:-translate-y-16 lg:translate-x-24 lg:-translate-y-20 text-8xl md:text-6xl lg:text-8xl rcBlue opacity-25">02</div>
        </div>
        <div>
          <div className="DM500 text-lg lg:text-xl z-10 text-gray-300 mx-auto">invite a member<br /> to your team</div>
          <div className="poppins300 z-0 transform translate-x-28 md:translate-x-24 lg:translate-x-32 -translate-y-20 md:-translate-y-16 lg:-translate-y-20 text-8xl md:text-6xl lg:text-8xl rcBlue opacity-25">03</div>
        </div>
        <div>
          <div className="DM500 text-lg lg:text-xl z-10 text-gray-300 mx-auto">Check notifications in <br />your dashboard to join a team.</div>
          <div className="poppins300 z-0 transform translate-x-28 md:translate-x-40 lg:translate-x-56 -translate-y-24 md:-translate-y-16 lg:-translate-y-20 text-8xl md:text-6xl lg:text-8xl rcBlue opacity-25">04</div>
        </div>
      </div>
    </div>
  );
}

export default RulesInstructions;