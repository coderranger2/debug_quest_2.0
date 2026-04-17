export default function ShopToolbar({
  categories,
  search,
  activeCategory,
  sortDirection,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}) {
  return (
    <section className="shop-controls" aria-label="Shop controls">
      <div className="search-shell">
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search products, glitches, and accidental bargains..."
        />
      </div>

      <div className="filters-row">
        <div className="chips" role="group" aria-label="Filter categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`chip ${activeCategory === category ? 'active' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <label className="sort-control">
          <span>Sort</span>
          <select value={sortDirection} onChange={(event) => onSortChange(event.target.value)}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </label>
      </div>
    </section>
  )
}
