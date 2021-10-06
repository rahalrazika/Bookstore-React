const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const INCREMENT_ID = 'INCREMENT_ID';
const initialState = {
  books: [
    { id: 1, title: 'The Call of the Wild', category: 'Action' },
    { id: 2, title: 'To Kill a Mockingbird', category: 'Biography' },
    { id: 3, title: 'And Then There Were None', category: 'History' },
    { id: 4, title: 'Ninth House', category: 'Horror' },
    { id: 5, title: 'Clean Code', category: 'Learning' },
  ],
  lastId: 6,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter((book) => book.id !== action.payload) };
    case INCREMENT_ID:
      return { ...state, lastId: state.lastId + 1 };
    default:
      return state;
  }
};
export default bookReducer;
