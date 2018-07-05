import React, { Component } from 'react';
import './Home.css';
import {TeamLink} from './TeamLink';
import {teams} from '../data/teams';


export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className='flexContainer'>
          <div className='leftBox'>
            {teams.filter((team,i)=>i<17).map((team,i)=> <TeamLink 
                    key={'tl'+i}
                    name={team.country}
                    url={"/team/"+team.id}
                    img={'https://restcountries.eu/data/'+team.fifa_code+'.svg'}
                    color={'#365'}/>      
            )}
          </div>
          <div className='rightBox'>
            {teams.filter((team,i)=>i>=17).map((team,i)=><TeamLink 
                    key={'tl'+i}
                    name={team.country}
                    url={"/team/"+team.id}
                    img={'https://restcountries.eu/data/'+team.fifa_code+'.svg'}
                    color={'#365'}
            />       
            )}
          </div>
        </div>
      </div>
    );
  }
}

