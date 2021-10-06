import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  const {
    bookId, bookTitle, bookCategory, handelRemove,
  } = props;
  return (
    <div className="book-container d-flex">

      <div className="book-description">
        <p>{bookCategory}</p>
        <h2>{bookTitle}</h2>
        <h5>Suzanne Collins</h5>
        <div className="book-buttons d-flex">
          <button type="button">Comments</button>
          <button type="button" onClick={() => handelRemove(bookId)}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="d-flex">
        <div className="progress-bar d-flex">
          <div className="progress-circle">
            <div className="light-circle" />
            <div className="blue-circle" />
          </div>
          <div className="percentage">
            <p className="percentage-text">75%</p>
            <p>Completed</p>
          </div>
        </div>
      </div>

      <div className=" chapter-container d-flex">
        <span className="chapter-text">Current Chapter</span>
        <p>Chapter 17</p>
        <button type="button">Update Progresses</button>
      </div>

    </div>
  );
};
Books.propTypes = {
  bookId: PropTypes.number,
  bookTitle: PropTypes.string,
  bookCategory: PropTypes.string,
  handelRemove: PropTypes.func,
};

Books.defaultProps = {
  bookId: null,
  bookTitle: null,
  bookCategory: null,
  handelRemove: null,
};

export default Books;
