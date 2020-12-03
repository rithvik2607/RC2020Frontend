import React from 'react'

const RulesInstructions = () => {
  return (
    <div className='py-16 lg:py-24'>
      <p
        data-aos='fade-left'
        data-aos-delay='50'
        data-aos-duration='300'
        className='rcBlue DM700 text-4xl text-center mb-24'
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
            className='DM500 text-base md:text-xl z-10 text-gray-300'
          >
            A team can have maximum
            <br />2 participants
          </div>
          <div 
            className='poppins300 z-0 transform translate-x-16 md:translate-x-48 lg:translate-x-48 -translate-y-14 sm:-translate-y-20 text-7xl sm:text-8xl rcBlue opacity-25'
          >
            01
          </div>
        </div>
        <div>
          <div className='DM500 text-base md:text-xl z-10 text-gray-300'>
            A participant can leave a
            <br /> team before the event starts 
          </div>
          <div className='poppins300 z-0 transform translate-x-16 md:translate-x-48 lg:translate-x-48 -translate-y-14 sm:-translate-y-20 text-7xl sm:text-8xl rcBlue opacity-25'>
            02
          </div>
        </div>
      </div>
      <p
        data-aos='fade-right'
        data-aos-delay='200'
        data-aos-duration='300'
        className='rcBlue DM700 text-4xl text-center mt-8 mb-24'
      >
        Instructions
      </p>
      <div
        data-aos='fade-down'
        data-aos-delay='250'
        data-aos-duration='300'
        className='flex flex-col lg:flex-row justify-evenly items-center lg:items-start'
      >
        <div className='relative my-10 lg:m-0 w-60 lg:w-auto'>
          <div className='DM500 text-base md:text-xl z-10 text-gray-300'>
            Register
          </div>
          <div className='poppins300 z-0 text-7xl sm:text-8xl rcBlue opacity-25 absolute top-0 -mt-8 transform translate-x-24 translate-y-2 sm:translate-x-24 md:translate-x-28 lg:translate-y-0'>
            01
          </div>
        </div>
        <div className='relative my-10 lg:m-0 w-60 lg:w-auto'>
          <div className='DM500 text-base md:text-xl z-10 text-gray-300'>
            Create a team
            <br />
            /Join a team
          </div>
          <div className='poppins300 z-0 text-7xl sm:text-8xl rcBlue opacity-25 absolute top-0 -mt-8 transform translate-x-24 sm:translate-x-24 md:translate-x-28 lg:translate-x-20 translate-y-2 lg:translate-y-0'>
            02
          </div>
        </div>
        <div className='relative my-10 lg:m-0 w-60 lg:w-auto'>
          <div className='DM500 text-base md:text-xl z-10 text-gray-300'>
            Invite a member
            <br /> to your team
          </div>
          <div className='poppins300 z-0 text-7xl sm:text-8xl rcBlue opacity-25 absolute top-0 -mt-8 transform translate-x-24 sm:translate-x-24 md:translate-x-28 lg:translate-x-24 translate-y-2 lg:translate-y-0'>
            03
          </div>
        </div>
        <div className='relative my-10 lg:m-0 w-60y lg:w-auto'>
          <div className='DM500 text-base md:text-xl z-10 text-gray-300'>
            Check notifications in<br />
            your dashboard to join a team.
          </div>
          <div className='poppins300 z-0 text-7xl sm:text-8xl rcBlue opacity-25 absolute top-0 -mt-8 transform translate-x-24 sm:translate-x-24 md:translate-x-32 lg:translate-x-56 translate-y-4 lg:translate-y-0'>
            04
          </div>
        </div>
      </div>
    </div>
  )
}

export default RulesInstructions
