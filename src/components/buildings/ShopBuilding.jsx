import './Building.css'

export default function ShopBuilding({ active, onClick }) {
  return (
    <div className={`building shop-building ${active ? 'active' : ''}`} onClick={onClick} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && onClick()}>
      <div className="bug-float shop-bug">
        <div className="bug-circle red-circle">
          <span>🐛</span>
        </div>
      </div>

      <div className="shop-sign-container">
        <div className="shop-sign">
          <span>SHOP</span>
        </div>
      </div>

      <div className="shop-body">
        <div className="awning">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className={`awning-stripe ${i % 2 === 0 ? 'stripe-red' : 'stripe-cream'}`} />
          ))}
        </div>

        <div className="shop-front">
          <div className="shop-window cart-window">
            <div className="cart-icon">🛒</div>
          </div>

          <div className="shop-door">
            <div className="closed-sign">CLOSED</div>
          </div>

          <div className="shop-window info-window">
            <div className="pixel-icon">📦</div>
          </div>
        </div>

        <div className="outside-cart">🛒</div>
        <div className="building-warning">⚠</div>
      </div>
    </div>
  )
}
