import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Books from '../components/Book';

const BooksList = ({ books }) => (
  <div>
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {books.map((book) => (
        <Books
          key={book.id}
          bookId={book.id}
          bookTitle={book.title}
          bookCategory={book.category}
        />
      ))}
    </table>
  </div>
);
BooksList.propTypes = {
  books: PropTypes.instanceOf(Array),
};
BooksList.defaultProps = {
  books: [],
};
const mapStateToProps = (state) => ({
  books: state.books,
});
export default connect(mapStateToProps)(BooksList);
