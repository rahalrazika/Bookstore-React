const CHANGE_FILTER = 'CHANGE_FILTER';
const selectedCategory = {
  selectedCategory: 'ALL',
};
const filterReducer = (state = selectedCategory, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};
export default filterReducer;
