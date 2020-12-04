import React from 'react'

const RulesInstructions = () => {
  return (
    <div className='py-10 lg:py-32'>
      <p
        data-aos='fade-left'
        data-aos-delay='50'
        data-aos-duration='300'
        className='rcBlue DM700 text-4xl text-center mb-4 sm:mb-24'
      >
        Rules
      </p>
      <div
        data-aos='fade-up'
        data-aos-delay='150'
        data-aos-duration='300'
        className='flex flex-col lg:flex-row justify-evenly items-center mx-10 sm:mx-32'
      >
        <div>
          <div 
            className='DM500 my-4 sm:my-0 text-base md:text-xl z-10 text-gray-300'
          >
            <div 
              className='sm:hidden poppins300 text-3xl sm:text-8xl rcBlue'
            >
              01
            </div>
            A team can have maximum
            <br />2 participants
          </div>
          <div 
            className='hidden sm:block poppins300 z-0 transform translate-x-20 md:translate-x-48 lg:translate-x-48 -translate-y-16 sm:-translate-y-20 text-3xl sm:text-8xl rcBlue opacity-25'
          >
            01
          </div>
        </div>
        <div>
          <div className='DM500 my-4 sm:my-0 text-base md:text-xl z-10 text-gray-300'>
            <div 
              className='sm:hidden poppins300 text-3xl sm:text-8xl rcBlue'
            >
              02
            </div>
            A participant can leave a
            <br /> team before the event starts 
          </div>
          <div className='hidden sm:block poppins300 z-0 transform translate-x-20 md:translate-x-48 lg:translate-x-48 -translate-y-16 sm:-translate-y-20 text-4xl sm:text-8xl rcBlue opacity-25'>
            02
          </div>
        </div>
      </div>
      <p
        data-aos='fade-right'
        data-aos-delay='200'
        data-aos-duration='300'
        className='rcBlue DM700 text-4xl text-center mb-4 mt-8 sm:mb-24'
      >
        Instructions
      </p>
      <div
        data-aos='fade-down'
        data-aos-delay='250'
        data-aos-duration='300'
        className='flex flex-col lg:flex-row justify-evenly items-center sm:mx-0 lg:items-start'
      >
        <div className='relative my-4 sm:my-10 lg:m-0 w-60 lg:w-auto'>
          <div className='DM500 mx-4 sm:mx-0 text-justify text-base md:text-xl z-10 text-gray-300'>
            <div 
              className='sm:hidden poppins300 text-3xl sm:text-8xl rcBlue'
            >
              01
            </div>
            Register
          </div>
          <div className='hidden sm:block poppins300 z-0 text-3xl sm:text-7xl sm:text-8xl rcBlue opacity-25 absolute top-0 -mt-8 transform translate-x-24 translate-y-2 sm:translate-x-18 md:translate-x-20 lg:translate-x-12 lg:translate-y-0'>
            01
          </div>
        </div>
        <div className='relative my-4 sm:my-10 lg:m-0 w-60 lg:w-auto'>
          <div className='DM500 mx-4 sm:mx-0 text-justify text-base md:text-xl z-10 text-gray-300'>
            <div 
              className='sm:hidden poppins300 text-3xl sm:text-8xl rcBlue'
            >
              02
            </div>
            Create a team
            <br />
            /Join a team
          </div>
          <div className='hidden sm:block poppins300 z-0 text-3xl sm:text-7xl sm:text-8xl rcBlue opacity-25 absolute top-0 -mt-8 transform translate-x-24 sm:translate-x-18 md:translate-x-20 lg:translate-x-20 translate-y-2 lg:translate-y-0'>
            02
          </div>
        </div>
        <div className='relative my-4 sm:my-10 lg:m-0 w-60 lg:w-auto'>
          <div className='DM500 mx-4 sm:mx-0 text-justify text-base md:text-xl z-10 text-gray-300'>
            <div 
              className='sm:hidden poppins300 text-3xl sm:text-8xl rcBlue'
            >
              03
            </div>
            Invite a member
            <br /> to your team
          </div>
          <div className='hidden sm:block poppins300 z-0 text-3xl sm:text-7xl sm:text-8xl rcBlue opacity-25 absolute top-0 -mt-8 transform translate-x-24 sm:translate-x-18 md:translate-x-20 lg:translate-x-24 translate-y-2 lg:translate-y-0'>
            03
          </div>
        </div>
        <div className='relative my-4 sm:my-10 lg:m-0 w-60y lg:w-auto'>
          <div className='DM500 mx-14 sm:mx-0 text-justify text-base md:text-xl z-10 text-gray-300'>
            <div 
              className='sm:hidden poppins300 text-3xl sm:text-8xl rcBlue'
            >
              04
            </div>
            Check notifications in<br />
            your dashboard to join a team.
          </div>
          <div className='hidden sm:block poppins300 z-0 text-3xl sm:text-7xl sm:text-8xl rcBlue opacity-25 absolute top-0 -mt-8 transform translate-x-24 sm:translate-x-18 md:translate-x-24 lg:translate-x-56 translate-y-4 lg:translate-y-0'>
            04
          </div>
        </div>
      </div>
    </div>
  )
}

export default RulesInstructions
