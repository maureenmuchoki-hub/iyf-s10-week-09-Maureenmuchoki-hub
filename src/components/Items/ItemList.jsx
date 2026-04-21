import ItemCard from './ItemCard'

function ItemList({ items }) {
  return (
    <div className="item-grid">
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ItemList