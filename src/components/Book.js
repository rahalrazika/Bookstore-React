import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  const {
    bookId, bookTitle, bookCategory, handelRemove,
  } = props;
  return (
    <tr>
      <td>{bookId}</td>
      <td>{bookTitle}</td>
      <td>{bookCategory}</td>
      <td><button type="button" onClick={() => handelRemove(bookId)}>Remove</button></td>
    </tr>
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
