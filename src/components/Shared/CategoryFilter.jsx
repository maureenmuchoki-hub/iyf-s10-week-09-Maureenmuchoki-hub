function CategoryFilter({ activeCategory, setActiveCategory }) {
  const categories = [
    { label: 'All', icon: '🏘️' },
    { label: 'Tools', icon: '🔧' },
    { label: 'Kitchen', icon: '🍲' },
    { label: 'Adventure', icon: '⛺' },
    { label: 'Party Gear', icon: '🎉' },
    { label: 'Baby Items', icon: '🍼' },
    { label: 'Transport', icon: '🚲' },
  ]

  return (
    <div className="category-filter">
      {categories.map(cat => (
        <button
          key={cat.label}
          className={`cat-btn ${activeCategory === cat.label ? 'cat-btn-active' : ''}`}
          onClick={() => setActiveCategory(cat.label)}
        >
          {cat.icon} {cat.label}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter