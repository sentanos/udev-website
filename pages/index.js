import React from 'react';
import Head from 'next/head';

import '../client/css/index.css';

export default () => {
  return (<div>
    <Head>
      <title>uDev</title>
    </Head>
    <div className='title row'>
      <div className='col s12 m12 l6'>
        Coders, Designers, Developers, Leaders, Students.
        <div className='row'>
          <a href='#contact' className='btn-large btn-flat white-button'>CONTACT</a>
          <a href='https://github.com/udev-group' target='_blank' rel='noopener' className='btn-large btn-flat black-button'><i className='fab fa-github' /> GITHUB</a>
        </div>
      </div>
      <div className='col s12 m12 l6'>
        <img className='responsive-img' src='/static/img/stock2.jpg' />
      </div>
    </div>

    <div id='about' className='title'>
      What do we do?
    </div>
    <br />
    <div className='row'>

      <div className='col s12 m12 l6'>
        <p className='flow-text'>
          The purpose of uDev is to provide students with the opportunity to gain experience in variouse professional skills related to technology and development, including,
          but not limited to: design, programming, and marketing. uDev members attend workshops and work on projects to build their skills, resume and portfolio.
        </p>
      </div>

      <div className='col s6 m6 l3'>
        <div className='card z-depth-3 about-card'>
          <div className='card-image'>
            <img src='/static/img/webdev-graphic.png' />
          </div>
          <div className='card-content'>
            <span className='card-title'>
              Web Development
            </span>
            <p>Our members develop websites using various frameworks to create projects that function efficiently and correctly.</p>
          </div>
        </div>
      </div>

      <div className='col s6 m6 l3'>
        <div className='card z-depth-3 about-card'>
          <div className='card-image'>
            <img src='/static/img/ux-graphic.png' />
          </div>
          <div className='card-content'>
            <span className='card-title'>
              UI/UX
            </span>
            <p>
              We use tools such as Figma, inVision to create wireframes and prototypes of websites to ensure they follow UI/UX best practices.
            </p>
          </div>
        </div>
      </div>
    </div>

    <br />

    <div className='row'>
      <div className='col s12 m12 l5'>
        <img className='responsive-img hide-on-med-and-down' src='/static/img/stock4.jpg' />
      </div>
      <div className='col s12 m12 l6 offset-l1'>
        <div id='contact' className='title'>Have an idea?<br />Want to join the team?</div>
        <p className='flow-text'>We're always open to new project ideas. If you have an idea for an app or website, submit a form by clicking below.<br /><br />We're also looking to grow our team. If you're passionate about app or website development,
          design, marketing,
          communications, or just learning new things, fill out an application. We're currently recruiting for all positions for Autumn 2018.</p>
        <div className='row'>
          <a href='https://goo.gl/forms/Z1XkTClNYyjJHk8b2' target='_blank' rel='noopener' className='btn-large btn-flat white-button'>SUBMIT AN IDEA</a>
          <a href='https://goo.gl/forms/oSmAxeqvhKRn9hYi2' target='_blank' rel='noopener' className='btn-large btn-flat black-button'>JOIN THE TEAM</a>
        </div>
        <div className='row'>
          <span className='mail-icon'>
            <a href='mailto:udev.dubstech@gmail.com'><img src='/static/ico/envelope.svg' className='mail-icon' /></a>
            {/* <a href='https://www.facebook.com/' className='fab fa-facebook icon' /> */}
          </span>
        </div>

      </div>
    </div>
  </div>);
};
