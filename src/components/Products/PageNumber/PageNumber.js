/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './PageNumber.css';

import back from '../../../images/back.svg';
import next from '../../../images/right-arrow.svg';

const PageNumber = props => {
  const { onClickHandler, currPage, totalPages } = props;

  return (
    <div className="page-control">
      <div className="control-btn">
        {currPage > 1 ? (
          <img
            src={back}
            alt="back"
            onClick={() => {
              onClickHandler('dec');
            }}
            onKeyPress={() => {
              onClickHandler('dec');
            }}
            type="button"
            tabIndex="-2"
          />
        ) : (
          <div />
        )}
      </div>
      <div className="page-status">
        {currPage === 1 ? 1 : currPage - 3}
        <span style={{ opacity: '0.4' }}>/{totalPages}</span>
      </div>
      <div className="control-btn">
        {currPage - 3 !== totalPages ? (
          <img
            src={next}
            alt="back"
            onClick={() => {
              onClickHandler('inc');
            }}
            onKeyPress={() => {
              onClickHandler('inc');
            }}
            type="button"
            tabIndex="-3"
          />
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

PageNumber.propTypes = {
  onClickHandler: PropTypes.func,
  currPage: PropTypes.number,
  totalPages: PropTypes.number,
};

export default PageNumber;
