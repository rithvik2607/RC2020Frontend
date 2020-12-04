import axios from 'axios'
import React from 'react'
import Background from '../bgs/ellipse-1.png'

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
}

const Header = () => {

  const logIn = () => {
    window.open(
      'https://reverse-coding-2020.herokuapp.com/auth/google',
      'oauthWindow',
      'height=640,width=400'
      )
  }

  return (
    <section style={sectionStyle}>
      <div className='pb-24'>
        <div className='md:flex md:justify-center lg:justify-between items-center mx-16 lg:mx-32 mt-2'>
          <img
            className='mx-auto lg:m-0 lg:h-12 lg:w-60'
            src='assets/images/logo.svg'
            alt='logo'
          />
          <div onClick={() => logIn()} className='hidden lg:block transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer rounded-lg px-8 py-2 rcBlueBg text-white DM400 text-justify'>
            Register or Sign In
          </div>
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
              className='hidden lg:block mx-auto lg:mx-0'
              src='assets/images/laptopKid.png'
              alt='laptopKid'
            />
          </div>
          <div className='pt-10 lg:pt-32'>
            <p
              className='DM400 text-center lg:text-left text-2xl lg:text-5xl text-white mb-4 lg:mb-16'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-delay='150'
              data-aos-duration='300'
            >
              Join one of the
              <p className='DM700 text-3xl lg:text-5xl rcBlue'>Biggest Competitve Coding</p>
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
            <a
              href='https://reverse-coding-2020.herokuapp.com/auth/google'
              className='mx-auto'
            >
              <div
                onClick={() => logIn()}
                className='block lg:hidden transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer rounded-lg px-6 py-4 rcBlueBg text-white text-base DM400 mt-8 text-center w-48 mx-auto lg:mx-0'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-delay='150'
                data-aos-duration='300'
              >
                Register or Sign In
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
