import React, { Component } from 'react';
import Background from '../bgs/ellipse-1.png';
import CTeam from './CreateTeamComponent';
import JTeam from './JoinTeamComponent';
import Dashboard from './DashboardComponent';
import LoadingSpinner from './LoadingSpinnerComponent';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  width: "100%"
}

let url = new URL(window.location);

class LoggedIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      joinTeamOpen: false,
      createTeamOpen: true,
      dashboardOpen: false,
      isTeamLeader: false,
      loading: true,
      error: false,
      teamName: 'Unknown',
      teamMate: '',
      teamID: null,
      name: ''
    };

    this.setJoinTeamOpen = this.setJoinTeamOpen.bind(this);
    this.setCreateTeamOpen = this.setCreateTeamOpen.bind(this);
  }

  setJoinTeamOpen() {
    this.setState(state => ({
      joinTeamOpen: true,
      createTeamOpen: false
    }));
  }

  setCreateTeamOpen() {
    this.setState(state => ({
      joinTeamOpen: false,
      createTeamOpen: true
    }));
  }

  logout = () => {
    axios({
      method: 'get',
      url: '/user/logout',
      baseURL: baseUrl,
      headers: { 'auth-token': sessionStorage.getItem('authToken') }
    })
      .then((response) =>{
        this.setState({
          error: response.data.error
        });
        sessionStorage.clear();
        document.location.href = "https://acm-reverse-coding.web.app/";
        if(this.state.error) {
          document.location.href = "https://acm-reverse-coding.web.app/";
        }
      }, (err) => {
        console.log(err);
        document.location.href = "https://acm-reverse-coding.web.app/";
      })
  }

  componentDidMount() {
    window.history.replaceState({url: "" + url + ""},"","/loggedIn");
    if(!sessionStorage.getItem('authToken')) {
      const authToken = url.searchParams.get("token");
      if(authToken === null) {
        sessionStorage.clear();
        document.location.href = "https://acm-reverse-coding.web.app/";
      } else {
        sessionStorage.setItem("authToken", authToken);
      }
    }
    axios({
      method: 'get',
      url: '/team/showteam',
      baseURL: baseUrl, 
      headers: { 'auth-token': sessionStorage.getItem('authToken') }
    })
    .then((response) => {
      this.setState({
      teamName: response.data.teamName,
      isTeamLeader: response.data.admin,
      score: response.data.score,
      teamMate: response.data.teammateName,
      teamID: response.data.TeamID,
      name: response.data.name,
      error: response.data.error,
      loading: false
      });
      if(this.state.error) {
        sessionStorage.clear();
        window.location.href='https://acm-reverse-coding.web.app';
      }
      if(this.state.teamID !== null) {
        this.setState({
          joinTeamOpen: false,
          createTeamOpen: false,
          dashboardOpen: true,
        });
      }
      if(sessionStorage.getItem('authToken') === null) {
        window.location.href='https://acm-reverse-coding.web.app';
      }
    }, (err) => {
      sessionStorage.clear();
      window.location.href='https://acm-reverse-coding.web.app';
    });
  }

  render() {
    return(
      <div style={sectionStyle}>
        <div className="flex justify-center lg:justify-between items-center lg:mx-32 mt-2">
          <img 
            className="lg:h-12 lg:w-60" 
            src="assets/images/logo.svg" 
            alt="logo" 
          />
          <button 
            onClick={this.logout} 
            className="hidden lg:block transition duration-300 ease=in-out transform hover:scale-110 cursor-pointer rounded-lg px-8 py-2 dashboardBlue focus:outline-none text-white DM400 mt-4 text-justify"
            >
              Logout
          </button>
        </div>
        <div 
          data-aos="fade-up" 
          data-aos-duration="300" 
          data-aos-delay="500" 
          className="flex content-center justify-center mt-10 lg:mt-14 mb-6 md:mb-18"
        >
          <div className = {(this.state.createTeamOpen ? "block" : "hidden")}>
            {this.state.loading ? <LoadingSpinner /> : <CTeam setJoinTeamOpen = {this.setJoinTeamOpen} />}
          </div>
          <div className = {(this.state.joinTeamOpen ? "block" : "hidden")}>
            <JTeam setCreateTeamOpen = {this.setCreateTeamOpen} />
          </div>
          <div className = {(this.state.dashboardOpen ? "flex-auto" : "hidden")}>
            <Dashboard
              isTeamLeader = {this.state.isTeamLeader}
              teamName = {this.state.teamName}
              teamMate = {this.state.teamMate}
              teamID = {this.state.teamID}
              name = {this.state.name}
            />
          </div>
        </div>
        <div className=" flex justify-center">
          <button 
          onClick={this.logout} 
          className="lg:hidden transition duration-300 ease=in-out transform hover:scale-110 w-28 cursor-pointer rounded-lg px-8 py-2 dashboardBlue focus:outline-none text-white DM400 lg:mt-2 text-justify mb-1"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}
export default LoggedIn;