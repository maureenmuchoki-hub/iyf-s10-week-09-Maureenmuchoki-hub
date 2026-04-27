import { useState, useEffect } from 'react'
import AddItemForm from '../components/Items/AddItemForm'
import CategoryFilter from '../components/Shared/CategoryFilter'
import ContactForm from '../components/Shared/ContactForm'
import PostList from '../components/PostList'

function Home() {
  const [showBorrowForm, setShowBorrowForm] = useState(false)
  const [showLendForm, setShowLendForm] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)
  const [contactType, setContactType] = useState(null)

  const [borrowRequests, setBorrowRequests] = useState([
    { id: 1, name: "Borrowing a Drill for a Day", owner: "Paul", distance: "700m", rating: "4.8", description: "Need a drill for some home repairs.", category: "Tools", emoji: "🔧", image: "/drill.jpg" },
    { id: 2, name: "Looking for a Large Cooking Pot", owner: "Sarah", distance: "500m", rating: "5.5", description: "Need a big pot for a family gathering.", category: "Kitchen", emoji: "🍲", image: "/cookingpots.jpg" },
    { id: 3, name: "Need a Baby Stroller", owner: "Aisha", distance: "300m", rating: "4.9", description: "Need a stroller for the weekend.", category: "Baby Items", emoji: "🍼", image: "/stroller.jpg" },
    { id: 4, name: "Looking for Event Seats", owner: "Brian", distance: "1km", rating: "4.7", description: "Need 20 seats for a family event.", category: "Party Gear", emoji: "🪑", image: "/eventseats.jpg" },
  ])

  const [availableItems, setAvailableItems] = useState([
    { id: 1, name: "Tent for the Weekend", owner: "James", distance: "300m", rating: "5.6", description: "Camping tent available for the weekend.", category: "Adventure", emoji: "⛺", image: "/tents.jpg" },
    { id: 2, name: "Ladder for Short-Term Use", owner: "Anne", distance: "850m", rating: "4.7", description: "Sturdy ladder available to borrow.", category: "Tools", emoji: "🪜", image: "/ladder.jpg" },
    { id: 3, name: "Bicycle Available", owner: "Kevin", distance: "600m", rating: "4.5", description: "Mountain bike available for daily hire.", category: "Transport", emoji: "🚲", image: "/bicycle.jpg" },
    { id: 4, name: "Party Speaker", owner: "Mike", distance: "400m", rating: "4.8", description: "JBL speaker available for events.", category: "Party Gear", emoji: "🔊", image: "/speaker.jpg" },
  ])

  const feedPosts = [
    { id: 1, emoji: "🔧", title: "John just lent his Drill to Paul!", excerpt: "Home repairs sorted in Kilimani. Great neighbour!", author: "John", date: "Today, 10:00 AM" },
    { id: 2, emoji: "🍲", title: "Grace lent her Cooking Pot for a wedding!", excerpt: "Big family gathering in Kibera was a success.", author: "Grace", date: "Today, 9:30 AM" },
    { id: 3, emoji: "🚲", title: "Kevin's Bicycle helped Brian explore Kileleshwa!", excerpt: "Perfect for a morning ride around the estate.", author: "Kevin", date: "Yesterday, 8:00 AM" },
    { id: 4, emoji: "⛺", title: "James lent his Tent for a Karen camping trip!", excerpt: "Family had an amazing weekend in nature.", author: "James", date: "Yesterday, 7:00 AM" },
  ]

  useEffect(() => {
    document.title = 'MtaaShare - Borrow & Lend in your Neighbourhood'
  }, [])

  const filteredBorrow = activeCategory === 'All' ? borrowRequests : borrowRequests.filter(i => i.category === activeCategory)
  const filteredAvailable = activeCategory === 'All' ? availableItems : availableItems.filter(i => i.category === activeCategory)

  const handleAddBorrow = (formData) => {
    const emojis = { Tools: "🔧", Kitchen: "🍲", Adventure: "⛺", "Party Gear": "🪑", "Baby Items": "🍼", Transport: "🚲" }
    const newRequest = {
      id: Date.now(),
      name: formData.name,
      owner: "You",
      distance: "0m",
      rating: "5.0",
      description: formData.description || "Looking to borrow this item.",
      category: formData.category,
      emoji: emojis[formData.category] || "📦",
      image: formData.image || null
    }
    setBorrowRequests([...borrowRequests, newRequest])
    setShowBorrowForm(false)
  }

  const handleAddLend = (formData) => {
    const emojis = { Tools: "🔧", Kitchen: "🍲", Adventure: "⛺", "Party Gear": "🪑", "Baby Items": "🍼", Transport: "🚲" }
    const newItem = {
      id: Date.now(),
      name: formData.name,
      owner: "You",
      distance: "0m",
      rating: "5.0",
      description: formData.description || "Available to borrow.",
      category: formData.category,
      emoji: emojis[formData.category] || "📦",
      price: formData.price || 0,
      image: formData.image || null
    }
    setAvailableItems([...availableItems, newItem])
    setShowLendForm(false)
  }

  return (
    <>
      <div className="hero-buttons">
        <button className="btn-need" onClick={() => setShowBorrowForm(true)}>
          🤲 Need to Borrow
        </button>
        <button className="btn-lend" onClick={() => setShowLendForm(true)}>
          🤝 Have to Lend
        </button>
      </div>

      {showBorrowForm && (
        <AddItemForm
          title="Request an Item to Borrow"
          onClose={() => setShowBorrowForm(false)}
          onAdd={handleAddBorrow}
        />
      )}
      {showLendForm && (
        <AddItemForm
          title="Post an Item to Lend"
          onClose={() => setShowLendForm(false)}
          onAdd={handleAddLend}
        />
      )}

      {selectedItem && (
        <ContactForm
          item={selectedItem}
          type={contactType}
          onClose={() => { setSelectedItem(null); setContactType(null) }}
        />
      )}

      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="two-col">
        <div>
          <h2>I Need to Borrow</h2>
          {filteredBorrow.map(item => (
            <div key={item.id} className="list-card">
              <div className="list-card-image">
                {item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : (
                  <span className="list-card-emoji">{item.emoji}</span>
                )}
              </div>
              <div className="list-card-info">
                <h3>{item.name}</h3>
                <p className="list-card-meta">{item.owner}, {item.distance} ⭐ {item.rating}</p>
                <p className="list-card-desc">{item.description}</p>
                <button
                  className="btn-offer"
                  onClick={() => { setSelectedItem(item); setContactType('offer') }}
                >
                  Offer to Lend
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2>Items Available Nearby</h2>
          {filteredAvailable.map(item => (
            <div key={item.id} className="list-card">
              <div className="list-card-image">
                {item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : (
                  <span className="list-card-emoji">{item.emoji}</span>
                )}
              </div>
              <div className="list-card-info">
                <h3>{item.name}</h3>
                <p className="list-card-meta">{item.owner}, {item.distance} ⭐ {item.rating}</p>
                <p className="list-card-desc">{item.description}</p>
                <button
                  className="btn-borrow"
                  onClick={() => { setSelectedItem(item); setContactType('borrow') }}
                >
                  Request to Borrow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>📢 Community Feed</h2>
        <PostList posts={feedPosts} />
      </div>
    </>
  )
}

export default Home