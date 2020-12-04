import React,{ Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';

class JTeam extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      teamID: '',
      errorMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({teamID: e.target.value});
  }

  handleSubmit(e) {
    axios({
      method: 'post',
      url: 'team/joinateam',
      baseURL: baseUrl,
      headers: { 'auth-token': sessionStorage.getItem('kajebkjabekjbaekbfkbefbk') },
      data: {
        TeamID: this.state.teamID
      }
    })
      .then((response) => {
        window.location.reload();
      }, (err) => {
        this.setState({errorMessage: err.message});
      });
  }

  setCreateTeamOpen = () => {
    this.props.setCreateTeamOpen()
  }

  render() {
    return(
      <div>
        <div className="rounded-3xl mx-auto lg:pt-1 pb-12">
          <p className="DM700 text-2xl lg:text-5xl text-center text-white mb-1 lg:mb-4 mt-16">
            Join Team
          </p>
          <p className="DM400 text-gray-400 text-base lg:text-xl text-center mb-4 lg:mb-20">
            in order to proceed further
          </p>
          <div className="rounded-2xl mx-20 py-6 px-4 md:px-20 lg:px-20">
            <p className="DM400 text-white text-base lg:text-xl block">Enter invite code</p>
            <input 
              value={this.state.value} 
              onChange={this.handleChange} 
              className="rounded-lg pl-1 bg-black block ring-2 h-6 w-40 lg:h-8 lg:w-64 ring-dashboardBlue focus:outline-none text-white"
            >
            </input>
            <br />
            <button 
              onClick={this.handleSubmit} 
              className="dashboardBlue block px-6 py-2 h-10 w-40 lg:h-12 lg:w-64 rounded-lg focus:outline-none DM700 text-base lg:text-xl text-white"
            >
              Join Team
            </button>
            <div className="DM700 text-white text-center text-sm md:text-base mt-1 lg:mt-4">
              Or <button onClick={this.setCreateTeamOpen} className="DM700 focus:outline-none dashboardBlueText text-sm md:text-base underline">Create a team</button>
            </div>
            <div>
              <p className="DM700 text-red-400 text-center text-sm md:text-base mt-1 lg:mt-4">{this.state.errorMessage}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JTeam;