import BooksForm from '../containers/BooksFrom';
import BooksList from '../containers/BooksList';
import '../style/App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="d-flex container">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
