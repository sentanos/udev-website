import React from 'react';

import '../client/css/components/profile.css';

export default class Profile extends React.Component {
  render () {
    return (<div className='profile'>
      <div className='profile-img center'>
        <img src={'/static/img/team/' + this.props.image} alt='' className='circle responsive-img' />
        {this.props.link && <div><div className='overlay-black circle responsive-img' /><a href={this.props.link} target='_blank' className='profile-icon'>
          <img className='profile-icon' src='/static/ico/linkedin.svg' />
        </a></div>}
      </div>
      <p className='center name'>{this.props.name}</p>
      {this.props.title && <p className='center sub'>{this.props.title}</p>}
    </div>);
  }
}
