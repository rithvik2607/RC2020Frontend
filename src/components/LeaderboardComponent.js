import React from 'react';

const Leaderboard = () => {

  const rank = () => {
    return(
    <div>
      <p className="DM700 text-white text-xl">1</p>
      <p className="DM700 text-white text-xl">Alpha</p>
      <p className="DM700 text-white text-xl">32</p>
    </div>
    );
  }

  return(
    <div>
      <div className="rounded-2xl dashboardBlue py-20 lg:py-24 pl-2 lg:pl-8 lg:pr-36 lg:pb-64">
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