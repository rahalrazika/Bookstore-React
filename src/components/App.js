import BooksFrom from '../containers/BooksFrom';
import BooksList from '../containers/BooksList';
import '../style/App.css';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksFrom />

    </div>
  );
}

export default App;
