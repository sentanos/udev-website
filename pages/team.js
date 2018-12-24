import React from 'react';
import Profile from '../components/Profile.js';
import team from '../static/team.json';

import '../client/css/team.css';

class Team extends React.Component {
  render () {
    let leads = [];
    let web = [];
    let uiux = [];
    let members = this.props.members;
    // Sort by last name while grouping by team
    // Do not sort leads team
    members.sort((a, b) => {
      if (!(a.team === 'Lead' && b.team === 'Lead')) {
        if (a.team < b.team) {
          return -1;
        } else if (a.team > b.team) {
          return 1;
        } else {
          let aLast = a.name.substring(a.name.indexOf(' ') + 1, a.name.length);
          let bLast = b.name.substring(b.name.indexOf(' ') + 1, b.name.length);
          return aLast.localeCompare(bLast);
        }
      }
    });
    for (let i = 0; i < members.length; i++) {
      const member = members[i];
      const profile = <Profile name={member.name} image={member.image} title={member.title} link={member.link} />;
      switch (member.team) {
        case 'Lead':
          leads.push(profile);
          break;
        case 'Web':
          web.push(profile);
          break;
        case 'UIUX':
          uiux.push(profile);
          break;
      }
    }

    return (<div>
      <div className='title'>
        Our Team
      </div>
      <br />
      <h3><b>Leads</b></h3>
      <div className='profile-section'>
        {leads}
      </div>
      <div className='divider' />
      <h3><b>Web Developers</b></h3>
      <div className='profile-section'>
        {web}
      </div>
      <div className='divider' />
      <h3><b>UI/UX Designers</b></h3>
      <div className='profile-section'>
        {uiux}
      </div>
    </div>);
  }
}

export default () => {
  return (<Team members={team} />);
};
