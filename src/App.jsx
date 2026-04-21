import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/layout.jsx'
import Home from './pages/Home.jsx'
import Matches from './pages/Matches.jsx'
import MatchDetail from './pages/Matchdetail.jsx'
import Results from './pages/Result.jsx'
import Highlights from './pages/Highlights.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="matches" element={<Matches />} />
        <Route path="matches/:matchId" element={<MatchDetail />} />
        <Route path="results" element={<Results />} />
        <Route path="highlights" element={<Highlights />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App