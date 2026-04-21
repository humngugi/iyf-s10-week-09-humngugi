function About() {
  const venueInfo = [
    { label: 'Stadium', value: 'Allegiant Stadium' },
    { label: 'Location', value: 'Las Vegas, Nevada' },
    { label: 'Capacity', value: '65,000 fans' },
    { label: 'Dates', value: 'April 6-7, 2026' },
    { label: 'Broadcast', value: 'Peacock / WWE Network' }
  ]

  const funFacts = [
    '🎰 First WrestleMania held in Las Vegas since 2009',
    '🏟️ Allegiant Stadium features a retractable field for wrestling setup',
    '🌟 Over 20 Hall of Famers in attendance for the weekend',
    '🎤 Live musical performances between matches',
    '🍽️ Exclusive VIP dining experiences available'
  ]

  return (
    <div className="about-page">
      <header className="page-header">
        <h1>ℹ️ About WrestleMania 42</h1>
        <p>The Biggest Party of the Year • Las Vegas Edition</p>
      </header>

      <section className="event-overview">
        <h2>🎪 Event Overview</h2>
        <p>
          WrestleMania 42 brought the spectacle of sports entertainment to the 
          heart of Las Vegas. With two nights of action at Allegiant Stadium, 
          fans witnessed championship changes, shocking returns, and moments 
          that will be remembered forever.
        </p>
        <p>
          From the iconic Las Vegas Strip to the electric atmosphere inside 
          the stadium, WrestleMania 42 delivered an unforgettable experience 
          for fans around the world.
        </p>
      </section>

      <section className="venue-details">
        <h2>🏟️ Venue Information</h2>
        <div className="info-grid">
          {venueInfo.map((info, index) => (
            <div key={index} className="info-item">
              <span className="info-label">{info.label}</span>
              <span className="info-value">{info.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="fun-facts">
        <h2>🎲 Fun Facts</h2>
        <ul>
          {funFacts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </section>

      <section className="cta-section">
        <h2>🔔 Never Miss a Moment</h2>
        <p>Subscribe to get updates on future WWE events and exclusive content.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit" className="btn-primary">Subscribe</button>
        </form>
      </section>
    </div>
  )
}

export default About