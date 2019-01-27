import React from 'react';

export default class Button extends React.Component {
  white;
  black;
  newTab;
  render () {
    let themeClass;
    if (this.props.white) {
      themeClass = 'white-button';
    } else if (this.props.black) {
      themeClass = 'black-button';
    }
    let moreProps = {};
    if (this.props.newTab) {
      moreProps['target'] = '_blank';
      moreProps['rel'] = 'noopener';
    }
    return (<a
      href={this.props.href}
      className={`btn-large btn-flat ${themeClass}`}
      {...moreProps}
    >
      {this.props.content}
    </a>)
  }
}