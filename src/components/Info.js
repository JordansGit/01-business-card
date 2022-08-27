import React from 'react'
import emailIcon from '../images/email-icon.png';
import linkedInIcon from '../images/linkedin-icon.png';
import profilePic from '../images/jordan-patel-profile-picture.JPG';

function Info() {
  return (
    <div className="info">
      <img src={profilePic} className="profilePic"></img>
      <h1>Jordan Patel</h1>
      <span>Frontend Developer</span>
      <p>github.com/JordansGit</p>
      <div className="buttons-grp">
        <button className="email-btn">
          <img src={emailIcon}></img>
          Email
        </button>
        <button className="linkedIn-btn">
          <img src={linkedInIcon}></img>
          LinkedIn
        </button>
      </div>
    </div>
  )
}

export default Info