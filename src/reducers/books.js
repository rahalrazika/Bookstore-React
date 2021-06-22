const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = {
  books: [
    { id: Math.random(), title: 'The Call of the Wild', category: 'Action' },
    { id: Math.random(), title: 'To Kill a Mockingbird', category: 'Biography' },
    { id: Math.random(), title: 'And Then There Were None', category: 'History' },
    { id: Math.random(), title: 'Ninth House', category: 'Horror' },
    { id: Math.random(), title: 'Clean Code', category: 'Learning' },
  ],
};
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};
export default bookReducer;
