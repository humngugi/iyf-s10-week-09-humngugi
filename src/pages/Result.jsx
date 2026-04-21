import { useState } from 'react'
import { mockMatches } from '../data/mockMatches.js'

function Results() {
  const [sortBy, setSortBy] = useState('rating')
  
  const sortedMatches = [...mockMatches].sort((a, b) => {
    if (sortBy === 'rating') return b.rating.length - a.rating.length
    if (sortBy === 'duration') {
      const timeA = a.duration.split(':').reduce((acc, time) => (60 * acc) + +time)
      const timeB = b.duration.split(':').reduce((acc, time) => (60 * acc) + +time)
      return timeB - timeA
    }
    return 0
  })

  const champions = mockMatches.filter(m => m.matchType.includes('Championship'))

  return (
    <div className="results-page">
      <header className="page-header">
        <h1>📊 WrestleMania 42 Results</h1>
        <p>Complete results, statistics, and championship outcomes</p>
      </header>

      <section className="champions-showcase">
        <h2>🏆 New Champions</h2>
        <div className="champions-grid">
          {champions.map(match => (
            <div key={match.id} className="champion-card">
              <div className="champion-image">{match.image}</div>
              <h3>{match.winner}</h3>
              <p>{match.title}</p>
              <span className="match-duration">{match.duration}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="all-results">
        <div className="results-header">
          <h2>📋 Full Match Results</h2>
          <div className="sort-controls">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="rating">⭐ Rating</option>
              <option value="duration">⏱️ Duration</option>
              <option value="title">📝 Title</option>
            </select>
          </div>
        </div>

        <div className="results-table">
          <table>
            <thead>
              <tr>
                <th>Match</th>
                <th>Type</th>
                <th>Winner</th>
                <th>Duration</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {sortedMatches.map(match => (
                <tr key={match.id}>
                  <td><strong>{match.title}</strong></td>
                  <td>{match.matchType}</td>
                  <td>🏆 {match.winner}</td>
                  <td>{match.duration}</td>
                  <td>{match.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Results