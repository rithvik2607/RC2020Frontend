import React from 'react';
import Background from '../bgs/ellipse-1.png';

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat"
}

const Header = () => {
  return(
    <section style={sectionStyle}>
      <div className="pb-24">
          <div className="md:flex md:justify-center lg:justify-between mx-16 lg:mx-32 mt-2">
            <img className="lg:h-12 lg:w-60" src="assets/images/logo.png" alt="logo" />
            <a href="https://reverse-coding-2020.herokuapp.com/auth/google"><div className="hidden lg:block transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer rounded-lg px-8 py-2 rcBlueBg text-white DM400 mt-4 text-justify">Register Now</div></a>
          </div>
          <div className="mx-6 md:mx-16 lg:mx-32">
            <div data-aos="fade-up" data-aos-offset="300" data-aos-delay="50" data-aos-duration="300" data-aos-easing="ease-in-out" className="md:ml-8 lg:ml-0 lg:float-right">
              <img className="lg:h-auto lg:w-auto" src="assets/images/laptopKid.png" alt="laptopKid" />
            </div>
            <div data-aos="fade-up" data-aos-offset="300" data-aos-delay="150" data-aos-duration="300" className="lg:pt-32">
              <p className="DM400 text-4xl lg:text-5xl text-white mb-4 lg:mb-16">Join one of the<p className="DM700 text-5xl rcBlue">Biggest Competitve Coding</p>event virtually</p>
              <p className="DM400 text-xl text-white text-left lg:mb-24">Get ready to participate in one of the most exciting technical events in VIT and compete with the best talent. Reverse engineer your way to success. This is Reverse Coding.</p>
              <a href="https://reverse-coding-2020.herokuapp.com/auth/google"><div className="float-left transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer rounded-lg px-16 py-4 rcBlueBg text-white text-2xl DM400 mt-4 text-justify">Register Now</div></a>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Header;