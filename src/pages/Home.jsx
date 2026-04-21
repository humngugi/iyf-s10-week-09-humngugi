import { Link } from 'react-router-dom'

function Home() {
  const eventStats = [
    { label: 'Date', value: 'April 6-7, 2026' },
    { label: 'Venue', value: 'Allegiant Stadium' },
    { label: 'Attendance', value: '65,000+' },
    { label: 'Matches', value: '12 Epic Battles' }
  ]

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>🏆 WrestleMania 42</h1>
          <p className="tagline">The Biggest Stage of Them All • Las Vegas</p>
          <div className="cta-buttons">
            <Link to="/matches" className="btn-primary">View Match Card</Link>
            <Link to="/highlights" className="btn-secondary">Watch Highlights</Link>
          </div>
        </div>
        <div className="hero-visual">🤼✨</div>
      </section>

      <section className="stats-grid">
        {eventStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="featured-match">
        <h2>🔥 Main Event Spotlight</h2>
        <div className="match-preview">
          <div className="match-visual">🏆</div>
          <div className="match-info">
            <h3>Roman Reigns vs. Cody Rhodes</h3>
            <p>WWE Championship • Winner Takes All</p>
            <p className="match-desc">
              After years of buildup, the Tribal Chief faces his ultimate challenger 
              under the bright lights of Sin City. Who will leave as the undisputed champion?
            </p>
            <Link to="/matches/1" className="btn-outline">Read Full Preview →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home