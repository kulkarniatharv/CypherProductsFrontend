import React, { useState } from 'react';
import './Navbar.css';
import './hamburgers.css';
import SocialIconStrip from './socialIconStrip';

// importing images

const menuBG = require('../../images/menu-bg1.jpg');

// styles
const styles = {
  slideIn: {
    transform: 'translateX(0%)',
  },
  socialIconsHorizontal: {
    top: '20%',
    gridTemplateColumns: 'repeat(5, 2.5rem)',
    alignContent: 'center',
    alignItems: 'end',
    justifyContent: 'center',
  },
  socialIconsVertical: {
    top: '30%',
    // left: '2vw',
    gridTemplateRows: 'repeat(5, 2.5rem)',
    alignContent: 'center',
    alignItems: 'end',
    justifyContent: 'center',
    animationName: 'fade',
    animationFillMode: 'both',
    animationIterationCount: 'infinite',
    animationDuration: '5s',
    animationDirection: 'alternate',
  },
  socialBanner: {
    animationName: 'fade',
    animationFillMode: 'both',
    animationIterationCount: 'infinite',
    animationDuration: '5s',
    animationDirection: 'alternate-reverse',
  },
};

const Navbar = props => {
  const [slideInMenu, setSlideInMenu] = useState(false);

  const ToggleMenu = () => {
    setSlideInMenu(!slideInMenu);
  };

  return (
    <div className="nav">
      {/* The link which will make menu appear */}
      <div
        className={`title hamburger hamburger--arrow-r ${
          slideInMenu ? 'is-active' : ''
        }`}
        onClick={ToggleMenu.bind(this)}
        onKeyPress={ToggleMenu.bind(this)}
        role="button"
        tabIndex="0"
      >
        <div className="hamburger-box">
          <div className="hamburger-inner" />
        </div>
      </div>

      {/* Social Banner */}
      <div
        className="social-banner"
        style={!slideInMenu ? { ...styles.socialBanner } : null}
      >
        Connect with us!
      </div>
      {/* Social Icons */}
      <div
        className="social-icons"
        style={
          !slideInMenu ? { ...styles.socialIconsVertical } : { display: 'none' }
        }
      >
        <SocialIconStrip />
      </div>

      {/* The menu */}
      <div
        className="menu"
        style={
          slideInMenu
            ? {
                ...styles.slideIn,
                backgroundImage: `url(${menuBG})`,
                backgroundRepeat: `no-repeat`,
                height: '100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }
            : null
        }
      >
        {/* Social Icons */}
        <div
          className="social-icons"
          style={slideInMenu ? { ...styles.socialIconsHorizontal } : null}
        >
          <SocialIconStrip />
        </div>

        <div className="menu-links">
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/">About</a>
          </div>
          <div>
            <a href="/">Work</a>
          </div>
          <div>
            <a href="/">Pricing</a>
          </div>
          <div>
            <a href="/">Contact</a>
          </div>
        </div>

        {/* Arrow */}
        <div
          className={`menu-close hamburger hamburger--arrow ${
            slideInMenu ? 'is-active' : ''
          }`}
          onClick={ToggleMenu.bind(this)}
          onKeyPress={ToggleMenu.bind(this)}
          role="button"
          tabIndex="-1    "
        >
          <div className="hamburger-box">
            <div className="hamburger-inner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
