import './Building.css'

export default function ArcadeBuilding({ active, onClick }) {
  return (
    <div className={`building arcade-building ${active ? 'active' : ''}`} onClick={onClick} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && onClick()}>
      <div className="speech-bubble arcade-bubble">
        <span>💔</span>
      </div>

      <div className="arcade-sign">
        <div className="arcade-bolt">⚡</div>
        <span>ARCADE</span>
      </div>

      <div className="arcade-body">
        <div className="neon-strip top-neon" />

        <div className="arcade-front">
          <div className="arcade-machine left-machine">
            <div className="machine-screen" />
            <div className="machine-controls">
              <div className="joystick" />
              <div className="btn-row">
                <div className="btn" />
                <div className="btn" />
              </div>
            </div>
          </div>
          <div className="arcade-machine right-machine">
            <div className="machine-screen green" />
            <div className="machine-controls">
              <div className="joystick" />
              <div className="btn-row">
                <div className="btn" />
                <div className="btn" />
              </div>
            </div>
          </div>
        </div>

        <div className="high-score-board">
          <div className="hs-label">HIGH<br />SCORE</div>
          <div className="hs-value">0000</div>
        </div>

        <div className="glitch-wheel">
          <div className="wheel-inner" />
        </div>

        <div className="neon-strip bot-neon" />
      </div>
    </div>
  )
}
