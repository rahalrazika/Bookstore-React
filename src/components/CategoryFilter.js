const CategoryFilter = () => {
  const bookCat = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <select name="categoryFilter">
      <option>ALL</option>
      {bookCat.map((cate) => (
        <option key={cate} value={cate}>
          {cate}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
