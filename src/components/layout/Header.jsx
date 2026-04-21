import { NavLink } from 'react-router-dom'

function Header() {
  const navItems = [
    { path: '/', label: '🏠 Home' },
    { path: '/matches', label: '🥊 Matches' },
    { path: '/results', label: '📊 Results' },
    { path: '/highlights', label: '🎬 Highlights' },
    { path: '/about', label: 'ℹ️ About' }
  ]

  return (
    <header className="header">
      <div className="logo">
        <h1>🤼 WrestleMania 42</h1>
        <span className="location">Las Vegas • Allegiant Stadium</span>
      </div>
      
      <nav className="nav">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header