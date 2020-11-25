import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';

let url = new URL(window.location);
let authToken = url.searchParams.get("token");

class CTeam extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      teamName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({teamName: e.target.value});
  }

  handleSubmit(e) {
    console.log(this.state.teamName);
    axios({
      method: 'post',
      url: 'team/createateam',
      baseURL: baseUrl,
      headers: { 'auth-token': authToken },
      data: {
        teamName: this.state.teamName
      }
    })
      .then((response) => {
        return(
          <div className="DM400 text-white text-center text-xl transition duration-300 ease-in-out opacity">
            {response}
          </div>
        );
      }, (err) => {
        return(
          <div className="DM400 text-white text-center text-xl transition duration-300 ease-in-out opacity">
            {err}
          </div>
        );
      });
  }

  render() {
    return(
      <div>
        <div className="rounded-2xl dashboardBlue py-16 lg:py-24 lg:px-36">
          <p className="DM700 text-2xl lg:text-5xl text-center text-white mb-2 lg:mb-4 -mt-16">Create Team</p>
          <p className="DM400 text-gray-400 text-base lg:text-xl text-center mb-10 lg:mb-24">Lorem ipsum dolor sit amet</p>
          <div className="rounded-2xl bg-black mx-20 py-6 px-4 lg:px-20">
            <p className="DM400 text-white text-base lg:text-xl block">Enter team name</p>
            <input value={this.state.value} onChange={this.handleChange} className="rounded-lg bg-black block ring-2 h-6 w-40 lg:h-8 lg:w-64 ring-dashboardBlue focus:outline-none text-white"></input><br />
            <button onClick={this.handleSubmit} className="dashboardBlue block px-6 py-2 h-10 w-40 lg:h-12 lg:w-64 rounded-lg focus:outline-none DM700 text-base lg:text-xl text-white">
              Create Team
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CTeam;