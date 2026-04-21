import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.js'
import { fetchMatches } from '../data/mockMatches.js'
import MatchCard from '../components/Match/MatchCard.jsx'
import LoadingSpinner from '../components/shared/LoadingSpinner.jsx'
import ErrorMessage from '../components/shared/ErrorMessage.jsx'
import SearchBar from '../components/shared/SearchBar.jsx'

function Matches() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  
  // Using custom hook with mock API
  const { data: matches, loading, error } = useFetch('api/matches', {
    // Override fetch for mock data
    customFetch: fetchMatches
  })

  // Fallback: if custom fetch not implemented, use mock directly
  const [matchData, setMatchData] = useState([])
  
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchMatches()
      setMatchData(data)
    }
    loadData()
  }, [])

  const filteredMatches = (matches || matchData).filter(match => {
    const matchesSearch = match.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         match.winner.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || match.matchType === filterType
    return matchesSearch && matchesFilter
  })

  if (loading) return <LoadingSpinner text="Loading match card..." />
  if (error) return <ErrorMessage message={error} onRetry={() => window.location.reload()} />

  return (
    <div className="matches-page">
      <header className="page-header">
        <h1>🥊 WrestleMania 42 Match Card</h1>
        <p>12 Epic Battles • Las Vegas</p>
      </header>

      <div className="filters">
        <SearchBar 
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search matches or winners..."
        />
        
        <div className="filter-buttons">
          {['all', 'Championship Match', 'Ladder Match', 'Tag Team Match'].map(type => (
            <button
              key={type}
              className={`filter-btn ${filterType === type ? 'active' : ''}`}
              onClick={() => setFilterType(type)}
            >
              {type === 'all' ? 'All Matches' : type}
            </button>
          ))}
        </div>
      </div>

      <div className="matches-grid">
        {filteredMatches.map(match => (
          <Link key={match.id} to={`/matches/${match.id}`} className="match-link">
            <MatchCard match={match} />
          </Link>
        ))}
      </div>

      {filteredMatches.length === 0 && (
        <p className="no-results">No matches found for "{searchTerm}"</p>
      )}
    </div>
  )
}

export default Matches