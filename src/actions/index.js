const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';
const INCREMENT_ID = 'INCREMENT_ID';

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const incrementId = () => ({
  type: INCREMENT_ID,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});
export const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  payload: category,
});
