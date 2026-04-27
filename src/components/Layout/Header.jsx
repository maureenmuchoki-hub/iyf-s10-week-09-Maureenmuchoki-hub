import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header style={{ backgroundColor: '#2e7d32', color: 'white', padding: '1rem 2rem' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>🏘️ MtaaShare Hub</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/myitems" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            My Items
          </NavLink>
          <NavLink to="/community" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Community
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Profile
          </NavLink>
          <span>🔔</span>
        </div>
      </nav>
      <div>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>MtaaShare Hub</h1>
        <p style={{ textAlign: 'center', opacity: '0.85', marginTop: '0.5rem', paddingBottom: '2rem' }}>
          Your Neighborhood's Lending Library
        </p>
      </div>
    </header>
  )
}

export default Header