import { useState } from 'react'
import CityMap from './components/CityMap'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const totalBugs = 50
  const [bugsFixed, setBugsFixed] = useState(0)

  return (
    <main className="home-shell">
      <div className="star-layer" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${(i * 19) % 100}%`,
              top: `${5 + ((i * 13) % 40)}%`,
              animationDelay: `${(i % 7) * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="page-container">
        <header className="hero-header">
          <h1>
            <span>⚠️ GLITCH CITY</span>
            <span>EXPLORER</span>
          </h1>
          <p>A CITY FULL OF BROKEN FEATURES • 50+ BUGS TO FIX</p>
        </header>

        <section className="main-grid">
          <CityMap bugsFixed={bugsFixed} setBugsFixed={setBugsFixed} totalBugs={totalBugs} />
          <Sidebar bugsFixed={bugsFixed} totalBugs={totalBugs} />
        </section>
      </div>
    </main>
  )
}

export default App
