import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  const { bookId, bookTitle, bookCategory } = props;
  return (
    <tr>
      <th>{bookId}</th>
      <th>{bookTitle}</th>
      <th>{bookCategory}</th>
    </tr>
  );
};
Books.propTypes = {
  bookId: PropTypes.number,
  bookTitle: PropTypes.string,
  bookCategory: PropTypes.string,
};

Books.defaultProps = {
  bookId: '',
  bookTitle: '',
  bookCategory: '',
};

export default Books;
