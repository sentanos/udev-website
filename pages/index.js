import React from 'react';
import Head from 'next/head';

import Button from '../components/Button.js';

import '../client/css/index.css';
import '../client/css/components/buttons.css';

class Card extends React.Component {
  imgFileName;
  title;
  content;
  render() {
    return (<div className='col s6 m6 l3'>
      <div className='card about-card'>
        <div className='card-image'>
          <img src={`/static/img/${this.props.imgFileName}`} />
        </div>
        <div className='card-content'>
          <span className='card-title'>
            {this.props.title}
          </span>
          <p>{this.props.content}</p>
        </div>
      </div>
    </div>)
  }
}

export default () => {
  return (<div>
    <Head>
      <title>uDev</title>
    </Head>
    <div className='title row'>
      <div className='col s12 m12 l6'>
        Coders, Designers, Developers, Leaders, Students.
        <div className='row'>
          <Button white href='#contact' content='CONTACT' />
          <Button black newTab href='https://github.com/udev-group' content='GITHUB' />
        </div>
      </div>
      <div className='col s12 m12 l6'>
        <img className='responsive-img' src={'/static/img/stock2.jpg'} />
      </div>
    </div>

    <div id='about' className='title'>
      What do we do?
    </div>
    <br />
    <div className='row'>

      <div className='col s12 m12 l6'>
        <p className='flow-text'>
          The purpose of uDev is to provide students with the opportunity to gain experience in
          various professional skills related to technology and development, including,
          but not limited to: design, programming, and marketing. uDev members attend workshops
          and work on projects to build their skills, resume and portfolio.
        </p>
      </div>
      <Card
        title='Web Development'
        content='Our members develop websites using various frameworks to create projects that
        function efficiently and correctly.'
        imgFileName='webdev-graphic.png'
      />
      <Card
        title='UI/UX'
        content='We use tools such as Figma, inVision to create wireframes and prototypes of
        websites to ensure they follow UI/UX best practices.'
        imgFileName='ux-graphic.png'
      />
    </div>

    <br />

    <div className='row'>
      <div className='col s12 m12 l5'>
        <img className='responsive-img hide-on-med-and-down' src={'/static/img/stock4.jpg'} />
      </div>
      <div className='col s12 m12 l6 offset-l1'>
        <div id='contact' className='title'>Have an idea?<br />Want to join the team?</div>
        <p className='flow-text'>We're always open to new project ideas.
          If you have an idea for an app or website, submit a form by clicking below.<br /><br />
          We're also looking to grow our team. If you're passionate about app or website
          development, design, marketing, communications, or just learning new things,
          fill out an application. We're currently recruiting for all positions for Autumn 2018.
        </p>
        <div className='row'>
          <Button white href='https://goo.gl/forms/Z1XkTClNYyjJHk8b2S' content='SUBMIT AN IDEA' />
          <Button black href='https://goo.gl/forms/oSmAxeqvhKRn9hYi2' content='JOIN THE TEAM' />
        </div>
        <div className='row'>
          <span className='mail-icon'>
            <a href='mailto:udev.dubstech@gmail.com'>
              <img src={'/static/ico/envelope.svg'} className='mail-icon' />
            </a>
            {/* <a href='https://www.facebook.com/' className='fab fa-facebook icon' /> */}
          </span>
        </div>

      </div>
    </div>
  </div>);
};
