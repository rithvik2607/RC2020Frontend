import React from 'react';

const JTeam = () => {
  return(
    <div>
      <div className="rounded-2xl dashboardBlue py-16 lg:py-24 lg:px-36">
        <p className="DM700 text-2xl lg:text-5xl text-center text-white mb-2 lg:mb-4 -mt-16">Join Team</p>
        <p className="DM400 text-gray-400 text-base lg:text-xl text-center mb-10 lg:mb-24">Lorem ipsum dolor sit amet</p>
        <div className="rounded-2xl bg-black mx-20 py-6 px-4 lg:px-20">
          <p className="DM400 text-white text-base lg:text-xl block">Enter invite code</p>
          <input className="rounded-lg bg-black block ring-2 h-6 w-40 lg:h-8 lg:w-64 ring-dashboardBlue focus:outline-none text-white"></input><br />
          <button className="dashboardBlue block px-6 py-2 h-10 w-40 lg:h-12 lg:w-64 rounded-lg focus:outline-none DM700 text-base lg:text-xl text-white">
            Join Team
          </button>
        </div>
      </div>
    </div>
  );
}

export default JTeam;