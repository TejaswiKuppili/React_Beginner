import './TodoFilter.css';

function TodoFilter({ filter, setFilter }) {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <div className="filter-group">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`filter-button ${filter === f ? 'active' : ''}`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
