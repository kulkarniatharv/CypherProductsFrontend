import React, { useState, useRef } from 'react';
import './Navbar.css';

const styles = {
  slideIn: {
    transition: 'transform 1s ease-out',
    transform: 'translateX(100%)',
  },
};

const Navbar = props => {
  const menuBar = useRef();
  const [slideInMenu, setSlideInMenu] = useState(false);

  const showMenu = () => {
    console.log(menuBar);
    setSlideInMenu(true);
  };

  return (
    <div className="nav">
      {/* The link which will make menu appear */}
      <a
        onClick={showMenu.bind(this)}
        onKeyPress={showMenu.bind(this)}
        className="title"
        role="link"
        tabIndex="0"
      >
        MENU
      </a>

      {/* The menu */}
      <div className="menu">
        <ul style={slideInMenu ? { ...styles.slideIn } : null} ref={menuBar}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Work</a>
          </li>
          <li>
            <a href="/">Resources</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
