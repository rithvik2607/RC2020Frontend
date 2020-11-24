import React from 'react';

const Leaderboard = () => {
  return(
    <div>
      <div data-aos="fade-left" data-aos-duration="300" className="rounded-2xl dashboardBlue py-24 lg:py-24 pl-2 lg:pl-8 lg:pr-40 lg:pb-64">
        <p className="DM700 text-xl lg:text-3xl text-white mb-4 -mt-16">Leaderboard</p>
        <p className="DM400italic text-gray-400 text-sm lg:text-xl mb-24">“Rank does not confer privilege or give power. It imposes responsibility.”</p>
        <div className="">
          <p className="DM400 text-sm lg:text-xl lg:pl-36 text-white text-center">Please wait for Round 1 to commence</p>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;