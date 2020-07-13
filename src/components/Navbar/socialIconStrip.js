import React from 'react';

import facebookIcon from '../../images/social-icons/facebook.png';
import twitterIcon from '../../images/social-icons/twitter_circle.png';
import whatsappIcon from '../../images/social-icons/whatsapp.png';
import youtubeIcon from '../../images/social-icons/youtube.png';
import instagramIcon from '../../images/social-icons/instagram-sketched.png';

const socialIconStrip = () => (
  <>
    <div>
      <a href="/">
        <img src={facebookIcon} alt="facebook" height="25px" width="25px" />
      </a>
    </div>
    <div>
      <a href="/">
        <img src={twitterIcon} alt="facebook" height="25px" width="25px" />
      </a>
    </div>
    <div>
      <a href="/">
        <img src={whatsappIcon} alt="facebook" height="25px" width="25px" />
      </a>
    </div>
    <div>
      <a href="/">
        <img src={youtubeIcon} alt="facebook" height="25px" width="25px" />
      </a>
    </div>
    <div>
      <a href="/">
        <img src={instagramIcon} alt="facebook" height="25px" width="25px" />
      </a>
    </div>
  </>
);

export default socialIconStrip;
