import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchMatchById } from '../data/mockMatches.js'
import LoadingSpinner from '../components/shared/LoadingSpinner.jsx'
import ErrorMessage from '../components/shared/ErrorMessage.jsx'

function MatchDetail() {
  const { matchId } = useParams()
  const navigate = useNavigate()
  const [match, setMatch] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadMatch = async () => {
      try {
        setLoading(true)
        const data = await fetchMatchById(matchId)
        if (!data) throw new Error('Match not found')
        setMatch(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadMatch()
  }, [matchId])

  if (loading) return <LoadingSpinner text="Loading match details..." />
  if (error) return <ErrorMessage message={error} onRetry={() => navigate('/matches')} />
  if (!match) return <ErrorMessage message="Match not found" onRetry={() => navigate('/matches')} />

  return (
    <article className="match-detail">
      <Link to="/matches" className="back-link">← Back to Matches</Link>
      
      <header className="match-detail-header">
        <span className="match-type-badge">{match.matchType}</span>
        <h1>{match.title}</h1>
        <div className="match-stats">
          <span>🏆 Winner: <strong>{match.winner}</strong></span>
          <span>⏱️ Duration: {match.duration}</span>
          <span>{match.rating}</span>
        </div>
      </header>

      <div className="match-detail-content">
        <div className="match-visual-large">{match.image}</div>
        
        <section className="match-description">
          <h2>Match Summary</h2>
          <p>{match.description}</p>
        </section>

        <section className="match-highlights">
          <h2>🔥 Key Moments</h2>
          <ul>
            {match.highlights.map((highlight, index) => (
              <li key={index}>✨ {highlight}</li>
            ))}
          </ul>
        </section>

        <section className="match-actions">
          <button className="btn-primary">🎬 Watch Highlights</button>
          <button className="btn-secondary">📊 View Stats</button>
          <button className="btn-outline">💬 Join Discussion</button>
        </section>
      </div>
    </article>
  )
}

export default MatchDetail