import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header>
        <nav>
          <span>🏘️ MtaaShare Hub</span>
          <div>
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
          <h1>Mtaashare Hub</h1>
          <p>Your Neighborhood's Lending Library</p>
        </div>
      </header>
    </div>
  )
}

export default Header