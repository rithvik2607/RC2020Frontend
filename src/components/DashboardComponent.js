import React, { Component } from 'react';
import Background from '../bgs/ellipse-1.png';

import CTeam from './CreateTeamComponent';
import JTeam from './JoinTeamComponent';
import Leaderboard from './LeaderboardComponent';

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  width: "100%"
}

const Dashboard = () => {
  const [joinTeamOpen, setJoinTeamOpen] = React.useState(true);
  const [createTeamOpen, setCreateTeamOpen] = React.useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = React.useState(false);
  return(
    <section style={sectionStyle} className="container mx-auto">
      <div className="flex justify-between mx-32 mt-2">
        <img className="lg:h-12 lg:w-60" src="assets/images/logo.png" alt="logo" />
        <a href="#"><div className="transition duration-300 ease=in-out transform hover:scale-110 cursor-pointer rounded-lg px-8 py-2 dashboardBlue text-white DM400 mt-4 text-justify">Logout</div></a>
      </div>
      <div className="flex justify-between mx-32 mt-8">
        <div>
          <p className="text-white DM400 text-3xl">Team</p>
          <p className="text-gray-500 DM700 text-5xl">Unknown</p>
        </div>
        <div>
          <p className="text-white DM400 text-3xl">Position</p>
          <p className="text-gray-500 DM700 text-5xl">Unknown</p>
        </div>
        <div>
          <p className="text-white DM400 text-3xl">Score</p>
          <p className="text-white DM700 text-5xl">0</p>
        </div>
      </div>
      <div className="mx-32 mt-8">
        <div>
          <div className="mb-8">
            <p className="DM700 text-3xl text-white mb-4">Members</p>
            <p className="DM400 text-xl text-gray-500">None</p>
          </div>
          <div>
            <p className="DM700 text-3xl text-white mb-4">Team Code</p>
            <p className="DM400 text-xl text-white mb-4">Unknown</p>
            <p className="DM400 text-sm text-gray-500">Join or create team for<br /> more info</p>
          </div>
          <div>
            <div>
              <button 
                onClick ={() => setJoinTeamOpen(joinTeamOpen === true && createTeamOpen === false && leaderboardOpen === false)}
                className="dashboardBlue px-6 py-2 rounded-full focus:outline-none my-4 DM700 text-2xl text-white">
                <img className="inline pr-4 mb-2" src="assets/images/join-team.png" alt="join-team" />
                Join Team
              </button>
            </div>
            <div>
              <button 
                onClick ={() => setCreateTeamOpen(createTeamOpen === true && joinTeamOpen === false && leaderboardOpen === false)}
                className="dashboardBlue px-6 py-2 rounded-full focus:outline-none my-4 DM700 text-2xl text-white">
                <img className="inline pr-4 mb-2" src="assets/images/create-team.png" alt="create-team" />
                Create Team
              </button>
            </div>
            <div>
              <button
                onClick ={() => setLeaderboardOpen(leaderboardOpen === true && joinTeamOpen === false && createTeamOpen === false)}
                className="dashboardBlue px-6 py-2 rounded-full focus:outline-none my-4 DM700 text-2xl text-white">
                <img className="inline pr-4 mb-2" src="assets/images/leaderboard.png" alt="leaderboard" />
                Leaderboard
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={(joinTeamOpen ? "flex" : "hidden") + ""}>
        <JTeam />
      </div>
      <div className={(createTeamOpen ? "flex" : "hidden") + ""}>
        <CTeam />
      </div>
      <div className={(leaderboardOpen ? "flex" : "hidden") + ""}>
        <Leaderboard />
      </div>
    </section>
  );
}
export default Dashboard;