import React, { Component } from 'react';
import Countdown from 'react-countdown';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';

class Dashboard extends Component {
  constructor(props) {
    super(props);


    this.state = {
      errorMessage: ''
    };
  }

  copyToClipboard = (e) => {
    this.textarea.select();
    document.execCommand('copy');
    e.target.focus();
  }

  leaveTeam = () => {
    axios({
      method: 'delete',
      url: '/team/deletetheteam',
      baseURL: baseUrl,
      headers: { 'auth-token': this.props.authToken }
    })
      .then((response) => {
        window.location.reload();
      }, (err) => {
        this.setState({errorMessage: err.message});
      });
  }

  render() {
    return(
      <div className="my-auto mx-2 sm:mx-12 lg:mx-32">
        <div className="sm:flex justify-between">
          <div 
            data-aos="fade-up" 
            data-aos-duration="300" 
            data-aos-delay="100"
          >
            <p className="text-white DM700 text-base md:text-3xl">Team</p>
            <p className="text-gray-500 DM700 dashboardBlueText text-sm md:text-3xl lg:text-5xl">{this.props.teamName}</p>
          </div>
          <div 
            data-aos="fade-up" 
            data-aos-duration="300" 
            data-aos-delay="150"
          >
            <p className="DM700 text-base md:text-2xl lg:text-3xl text-white mb-2">Members</p>
            <p className="DM700 text-xs md:text-lg lg:text-xl text-white">
              {this.props.name}
              <img 
                className={"float-left sm:float-right px-2 md:mt-1 " + (this.props.isTeamLeader ? "visible" : "invisible")} 
                src="assets/images/vector.png" 
                alt="crown" 
              />
            </p>
            <p className="DM700 text-xs md:text-lg lg:text-xl text-white">
              {this.props.teamMate}
              <img 
                className={"float-left sm:float-right px-2 md:mt-1 " + (this.props.isTeamLeader ? "invisible" : "visible")} 
                src="assets/images/vector.png" 
                alt="crown" 
              />
            </p>
            <button 
              onClick={this.leaveTeam} 
              className="DM700 text-sm md:text-lg lg:text-xl focus:outline-none dashboardBlueText underline"
            >
              Leave team
            </button>
          </div>
          <div 
            data-aos="fade-up" 
            data-aos-duration="300" 
            data-aos-delay="200"
          >
            <p className="DM700 text-base md:text-2xl lg:text-3xl text-white mb-4">Team Code</p>
            <textarea 
              style={{ resize : "none" }} 
              ref={(textarea) => this.textarea = textarea} 
              className="DM400 bg-transparent h-8 focus: outline-none text-sm md:text-xl text-white" 
              value={this.props.teamID} 
              readOnly
            />
            <button 
              className="transform -translate-x-20 -translate-y-3 sm:-translate-x-20 sm:-translate-y-3 md:-translate-x-16 md:-translate-y-2 lg:-translate-x-16 lg:-translate-y-2" 
              onClick={this.copyToClipboard}
            >
              <img src="assets/images/copy.png" alt="copy" />
            </button>
            <p className="hidden lg:block DM400 text-xs md:text-sm text-gray-500">
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
              className="DM500 dashboardBlueText text-xl sm:text-3xl md:text-7xl tracking-widest" 
              date = '2020-12-18T12:00:00' 
            />
          </div>
          <div className="flex justify-center">
            <div className="px-1 sm:px-2 md:px-10 DM500 dashboardBlueText sm:text-xl">Day</div>
            <div className="px-1 sm:px-2 md:px-10 DM500 dashboardBlueText sm:text-xl">Hr</div>
            <div className="px-1 sm:px-2 md:px-10 DM500 dashboardBlueText sm:text-xl">Min</div>
            <div className="px-1 sm:px-2 md:px-10 DM500 dashboardBlueText sm:text-xl">Sec</div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <a href="#">
            <button className="opacity-50 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer rounded-lg px-8 py-2 dashboardBlue focus:outline-none text-white DM700 lg:mt-2 text-justify">
              Start Now
            </button>
          </a>
        </div>
        <div>
          <p className="DM700 text-red-400 text-center text-sm md:text-base mt-1 lg:mt-4">{this.state.errorMessage}</p>
        </div>
        <div className="mt-10 md:mt-16">
          <p className="DM700 text-white text-lg text-center">Reach out to us</p>
          <div className="flex justify-center mt-8">
            <a className="px-6 mx-auto lg:m-0" href="https://www.linkedin.com/company/acm-vit-chapter?trk=public_post_share-update_actor-text"><img src="assets/images/link.png" alt="linkedin" /></a>
            <a className="px-6 mx-auto lg:m-0" href="https://twitter.com/ACM_VIT"><img src="assets/images/twit.png" alt="twitter" /></a>
            <a className="px-6 mx-auto lg:m-0" href="https://www.facebook.com/ACM.VITU/?__xts__[0]=68.ARA65dIx9TOCijPmAX4VacMyTDqKi_W8-OAhWA6rA3ZCNc49KYCTCpaM0NtgAqM0oCW8k9YFcdIAYiJ9zLwaf5X1VrK4gkc4a47q1H3Zbk-pyP8PFD-32lIE0FYEM-G0U88_-i5dWkZJO7AYTMNWVWfhOX2eJyCWPqwRlMD8iso2AV8dmLfZzXdi3G6aQsU8kqpm7c0RrfbWkxILzt7DA6-gzl_Onl-GiXTtW5OAvMXHgqbctIxp776o5M9vLijshxUEX6RbqYKCoz1wlWDEukwdKLIVCAx0i6A8WkzWCNB753qsRVyu6bRXpKOQibzqdHgBgj38Ht7DTtEWIXBF"><img src="assets/images/facebook.png" alt="fb" /></a>
            <a className="px-6 mx-auto lg:m-0" href="https://www.instagram.com/acmvit/"><img src="assets/images/instagram.png" alt="ig" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;