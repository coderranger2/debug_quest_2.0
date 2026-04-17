import { useState } from 'react'
import './CityMap.css'
import BankBuilding from './buildings/BankBuilding'
import SchoolBuilding from './buildings/SchoolBuilding'
import ArcadeBuilding from './buildings/ArcadeBuilding'

const bugLabels = {
  shop: { title: 'Cart Bugs • Wrong Prices', sub: 'Missing Items' },
  bank: { title: 'Lost Transactions', sub: 'UI Balance Mismatch • Race Conditions' },
  school: { title: 'Quiz Logic Errors', sub: 'Progress Not Saved • Nav Bugs' },
  arcade: { title: 'Score Duplication', sub: 'Game Freeze • Input Delay' },
}

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
          <div className="fountain-base">
            <div className="fountain-water" />
            <div className="fountain-center" />
          </div>
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
            <img src="/shop.png" alt="Shop building" className="shop-image" />
          </button>
          <BugLabel data={bugLabels.shop} color="#f5c842" />
        </div>

        <div className="building-slot bank-slot">
          <BankBuilding active={active === 'bank'} onClick={() => setActive(active === 'bank' ? null : 'bank')} />
          <BugLabel data={bugLabels.bank} color="#9ed2ff" right />
        </div>

        <div className="building-slot school-slot">
          <SchoolBuilding active={active === 'school'} onClick={handleSchoolClick} />
          <BugLabel data={bugLabels.school} color="#f5c842" />
        </div>

        <div className="building-slot arcade-slot">
          <ArcadeBuilding active={active === 'arcade'} onClick={() => setActive(active === 'arcade' ? null : 'arcade')} />
          <BugLabel data={bugLabels.arcade} color="#e78de8" right pink />
        </div>

        <div className="river" />
        <div className="bridge" />
      </div>
    </div>
  )
}

function Tree({ style, size }) {
  const sizes = { sm: 28, md: 36, lg: 46 }
  const s = sizes[size] || 36
  return (
    <div className="tree" style={{ ...style, width: s, height: s * 1.2 }}>
      <div className="tree-top" style={{ width: s, height: s, borderBottomWidth: s }} />
      <div className="tree-trunk" style={{ width: s * 0.25, height: s * 0.3, left: s * 0.375 }} />
    </div>
  )
}

function Cone({ style }) {
  return (
    <div className="traffic-cone" style={style}>
      <div className="cone-top" />
      <div className="cone-stripe" />
      <div className="cone-base" />
    </div>
  )
}

function RoadWarning({ style }) {
  return (
    <div className="road-warning" style={style}>
      <span>⚠</span>
    </div>
  )
}

function BugLabel({ data, color, right, pink }) {
  return (
    <div className={`bug-label ${right ? 'right' : 'left'} ${pink ? 'pink' : ''}`} style={{ borderColor: color }}>
      <span className="bug-icon">🐛</span>
      <div className="bug-text">
        <div className="bug-title">{data.title}</div>
        <div className="bug-sub">{data.sub}</div>
      </div>
    </div>
  )
}
