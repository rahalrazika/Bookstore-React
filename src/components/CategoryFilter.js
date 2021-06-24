import PropTypes from 'prop-types';

const CategoryFilter = ({ chooseCategory, selectedCategory }) => {
  const bookCat = ['ALL', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div className="filter-category-container d-flex">
      <select className="filter-category" value={selectedCategory} name="categoryFilter" onChange={chooseCategory}>
        {bookCat.map((cate) => (
          <option key={cate} value={cate}>
            {cate}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  chooseCategory: PropTypes.func,
  selectedCategory: PropTypes.string,
};
CategoryFilter.defaultProps = {
  chooseCategory: null,
  selectedCategory: '',

};

export default CategoryFilter;
