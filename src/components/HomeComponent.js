import React from 'react';
import Background from '../bgs/ellipse-1.png';

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  width: "100%"
}

const Header = () => {
  return(
    <section style={sectionStyle} className="container mx-auto">
      <div className="pb-24">
          <div className="lg:flex lg:justify-between mx-16 lg:mx-32 mt-2">
            <img className="lg:h-12 lg:w-60" src="assets/images/logo.png" alt="logo" />
            <a href="#"><div className="hidden lg:block transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer rounded-lg px-8 py-2 rcBlueBg text-white DM400 mt-4 text-justify">Register Now</div></a>
          </div>
          <div className="mx-6 lg:mx-32">
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="300" data-aos-easing="ease-in-out" className="float-right">
              <img className="lg:h-auto lg:w-auto" src="assets/images/laptopKid.png" alt="laptopKid" />
            </div>
            <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="300" className="lg:pt-32">
              <p className="DM400 text-4xl lg:text-5xl text-white mb-4 lg:mb-16">Join one of the<p className="DM700 text-5xl rcBlue">Biggest Competitve Coding</p>event virtually</p>
              <p className="DM400 text-xl text-white text-left lg:mb-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper enim augue et etiam nisi mauris ultricies ut. Est vitae tempus velit non</p>
              <a href="#"><div className="float-left transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer rounded-lg px-16 py-4 rcBlueBg text-white text-2xl DM400 mt-4 text-justify">Register Now</div></a>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Header;