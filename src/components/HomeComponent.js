import React from 'react'
import Background from '../bgs/ellipse-1.png'

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
}

const Header = () => {
  return (
    <section style={sectionStyle}>
      <div className='pb-10 sm:pb-24'>
        <div className='md:flex md:justify-center lg:justify-between items-center mx-16 lg:mx-32 pt-4'>
          <img
            className='mx-auto lg:m-0 lg:h-12 lg:w-60'
            src='assets/images/logo.svg'
            alt='logo'
          />
        </div>
        <div className='mx-6 md:mx-16 lg:mx-32'>
          <div
            data-aos='fade-up'
            data-aos-offset='300'
            data-aos-delay='50'
            data-aos-duration='300'
            data-aos-easing='ease-in-out'
            className='md:ml-8 lg:ml-0 lg:float-right'
          >
            <img
              className='block mx-auto lg:mx-0'
              src='assets/images/laptopKid.png'
              alt='laptopKid'
            />
          </div>
          <div className='pt-2 sm:pt-32'>
            <p
              className='DM400 text-center lg:text-left text-2xl lg:text-5xl text-white mb-4 lg:mb-16'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-delay='150'
              data-aos-duration='300'
            >
              Join one of the
              <p className='DM700 text-3xl lg:text-5xl rcBlue'>
                Biggest Competitive Coding
              </p>
              event virtually
            </p>
            <p
              className='DM400 text-center lg:text-left text-base text-xl text-white lg:mb-24'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-delay='150'
              data-aos-duration='300'
            >
              Get ready to participate in one of the most exciting technical
              events in VIT and compete with the best talent. Reverse engineer
              your way to success. This is Reverse Coding.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
