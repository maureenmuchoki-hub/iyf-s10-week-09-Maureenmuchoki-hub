function Profile() {
  return (
    <>
      <h2>My Profile</h2>
      <div className="profile-card">
        <p style={{ fontSize: '3rem', textAlign: 'center' }}>👤</p>
        <h3 style={{ textAlign: 'center' }}>Maureen Muchoki</h3>
        <p style={{ textAlign: 'center', color: '#888' }}>📍 Nairobi, Kenya</p>
        <hr style={{ margin: '1rem 0' }} />
        <p>⭐ Rating: 4.8</p>
        <p>📦 Items Listed: 0</p>
        <p>🤝 Successful Borrows: 3</p>
      </div>
    </>
  )
}

export default Profile