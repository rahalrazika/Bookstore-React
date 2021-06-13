import { connect } from 'react-redux';

const BookList = () => (
  <div>
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      <tr>
        <td>1</td>
        <td>je suis john doe</td>
        <td>Random</td>
      </tr>
    </table>
  </div>
);
const mapStateToProps = (state) => ({
  books: state.books,
});
export default connect(mapStateToProps)(BookList);
