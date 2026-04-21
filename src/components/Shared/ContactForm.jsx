import { useState } from 'react'

function ContactForm({ item, type, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.phone.trim()) return
    setSubmitted(true)
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <p style={{ fontSize: '3rem' }}>✅</p>
            <h2 style={{ color: '#2e7d32' }}>Request Sent!</h2>
            <p style={{ margin: '1rem 0', color: '#555' }}>
              {type === 'offer'
                ? `Your offer to lend has been sent to ${item.owner}!`
                : `Your borrow request has been sent to ${item.owner}!`}
            </p>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>
              They will contact you shortly on {formData.phone}
            </p>
            <button className="btn-borrow" style={{ marginTop: '1rem' }} onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h2>
              {type === 'offer' ? '🤝 Offer to Lend' : '🤲 Request to Borrow'}
            </h2>
            <p style={{ color: '#555', fontSize: '0.9rem' }}>
              {type === 'offer'
                ? `You're offering to lend to ${item.owner} who needs: ${item.name}`
                : `You're requesting to borrow: ${item.name} from ${item.owner}`}
            </p>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Your location (e.g. Kilimani)"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any message to the other party..."
              rows={3}
              style={{
                width: '100%',
                padding: '0.7rem 1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '0.95rem',
                resize: 'none'
              }}
            />

            <div className="modal-buttons">
              <button className="btn-borrow" onClick={handleSubmit}>
                {type === 'offer' ? 'Send Offer' : 'Send Request'}
              </button>
              <button className="btn-cancel" onClick={onClose}>Cancel</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ContactForm