import { useState } from 'react'

function PostCard({ title, excerpt, author, date, emoji }) {
  const [likes, setLikes] = useState(0)

  return (
    <article className="post-card">
      <div className="post-card-left">
        <span className="post-emoji">{emoji}</span>
      </div>
      <div className="post-card-content">
        <h3>{title}</h3>
        <p className="post-excerpt">{excerpt}</p>
        <div className="post-meta">
          <span>👤 {author}</span>
          <span> · {date}</span>
        </div>
        <button className="btn-like" onClick={() => setLikes(likes + 1)}>
          ❤️ {likes} {likes === 1 ? 'neighbour liked this' : 'neighbours liked this'}
        </button>
      </div>
    </article>
  )
}

export default PostCard