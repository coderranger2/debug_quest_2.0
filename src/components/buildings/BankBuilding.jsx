import './Building.css'

export default function BankBuilding({ active, onClick }) {
  return (
    <div className={`building bank-building ${active ? 'active' : ''}`} onClick={onClick} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && onClick()}>
      <div className="speech-bubble bank-bubble">
        <span>💰</span>
      </div>

      <div className="bank-top">
        <div className="bank-sign">
          <span>BANK</span>
        </div>
        <div className="bank-pediment" />
      </div>

      <div className="bank-body">
        <div className="bank-columns">
          <div className="column" />
          <div className="column" />
          <div className="column" />
          <div className="column" />
        </div>

        <div className="bank-facade">
          <div className="bank-door">
            <div className="door-arch" />
          </div>
        </div>

        <div className="atm-machine">
          <div className="atm-label">AT<span>.</span></div>
          <div className="atm-screen">
            <div className="atm-grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="atm-cell" />
              ))}
            </div>
          </div>
          <div className="atm-warning">⚠</div>
        </div>

        <div className="barrier left-barrier">
          <div className="barrier-stripe" />
        </div>
        <div className="barrier right-barrier">
          <div className="barrier-stripe" />
        </div>
      </div>
    </div>
  )
}
