import React from 'react';
import Link from 'next/link';

import '../client/css/components/nav.css';

export default class Nav extends React.Component {
  componentDidMount () {
    require('../client/js/materialize.min.js');
    const sidenav = document.querySelector('#mobile-nav');
    window.M.Sidenav.init(sidenav);
  }

  render () {
    return (
      <div>
        <nav>
          <div className='nav-wrapper white no-shadows'>
            <Link href='/'><a className='brand-logo'>uDev</a></Link>
            <a href='#' data-target='mobile-nav' className='sidenav-trigger'>
              <img className='menu-icon' src='/static/ico/menu.svg' />
            </a>
            <ul className='right hide-on-med-and-down'>
              <li><Link href='/'><a>Home</a></Link></li>
              {/* <li><Link href='projects.html'><a>Projects</a></Link></li> */}
              <li><Link prefetch href='/team'><a>Members</a></Link></li>
              <li><Link href='/#contact'><a>Contact</a></Link></li>
            </ul>
          </div>
        </nav>
        <ul className='sidenav' id='mobile-nav'>
          <li><Link href='/'><a className='sidenav-close'>Home</a></Link></li>
          {/* <li><Link href='projects.html'><a>Projects</a></Link></li> */}
          <li><Link href='/team'><a className='sidenav-close'>Members</a></Link></li>
          <li><Link href='/#contact'><a className='sidenav-close'>Contact</a></Link></li>
        </ul>
      </div>
    );
  }
}
