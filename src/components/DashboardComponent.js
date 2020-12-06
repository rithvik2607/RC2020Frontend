import React, { Component } from 'react';
import Countdown from 'react-countdown';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';

class Dashboard extends Component {
  constructor(props) {
    super(props);


    this.state = {
      error: false,
      errorMessage: ''
    };
  }

  copyToClipboard = () => {
    navigator.clipboard.writeText(this.props.teamID);
  }

  leaveTeam = () => {
    axios({
      method: 'delete',
      url: '/team/deletetheteam',
      baseURL: baseUrl,
      headers: { 'auth-token': sessionStorage.getItem('authToken') }
    })
      .then((response) => {
        if(response.data.error === false) {
          window.location.reload();
        } else {
          this.setState({ errorMessage: response.data.Message });
        }
      }, (err) => {
        this.setState({errorMessage: err.message});
      });
  }

  render() {
    return(
      <div className="mx-2 sm:mx-12 lg:mx-32">
        <div className="flex-col items-center justify-center flex sm:flex-row sm:items-stretch sm:justify-between">
          <div 
            data-aos="fade-up" 
            data-aos-duration="300" 
            data-aos-delay="100"
          >
            <p className="text-white DM700 text-center sm:text-left text-base md:text-2xl lg:text-3xl">Team</p>
            <p className="text-gray-500 DM700 dashboardBlueText text-sm md:text-3xl lg:text-5xl mb-4 sm:mb-0">{this.props.teamName}</p>
          </div>
          <div 
            data-aos="fade-up" 
            data-aos-duration="300" 
            data-aos-delay="150"
          >
            <p className="DM700 text-center sm:text-left text-base md:text-2xl lg:text-3xl text-white mb-2">Members</p>
            <p className="DM700 text-center sm:text-left text-xs md:text-lg lg:text-xl text-white">
              {this.props.name}
              <img 
                className={"float-left sm:float-right px-2 md:mt-1 " + (this.props.isTeamLeader ? "visible" : "invisible")} 
                src="assets/images/Vector.svg" 
                alt="crown" 
              />
            </p>
            <p className="DM700 text-center sm:text-left text-xs md:text-lg lg:text-xl text-white">
              {this.props.teamMate}
              <img 
                className={"float-left sm:float-right px-2 md:mt-1 " + (this.props.isTeamLeader ? "invisible" : "visible")} 
                src="assets/images/Vector.svg" 
                alt="crown" 
              />
            </p>
            <div className="flex justify-center sm:flex-none sm:hidden mx-6 sm:mx-0 items-center">
              <button 
                onClick={this.leaveTeam} 
                className="DM700 text-sm md:text-lg lg:text-xl focus:outline-none dashboardBlueText underline mb-4 sm:mb-0"
              >
                Leave team
              </button>
            </div>
            <div className="hidden sm:block mx-6 sm:mx-0 items-center">
              <button 
                onClick={this.leaveTeam} 
                className="DM700 text-sm md:text-lg lg:text-xl focus:outline-none dashboardBlueText underline mb-4 sm:mb-0"
              >
                Leave team
              </button>
            </div>
          </div>
          <div 
            data-aos="fade-up" 
            data-aos-duration="300" 
            data-aos-delay="200"
          >
            <p className="DM700 text-center sm:text-left text-base md:text-2xl lg:text-3xl text-white mb-4">Team Code</p>
            <div className="mx-6 sm:mx-0">
              <div
                className="DM400 bg-transparent h-8 focus: outline-none text-sm md:text-xl text-white"
              >
                {this.props.teamID}
              </div>
              <button 
                className="transform translate-x-20 -translate-y-9 sm:translate-x-20 sm:-translate-y-8 md:translate-x-24 md:-translate-y-8 lg:translate-x-28 lg:-translate-y-8" 
                onClick={this.copyToClipboard}
              >
                <img src="assets/images/copy.png" alt="copy" />
              </button>
            </div>
            <p className="DM400 -mt-8 text-xs md:text-sm text-gray-500">
              Share this code to add one<br /> more member to your team
            </p>
          </div>
        </div>
        <div className="md:mt-12">
          <p className="DM700 text-white text-lg lg:text-2xl text-center">
            Thank you for registering. Round 1 begins in
          </p>
          <br />
          <div className="flex justify-center">
            <Countdown 
              className="DM500 dashboardBlueText sticky text-xl sm:text-3xl md:text-7xl tracking-widest" 
              date = '2020-12-18T12:00:00'
            />
          </div>
          <div className="flex justify-center">
            <div className="px-1 sm:px-2 md:pl-8 md:pr-10 DM500 dashboardBlueText sm:text-xl">Day</div>
            <div className="px-1 sm:px-2 md:pl-10 md:pr-6 DM500 dashboardBlueText sm:text-xl">Hr</div>
            <div className="px-1 sm:px-2 md:pl-14 md:pr-14 DM500 dashboardBlueText sm:text-xl">Min</div>
            <div className="px-1 sm:px-2 md:pl-8 md:pr-10 DM500 dashboardBlueText sm:text-xl">Sec</div>
          </div>
        </div>
        <div className="hidden flex justify-center mt-4">
          <a className="hidden" href="#">
            <button className="hidden opacity-50 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer rounded-lg px-8 py-2 dashboardBlue focus:outline-none text-white DM700 lg:mt-2 text-justify">
              Start Now
            </button>
          </a>
        </div>
        <div>
          <p className="DM700 text-red-400 text-center text-sm md:text-base mt-1 lg:mt-4">{this.state.errorMessage}</p>
        </div>
        <div className="mt-10 md:mt-16">
          <p className="DM700 text-white text-lg text-center">Reach out to us</p>
          <div className="flex justify-center mt-8 sm:mb-8 mb-0">
            <a target="_blank" rel="noopener noreferrer" className="px-6 lg:m-0" href="https://www.linkedin.com/company/acm-vit-chapter?trk=public_post_share-update_actor-text"><img src="assets/images/link.svg" alt="linkedin" /></a>
            <a target="_blank" rel="noopener noreferrer" className="px-6 lg:m-0" href="https://twitter.com/ACM_VIT"><img src="assets/images/twit.svg" alt="twitter" /></a>
            <a target="_blank" rel="noopener noreferrer" className="px-6 lg:m-0" href="https://www.facebook.com/ACM.VITU/?__xts__[0]=68.ARA65dIx9TOCijPmAX4VacMyTDqKi_W8-OAhWA6rA3ZCNc49KYCTCpaM0NtgAqM0oCW8k9YFcdIAYiJ9zLwaf5X1VrK4gkc4a47q1H3Zbk-pyP8PFD-32lIE0FYEM-G0U88_-i5dWkZJO7AYTMNWVWfhOX2eJyCWPqwRlMD8iso2AV8dmLfZzXdi3G6aQsU8kqpm7c0RrfbWkxILzt7DA6-gzl_Onl-GiXTtW5OAvMXHgqbctIxp776o5M9vLijshxUEX6RbqYKCoz1wlWDEukwdKLIVCAx0i6A8WkzWCNB753qsRVyu6bRXpKOQibzqdHgBgj38Ht7DTtEWIXBF"><img src="assets/images/facebook.svg" alt="fb" /></a>
            <a target="_blank" rel="noopener noreferrer" className="px-6 lg:m-0" href="https://www.instagram.com/acmvit/"><img src="assets/images/instagram.svg" alt="ig" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;