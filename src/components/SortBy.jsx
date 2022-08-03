function SortBy({sort, handleSorting}) {
  return (
    <select 
      className="sortBy" 
      value={sort}
      onChange={handleSorting}
        >
        <option value="A-Z">Name&darr;</option>
        <option value="Z-A">Name&uarr;</option>
        <option value="dateUp">Date&darr;</option>
        <option value="dateDown">Date&uarr;</option>
    </select>
);
}

export default SortBy;