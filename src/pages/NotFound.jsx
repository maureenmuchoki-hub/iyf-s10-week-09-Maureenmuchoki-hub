import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 0' }}>
      <p style={{ fontSize: '5rem' }}>🏘️</p>
      <h2>404 - Page Not Found</h2>
      <p style={{ color: '#888', margin: '1rem 0' }}>
        Looks like this page doesn't exist in the neighbourhood!
      </p>
      <Link to="/">
        <button className="btn-post">Go Back Home</button>
      </Link>
    </div>
  )
}

export default NotFound