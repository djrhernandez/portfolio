import React, { Component } from 'react';
import { Footer, Social } from './SocialMedia.style';

class SocialMedia extends Component {
  render() {
    return (
      <Footer>
        <li><Social url="https://www.instagram.com/djrhernandez"/></li>
        <li><Social url="https://www.facebook.com/djrhernandez"/></li>
        <li><Social url="https://www.linkedin.com/in/djrhernandez"/></li>
        <li><Social color={"black"} url="https://github.com/djrhernandez" /></li>
      </Footer>
    );
  }
}
export default SocialMedia;
