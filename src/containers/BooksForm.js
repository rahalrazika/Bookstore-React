import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook, incrementId } from '../actions/index';

const BooksForm = ({ createBook, incrementId, lastId }) => {
  const bookCat = ['ALL', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [Data, setData] = useState({ id: lastId, title: '', category: '' });
  const handleChange = (e) => {
    setData((Data) => ({ ...Data, id: lastId, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    incrementId();
    createBook(Data);
    setData({ title: '', category: '', id: lastId });
    e.target.reset();
  };
  return (
    <div className="form">
      <h2 className="form-title">add new book</h2>
      <form className="form-container" onSubmit={handleSubmit}>

        <input className="form-input" placeholder="Book Title" type="text" name="title" onChange={handleChange} />

        <select className="category" name="category" onChange={handleChange}>
          {bookCat.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>

        <button className="button-form" type="submit" value="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  lastId: state.bookReducer.lastId,
});

BooksForm.propTypes = {
  createBook: PropTypes.func,
  lastId: PropTypes.number,
  incrementId: PropTypes.func,
};
BooksForm.defaultProps = {
  createBook: null,
  incrementId: null,
  lastId: 6,
};

export default connect(mapStateToProps, { createBook, incrementId })(BooksForm);
