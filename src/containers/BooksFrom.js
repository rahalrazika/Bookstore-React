import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const BooksFrom = ({ createBook }) => {
  const bookCat = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [Data, setData] = useState({ title: '', category: '' });
  const handleChange = (e) => {
    setData((Data) => ({ ...Data, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    createBook(Data);
    setData({ title: '', category: '' });
  };

  return (
    <form>
      <label htmlFor="title">
        Book title:
        <input type="text" name="bookTitle" onChange={handleChange} />
      </label>
      <label htmlFor="body">
        Choose a category:
        <select name="categories" onChange={handleChange}>
          {bookCat.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};
BooksFrom.propTypes = {
  createBook: PropTypes.func.isRequired,
};
const mapDispatchToProps = {
  createBook,
};
export default connect(null, mapDispatchToProps)(BooksFrom);
