import App, { Container } from 'next/app';
import React from 'react';

import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

import '../client/css/materialize.min.css';
import '../client/css/common.css';

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps } = this.props;
    return (<Container>
      <Nav />
      <main>
        <div id='container' className='container'>
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </Container>);
  }
}
