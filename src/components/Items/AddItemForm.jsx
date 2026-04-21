import { useState } from 'react'

function AddItemForm({ onClose, onAdd, title }) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    location: '',
    description: '',
    category: 'Tools'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    if (!formData.name.trim()) return
    onAdd(formData)
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Item name (e.g. Lawn Mower)"
        />
        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Brief description"
        />
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price (Ksh/day) 🇰🇪"
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location (e.g. Kilimani)"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Tools</option>
          <option>Kitchen</option>
          <option>Adventure</option>
          <option>Party Gear</option>
          <option>Baby Items</option>
          <option>Transport</option>
        </select>
        <div className="modal-buttons">
          <button className="btn-borrow" onClick={handleSubmit}>Submit</button>
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AddItemForm