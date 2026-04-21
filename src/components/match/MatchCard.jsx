function MatchCard({ match }) {
  return (
    <article className="match-card">
      <div className="match-header">
        <span className="match-type">{match.matchType}</span>
        <span className="match-rating">{match.rating}</span>
      </div>
      
      <div className="match-visual">{match.image}</div>
      
      <h3 className="match-title">{match.title}</h3>
      
      <div className="match-meta">
        <span className="winner">🏆 Winner: {match.winner}</span>
        <span className="duration">⏱️ {match.duration}</span>
      </div>
      
      <p className="match-excerpt">{match.description.substring(0, 100)}...</p>
      
      <span className="view-details">View Details →</span>
    </article>
  )
}

export default MatchCard