import React from 'react';

const Leaderboard = () => {
  return(
    <div>
      <div className="rounded-2xl dashboardBlue py-24 pl-2 md:pl-4 lg:pl-8 lg:pr-40 md:pb-36 lg:pb-64">
        <p className="DM700 text-xl md:text-2xl lg:text-3xl text-white mb-4 -mt-16">Leaderboard</p>
        <p className="DM400italic text-gray-400 text-sm md:text-base lg:text-xl mb-24">“Rank does not confer privilege or give power. It imposes responsibility.”</p>
        <div className="">
          <p className="DM400 text-sm md:text-base lg:text-xl lg:pl-36 text-white text-center">Please wait till Round 1 commences</p>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;