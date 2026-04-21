function Header({ activePage, setActivePage }) {
  return (
    <div>
      <header>
        <nav>
          <span>🏘️ MtaaShare Hub</span>
          <div>
            <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('home') }}>
              Home
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('myitems') }}>
              My Items
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('profile') }}>
              Profile
            </a>
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