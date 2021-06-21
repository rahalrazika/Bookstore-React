import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter, removeBook } from '../actions/index';
import Books from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, changeFilter, filter,
}) => {
  const handelRemove = (bookId) => {
    removeBook(bookId);
  };
  const handleFilterChange = (e) => {
    changeFilter(e.target.value);
  };
  const searchBooks = () => {
    if (filter === 'ALL') {
      return books;
    }
    return [...books].filter((book) => book.category === filter);
  };
  return (

    <div>
      <CategoryFilter onChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {searchBooks().map((book) => (
            <Books
              key={book.id}
              bookId={book.id}
              bookTitle={book.title}
              bookCategory={book.category}
              handelRemove={handelRemove}

            />

          ))}
        </tbody>
      </table>
    </div>
  );
};
BooksList.propTypes = {
  books: PropTypes.instanceOf(Array),
  removeBook: PropTypes.func,
  changeFilter: PropTypes.func,
  filter: PropTypes.string,
};
BooksList.defaultProps = {
  books: [],
  removeBook: null,
  changeFilter: null,
  filter: '',
};
const mapStateToProps = (state) => ({
  books: state.bookReducer.books,
  filter: state.filterReducer,
});
const mapDispatchToProps = {
  removeBook,
  changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
