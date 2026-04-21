import PostCard from './PostCard'

function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  )
}

export default PostList