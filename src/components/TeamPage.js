import axios from 'axios';
import React, { Component } from 'react';
import './TeamPage.css';
import {teams} from '../data/teams';

export class TeamPage extends Component {

  state={
    data:'',
    flag:''
  }
  componentDidMount(){
    const this_com=this;
    axios.get('https://worldcup.sfg.io/teams/results')
    .then(function (response) {
      // eslint-disable-next-line
      const data=response.data.filter((team)=> team.id==this_com.props.match.params.id);
      // eslint-disable-next-line
      const cTeam=teams.filter((team)=> team.id==this_com.props.match.params.id);
      console.log(cTeam[0]);
      console.log(data[0]);
      this_com.setState({flag:'https://restcountries.eu/data/'+cTeam[0].fifa_code.toLowerCase()+'.svg'});
      this_com.setState({ data:data[0] });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

    render() {
      const bgClass={
        // eslint-disable-next-line
        backgroundImage : `url(${this,this.state.flag})`
      }
      return (
        <div>
          <div className='teamPageBg' style={bgClass}></div>
          
            <div className="TeamPage" >
              <div className="teamBox">
                  <div className="teamBox-title">
                    <div>
                      <div className='title'>{this.state.data.country}</div>
                    </div>
                  </div>
                  <div className="teamBox-info">
                    <div className="teamBox-info-img">
                      <img src={this.state.flag} alt='' />
                    </div>
                    <div className="teamBox-info-data">
                      <ul>
                        <li>
                          <p><span className='dataKey'>Groupe:</span><span className='dataVal'>{this.state.data.group_letter}</span></p>
                        </li>
                        <li>
                          <p><span className='dataKey'>Games played:</span><span className='dataVal'>{this.state.data.games_played}</span></p>
                        </li>
                        <li>
                          <p><span className='dataKey'>Wins:</span><span className='dataVal'>{this.state.data.wins}</span></p>
                        </li>
                        <li>
                          <p><span className='dataKey'>Draws:</span><span className='dataVal'>{this.state.data.draws}</span></p>
                        </li>
                        <li>
                          <p><span className='dataKey'>Losses:</span><span className='dataVal'>{this.state.data.losses}</span></p>
                        </li>
                        <li>
                          <p><span className='dataKey'>Points:</span><span className='dataVal'>{this.state.data.points}</span></p>
                        </li>
                        <li>
                          <p><span className='dataKey'>GF:</span><span className='dataVal'>{this.state.data.goals_for}</span></p>
                        </li>
                        <li>
                          <p><span className='dataKey'>GA:</span><span className='dataVal'>{this.state.data.goals_against}</span></p>
                        </li>
                        <li>
                          <p><span className='dataKey'>GD:</span><span className='dataVal'>{this.state.data.goal_differential}</span></p>
                        </li>
                      </ul>
                      <div class='teamBox-footer'>
                        <a href='/' alt='' className='backLink'><img src='/cup.png' alt='' /></a>
                        
                      </div>
                    </div>

                  </div>
                </div>
            </div>
            <div className='cup'></div>
          </div>
      )
    }
  
    
  }

      