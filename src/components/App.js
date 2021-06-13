import BookFrom from '../containers/BookFrom';
import BookList from '../containers/BooksList';
import '../style/App.css';

function App() {
  return (
    <div className="App">
      <BookFrom />
      <BookList />
    </div>
  );
}

export default App;
