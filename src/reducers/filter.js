const CHANGE_FILTER = 'CHANGE_FILTER ';
const initialFilterState = 'ALL';
const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};
export default filterReducer;
