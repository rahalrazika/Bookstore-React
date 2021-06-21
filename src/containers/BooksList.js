import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../actions/index';
import Books from '../components/Book';

const BooksList = ({ books, removeBook }) => {
  const handelRemove = (bookId) => {
    removeBook(bookId);
  };
  return (

    <div>
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
          {books.map((book) => (
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
};
BooksList.defaultProps = {
  books: [],
  removeBook: null,
};
const mapStateToProps = (state) => ({
  books: state.books,
});
const mapDispatchToProps = {
  removeBook,
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
