import './Building.css'

export default function SchoolBuilding({ active, onClick }) {
  return (
    <div className={`building school-building ${active ? 'active' : ''}`} onClick={onClick} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && onClick()}>
      <div className="speech-bubble school-bubble">
        <span>?</span>
      </div>

      <div className="school-roof">
        <div className="school-flag">
          <div className="flag-pole" />
          <div className="flag-cloth" />
        </div>
        <div className="school-clock">
          <div className="clock-face">
            <div className="clock-hand hour" />
            <div className="clock-hand minute" />
          </div>
        </div>
      </div>

      <div className="school-sign-bar">
        <span>SCHOOL</span>
      </div>

      <div className="school-body">
        <div className="school-window-row">
          <div className="school-window">
            <div className="window-pane" />
            <div className="window-pane" />
          </div>
          <div className="school-window">
            <div className="window-pane" />
            <div className="window-pane" />
          </div>
        </div>

        <div className="school-door">
          <div className="door-window" />
        </div>

        <div className="chalkboard">
          <div className="chalk-row">
            <span className="chalk-icon">9</span>
            <span className="chalk-op">-</span>
            <span className="chalk-icon">✓</span>
          </div>
          <div className="chalk-row">
            <span className="chalk-icon tick-x">☑</span>
            <span className="chalk-icon">i</span>
            <span className="chalk-icon cross">✗</span>
          </div>
        </div>
      </div>
    </div>
  )
}
