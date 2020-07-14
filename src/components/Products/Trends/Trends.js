import React, { useState } from 'react';
import './Trends.css';
import PageNumber from '../PageNumber/PageNumber';

const styles = {
  active: {
    color: '#b47efc',
    borderBottom: '0.5rem solid #d7c8eb',
  },
};

const Trends = () => {
  const [toggleActive, setToggleActive] = useState(true);

  const activeHandler = () => {};

  return (
    <div className="trends">
      <div style={toggleActive ? { ...styles.active } : null}>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setToggleActive(true);
          }}
          onKeyPress={() => {
            setToggleActive(true);
          }}
          role="button"
          tabIndex="-1"
        >
          New
        </span>
      </div>
      <div style={!toggleActive ? { ...styles.active } : null}>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setToggleActive(false);
          }}
          onKeyPress={() => {
            setToggleActive(false);
          }}
          role="button"
          tabIndex="-2"
        >
          Popular
        </span>
      </div>
    </div>
  );
};

export default Trends;
