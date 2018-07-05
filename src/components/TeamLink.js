import React, { Component } from 'react';
import './TeamLink.css';

export class TeamLink extends Component {

  render() {
    return (
      <div className="TeamLink">
        <a href={this.props.url} >
          {this.props.name}
        </a>
      </div>
    );
  }
}

