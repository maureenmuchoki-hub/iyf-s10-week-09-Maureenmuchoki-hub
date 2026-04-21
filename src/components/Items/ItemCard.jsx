function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img
        src={item.image}
        alt={item.name}
      />
      <div className="item-card-body">
        <h3>{item.name}</h3>
        <p className="available">✅ Available</p>
        <p className="location">📍 {item.location} · {item.owner}</p>
        <div className="item-card-footer">
          <span className="price">Ksh {item.price}/day</span>
          <button className="btn-borrow">Borrow</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCard