import React, { Component } from 'react';
import Background from '../bgs/ellipse-1.png';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';
import CTeam from './CreateTeamComponent';
import JTeam from './JoinTeamComponent';
import Leaderboard from './LeaderboardComponent';

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  width: "100%"
}

let url = new URL(window.location);
let authToken = url.searchParams.get("token");

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      joinTeamOpen: true,
      createTeamOpen: false,
      leaderboardOpen: false,
      teamName: 'Unknown',
      score: 0,
      teamMate: '',
      teamID: 'Unknown',
      name: ''
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

  copyToClipboard = (e) => {
    this.textarea.select();
    document.execCommand('copy');
    e.target.focus();
  }

  logout = () => {
    axios({
      method: 'get',
      url: '/logout',
      baseURL: baseUrl,
      headers: { 'auth-token': authToken }
    })
      .then((response) => {
        document.location.href = "https://acm-reverse-coding.web.app/";
      }, (err) => {
        return(
          <div className="DM400 text-white text-center text-xl transition duration-300 ease-in-out opacity">
            {err}
          </div>
        );
      });
  }

  render() {

    axios({
      method: 'get',
      url: '/team/showteam',
      baseURL: baseUrl, 
      headers: { 'auth-token': authToken }
    })
      .then((response) => {
        this.setState({
        teamName: response.data.teamName,
        score: response.data.score,
        teamMate: response.data.teammateName,
        teamID: response.data.TeamID,
        name: response.data.name
        });
      }, (err) => {
        console.log(err);
      });

    return(
      <section style={sectionStyle} className="container mx-auto">
        <div className="flex justify-between mx-6 lg:mx-32 mt-2">
          <img className="lg:h-12 lg:w-60" src="assets/images/logo.png" alt="logo" />
          <button onClick={this.logout} className="hidden md:block transition duration-300 ease=in-out transform hover:scale-110 cursor-pointer rounded-lg px-8 py-2 dashboardBlue focus:outline-none text-white DM400 mt-4 text-justify">Logout</button>
        </div>
        <div className="flex justify-between mx-6 lg:mx-32 mt-2 md:mt-8">
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
            <p className="text-white DM400 text-lg md:text-3xl">Team</p>
            <p className="text-gray-500 DM700 text-2xl md:text-3xl lg:text-5xl">{this.state.teamName}</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200">
            <p className="text-white DM400 text-lg md:text-3xl">Position</p>
            <p className="text-gray-500 DM700 text-2xl md:text-3xl lg:text-5xl">Unknown</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="300">
            <p className="text-white DM400 text-lg md:text-3xl">Score</p>
            <p className="text-white DM700 text-2xl md:text-3xl lg:text-5xl">{this.state.score}</p>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="300" data-aos-delay="400" className="md:grid md:grid-cols-3 md:mt-8 mx-6 lg:mx-32">
          <div className="md:col-span-1">
            <div>
              <div className="md:mb-6">
                <p className="DM700 text-lg md:text-2xl lg:text-3xl text-white mb-2">Members</p>
                <p className="DM400 text-base md:text-lg lg:text-xl text-gray-500">{this.state.name}</p>
                <p className="DM400 text-base md:text-lg lg:text-xl text-gray-500">{this.state.teamMate}</p>
              </div>
              <div>
                <p className="DM700 text-lg md:text-2xl lg:text-3xl text-white mb-4">Team Code</p>
                <textarea style={{ resize : "none" }} ref={(textarea) => this.textarea = textarea} className="DM400 bg-transparent h-8 focus: outline-none text-base md:text-xl text-white" value={this.state.teamID} />
                <button className="transform -translate-x-8 lg:translate-x-none -translate-y-2" onClick={this.copyToClipboard}><img src="assets/images/copy.png" alt="copy" /></button>
                <p className="DM400 text-xs md:text-sm text-gray-500">Join or create team for<br /> more info</p>
              </div>
              <div>
                <div className="inline mr-1">
                  <button 
                    onClick ={this.setJoinTeamOpen}
                    className={"transition duration-300 ease-in-out border-2 hover:border-white "+ (this.state.joinTeamOpen ? "border-white" : "border-transparent") +" px-1 md:px-8 py-2 rounded-2xl focus:outline-none my-4 DM700 text-base md:text-xl lg:text-2xl text-white"}>
                    <img className="hidden md:inline pr-4 mb-2" src="assets/images/join-team.png" alt="join-team" />
                    Join Team
                  </button>
                </div>
                <div className="inline mr-1">
                  <button 
                    onClick ={this.setCreateTeamOpen}
                    className={"transition duration-300 ease-in-out border-2 hover:border-white "+ (this.state.createTeamOpen ? "border-white" : "border-transparent") +" focus:outline-none px-1 md:px-6 py-2 rounded-2xl my-4 DM700 text-base md:text-xl lg:text-2xl text-white"}>
                    <img className="hidden md:inline pr-4 mb-2" src="assets/images/create-team.png" alt="create-team" />
                    Create Team
                  </button>
                </div>
                <div className="inline ml-1">
                  <button
                    onClick ={this.setLeaderboardOpen}
                    className={"transition duration-300 ease-in-out border-2 hover:border-white "+ (this.state.leaderboardOpen ? "border-white" : "border-transparent") +" px-1 md:px-6 lg:px-6 py-2 rounded-2xl focus:outline-none my-4 DM700 text-base md:text-xl lg:text-2xl text-white"}>
                    <img className="hidden md:inline pr-4 mb-2" src="assets/images/leaderboard.png" alt="leaderboard" />
                    Leaderboard
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="300" data-aos-delay="500" className="md:col-span-2 md:mt-8 lg:mt-0 -ml-4">
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
        <div className=" flex justify-center">
          <button onClick={this.logout} className="md:hidden transition duration-300 ease=in-out transform hover:scale-110 w-28 cursor-pointer rounded-lg px-8 py-2 dashboardBlue focus:outline-none text-white DM400 mt-2 text-justify">Logout</button>
        </div>
      </section>
    );
  }
}
export default Dashboard;