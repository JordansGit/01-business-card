import React from 'react';
import twitterIcon from '../images/Twitter Icon.png';
import facebookIcon from '../images/Facebook Icon.png';
import instagramIcon from '../images/Instagram Icon.png';
import githubIcon from '../images/GitHub Icon.png';

function Footer() {
  return (
    <footer>
      <img src={twitterIcon}></img>
      <img src={facebookIcon}></img>
      <img src={instagramIcon}></img>
      <img src={githubIcon}></img>
    </footer>
  )
}

export default Footer