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

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      joinTeamOpen: true,
      createTeamOpen: false,
      leaderboardOpen: false
    };

    this.setJoinTeamOpen = this.setJoinTeamOpen.bind(this);
    this.setCreateTeamOpen = this.setCreateTeamOpen.bind(this);
    this.setLeaderboardOpen = this.setLeaderboardOpen.bind(this);
  }

  setJoinTeamOpen() {
    this.setState(state => ({
      joinTeamOpen: true,
      createTeamOpen: false,
      leaderboardOpen: false
    }));
  }

  setCreateTeamOpen() {
    this.setState(state => ({
      joinTeamOpen: false,
      createTeamOpen: true,
      leaderboardOpen: false
    }));
  }

  setLeaderboardOpen() {
    this.setState(state => ({
      joinTeamOpen: false,
      createTeamOpen: false,
      leaderboardOpen: true
    }));
  }

  render() {
    return(
      <section style={sectionStyle} className="container mx-auto">
        <div className="flex justify-between mx-6 lg:mx-32 mt-2">
          <img className="lg:h-12 lg:w-60" src="assets/images/logo.png" alt="logo" />
          <a href="#"><div className="hidden lg:block transition duration-300 ease=in-out transform hover:scale-110 cursor-pointer rounded-lg px-8 py-2 dashboardBlue text-white DM400 mt-4 text-justify">Logout</div></a>
        </div>
        <div className="flex justify-between mx-6 lg:mx-32 mt-8">
          <div>
            <p className="text-white DM400 text-lg lg:text-3xl">Team</p>
            <p className="text-gray-500 DM700 text-2xl lg:text-5xl">Unknown</p>
          </div>
          <div>
            <p className="text-white DM400 text-lg lg:text-3xl">Position</p>
            <p className="text-gray-500 DM700 text-2xl lg:text-5xl">Unknown</p>
          </div>
          <div>
            <p className="text-white DM400 text-lg lg:text-3xl">Score</p>
            <p className="text-white DM700 text-2xl lg:text-5xl">0</p>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:mt-8 mx-6 lg:mx-32">
          <div className="lg:col-span-1">
            <div>
              <div className="lg:mb-8">
                <p className="DM700 text-lg lg:text-3xl text-white mb-4">Members</p>
                <p className="DM400 text-base lg:text-xl text-gray-500">None</p>
              </div>
              <div className="">
                <p className="DM700 text-lg lg:text-3xl text-white mb-4">Team Code</p>
                <p className="DM400 text-base lg:text-xl text-white mb-4">Unknown</p>
                <p className="DM400 text-xs lg:text-sm text-gray-500">Join or create team for<br /> more info</p>
              </div>
              <div>
                <div className="inline">
                  <button 
                    onClick ={this.setJoinTeamOpen}
                    className="dashboardBlue px-2 lg:px-10 py-2 rounded-2xl focus:outline-none my-4 DM700 text-base lg:text-2xl text-white">
                    <img className="hidden lg:inline pr-4 mb-2" src="assets/images/join-team.png" alt="join-team" />
                    Join Team
                  </button>
                </div>
                <div className="inline">
                  <button 
                    onClick ={this.setCreateTeamOpen}
                    className="dashboardBlue px-2 lg:px-6 py-2 rounded-2xl focus:outline-none my-4 DM700 text-base lg:text-2xl text-white">
                    <img className="hidden lg:inline pr-4 mb-2" src="assets/images/create-team.png" alt="create-team" />
                    Create Team
                  </button>
                </div>
                <div className="inline">
                  <button
                    onClick ={this.setLeaderboardOpen}
                    className="dashboardBlue px-2 lg:px-6 py-2 rounded-2xl focus:outline-none my-4 DM700 text-base lg:text-2xl text-white">
                    <img className="hidden lg:inline pr-4 mb-2" src="assets/images/leaderboard.png" alt="leaderboard" />
                    Leaderboard
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 -ml-4">
            <div className={(this.state.joinTeamOpen ? "flex" : "hidden")}>
              <JTeam />
            </div>
            <div className={(this.state.createTeamOpen ? "flex" : "hidden")}>
              <CTeam />
            </div>
            <div className={(this.state.leaderboardOpen ? "flex" : "hidden")}>
              <Leaderboard />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Dashboard;