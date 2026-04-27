import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import LoadingSpinner from '../components/Shared/LoadingSpinner'
import ErrorMessage from '../components/Shared/ErrorMessage'

function Community() {
  const [likes, setLikes] = useState({})

  useEffect(() => {
    document.title = 'Community - MtaaShare'
  }, [])

  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  )

  const handleLike = (postId) => {
    setLikes(prev => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1
    }))
  }

  return (
    <>
      <h2>🌍 Community Posts</h2>
      <p style={{ color: '#888', marginBottom: '1.5rem' }}>
        Tips, stories and updates from neighbours around Nairobi
      </p>

      {loading && <LoadingSpinner text="Loading community posts..." />}
      {error && <ErrorMessage message={error} />}

      {posts && posts.map(post => (
        <div key={post.id} className="list-card">
          <div className="list-card-image">
            <span className="list-card-emoji">📝</span>
          </div>
          <div className="list-card-info">
            <h3 style={{ textTransform: 'capitalize' }}>{post.title}</h3>
            <p className="list-card-desc" style={{ textTransform: 'capitalize' }}>
              {post.body.slice(0, 120)}...
            </p>
            <p className="list-card-meta">
              👤 Neighbour #{post.userId} · Post #{post.id}
            </p>
            <button
              className="btn-like"
              onClick={() => handleLike(post.id)}
            >
              ❤️ {likes[post.id] || 0} {likes[post.id] === 1 ? 'like' : 'likes'}
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Community