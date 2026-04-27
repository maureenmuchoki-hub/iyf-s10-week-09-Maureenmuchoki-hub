import { useEffect } from 'react'
import AddItemForm from '../components/Items/AddItemForm'
import useLocalStorage from '../hooks/useLocalStorage'

function MyItems() {
  const [myItems, setMyItems] = useLocalStorage('myItems', [])
  const [showLendForm, setShowLendForm] = useLocalStorage('showLendForm', false)

  useEffect(() => {
    document.title = 'My Items - MtaaShare'
  }, [])

  const handleAddLend = (formData) => {
    const emojis = { Tools: "🔧", Kitchen: "🍲", Adventure: "⛺", "Party Gear": "🪑", "Baby Items": "🍼", Transport: "🚲" }
    const newItem = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      emoji: emojis[formData.category] || "📦",
      description: formData.description || "Available to borrow.",
      type: 'lend'
    }
    setMyItems([...myItems, newItem])
    setShowLendForm(false)
  }

  return (
    <>
      <h2>My Items</h2>
      <button className="btn-post" onClick={() => setShowLendForm(true)}>
        + Post an Item
      </button>

      {showLendForm && (
        <AddItemForm
          title="Post an Item to Lend"
          onClose={() => setShowLendForm(false)}
          onAdd={handleAddLend}
        />
      )}

      {myItems.length === 0 ? (
        <p style={{ marginTop: '1rem', color: '#888' }}>
          You haven't posted any items yet!
        </p>
      ) : (
        <div>
          {myItems.map(item => (
            <div key={item.id} className="list-card">
              <div className="list-card-image">
                <span className="list-card-emoji">{item.emoji}</span>
              </div>
              <div className="list-card-info">
                <h3>{item.name}</h3>
                <p className="list-card-meta">
                  {item.category} · ✅ Available to Lend
                </p>
                <p className="list-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default MyItems