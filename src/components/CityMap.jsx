import { useState } from 'react'
import './CityMap.css'

export default function CityMap({
  bugsFixed: _bugsFixed,
  setBugsFixed: _setBugsFixed,
  totalBugs: _totalBugs,
  onShopClick,
  onSchoolClick,
}) {
  const [active, setActive] = useState(null)

  const handleShopClick = () => {
    setActive(active === 'shop' ? null : 'shop')
    if (onShopClick) {
      onShopClick()
    }
  }

  const handleSchoolClick = () => {
    setActive(active === 'school' ? null : 'school')
    if (onSchoolClick) {
      onSchoolClick()
    }
  }

  return (
    <div className="city-map-wrapper">
      <div className="city-map">
        <div className="ground" />

        <svg className="paths-svg" viewBox="0 0 860 480" preserveAspectRatio="xMidYMid meet">
          <line x1="430" y1="80" x2="430" y2="480" stroke="#c8a870" strokeWidth="18" strokeDasharray="28 12" strokeLinecap="square" />
          <line x1="60" y1="280" x2="800" y2="280" stroke="#c8a870" strokeWidth="18" strokeDasharray="28 12" strokeLinecap="square" />
          <line x1="200" y1="160" x2="370" y2="260" stroke="#c8a870" strokeWidth="14" strokeDasharray="20 10" strokeLinecap="square" />
          <line x1="640" y1="160" x2="490" y2="260" stroke="#c8a870" strokeWidth="14" strokeDasharray="20 10" strokeLinecap="square" />
          <line x1="200" y1="370" x2="370" y2="300" stroke="#c8a870" strokeWidth="14" strokeDasharray="20 10" strokeLinecap="square" />
          <line x1="640" y1="370" x2="490" y2="300" stroke="#c8a870" strokeWidth="14" strokeDasharray="20 10" strokeLinecap="square" />
          <circle cx="430" cy="280" r="38" fill="none" stroke="#c8a870" strokeWidth="10" strokeDasharray="16 8" />
        </svg>

        <div className="fountain">
          <img src="/waterfall.png" alt="Waterfall" className="fountain-image" />
        </div>

        <Tree style={{ left: '4%', top: '12%' }} size="lg" />
        <Tree style={{ left: '10%', top: '8%' }} size="md" />
        <Tree style={{ left: '6%', top: '55%' }} size="lg" />
        <Tree style={{ left: '2%', top: '72%' }} size="md" />
        <Tree style={{ left: '14%', top: '82%' }} size="sm" />
        <Tree style={{ left: '22%', top: '88%' }} size="md" />
        <Tree style={{ left: '35%', top: '90%' }} size="lg" />
        <Tree style={{ left: '50%', top: '88%' }} size="sm" />
        <Tree style={{ left: '62%', top: '92%' }} size="md" />
        <Tree style={{ left: '75%', top: '87%' }} size="lg" />
        <Tree style={{ left: '88%', top: '80%' }} size="md" />
        <Tree style={{ left: '92%', top: '58%' }} size="sm" />
        <Tree style={{ left: '88%', top: '10%' }} size="lg" />
        <Tree style={{ left: '78%', top: '6%' }} size="md" />
        <Tree style={{ left: '55%', top: '6%' }} size="sm" />
        <Tree style={{ left: '40%', top: '4%' }} size="md" />
        <Tree style={{ left: '25%', top: '5%' }} size="lg" />
        <Tree style={{ left: '30%', top: '62%' }} size="sm" />
        <Tree style={{ left: '62%', top: '60%' }} size="sm" />

        <Bench style={{ left: '46%', top: '12%' }} size="md" />
        <Bench style={{ left: '31%', top: '66%' }} size="md" />
        <Bench style={{ left: '64%', top: '64%' }} size="md" />
        <Bench style={{ left: '24%', top: '86%' }} size="lg" />
        <Bench style={{ left: '52%', top: '86%' }} size="lg" />
        <Bench style={{ left: '76%', top: '86%' }} size="lg" />

        <Cone style={{ left: '48%', top: '68%' }} />
        <Cone style={{ left: '52%', top: '72%' }} />
        <Cone style={{ left: '36%', top: '50%' }} />

        <RoadWarning style={{ left: '54%', top: '62%' }} />

        <div className="building-slot shop-slot">
          <button
            type="button"
            className={`shop-image-button ${active === 'shop' ? 'active' : ''}`}
            onClick={handleShopClick}
            aria-label="Open Shop House"
          >
            <img src="/new_shop.png" alt="Shop building" className="shop-image" />
          </button>
        </div>

        <div className="building-slot bank-slot">
          <button
            type="button"
            className={`bank-image-button ${active === 'bank' ? 'active' : ''}`}
            onClick={() => setActive(active === 'bank' ? null : 'bank')}
            aria-label="Open Bank District"
          >
            <img src="/bankkk.png" alt="Bank building" className="bank-image" />
          </button>
        </div>

        <div className="building-slot school-slot">
          <button
            type="button"
            className={`school-image-button ${active === 'school' ? 'active' : ''}`}
            onClick={handleSchoolClick}
            aria-label="Open School House"
          >
            <img src="/school.png" alt="School building" className="school-image" />
          </button>
        </div>

        <div className="building-slot arcade-slot">
          <button
            type="button"
            className={`arcade-image-button ${active === 'arcade' ? 'active' : ''}`}
            onClick={() => setActive(active === 'arcade' ? null : 'arcade')}
            aria-label="Open Arcade District"
          >
            <img src="/arcade.png" alt="Arcade building" className="arcade-image" />
          </button>
        </div>

        <div className="river" />
        <div className="bridge" />
      </div>
    </div>
  )
}

function Tree({ style, size }) {
  const sizes = { sm: 40, md: 54, lg: 72 }
  const s = sizes[size] || 38
  return <img src="/tree.png" alt="" aria-hidden="true" className="tree" style={{ ...style, width: s, height: 'auto' }} />
}

function Bench({ style, size = 'md' }) {
  const sizes = { sm: 24, md: 36, lg: 44 }
  const s = sizes[size] || 26
  return (
    <img
      src="/sitting_bench.png"
      alt=""
      aria-hidden="true"
      className="bench"
      style={{ ...style, width: s, height: 'auto', transform: 'translate(-50%, -50%)' }}
    />
  )
}

function Cone({ style }) {
  return <img src="/capp.png" alt="" aria-hidden="true" className="traffic-cone" style={style} />
}

function RoadWarning({ style }) {
  return (
    <div className="road-warning" style={style}>
      <span>⚠</span>
    </div>
  )
}

