import React from 'react';

const BooksFrom = () => {
  const bookCat = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <label htmlFor="title">
        Book title:
        <input type="text" name="book" />
      </label>
      <label htmlFor="body">
        Choose a category:
        <select name="categories">
          {bookCat.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksFrom;
