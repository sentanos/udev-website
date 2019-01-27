import React from 'react';

import '../client/css/components/footer.css';

export default class Footer extends React.Component {
  render () {
    return (<footer className='page-footer white'>
      <div className='footer-copyright black white-text'>
        <div className='container'>
          <div className='valign-wrapper'>
            © 2018 uDev
            <div className='footer-right'>
              <img className='uw-logo' src='/static/img/uw.png' />
            </div>
          </div>
        </div>
      </div>
    </footer>);
  }
}
