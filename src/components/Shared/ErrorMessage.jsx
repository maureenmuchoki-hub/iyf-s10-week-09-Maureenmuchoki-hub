function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-state">
      <p>⚠️ {message}</p>
      {onRetry && (
        <button className="btn-post" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorMessage