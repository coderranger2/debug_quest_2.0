import { formatINR } from './data'

export default function CartPanel({
  cartItems,
  couponInput,
  couponCode,
  couponError,
  subtotal,
  discountValue,
  total,
  onQuantityChange,
  onRemoveByVisibleIndex,
  onCouponInputChange,
  onApplyCoupon,
  onCheckout,
  checkoutError,
}) {
  return (
    <aside className="cart-panel">
      <h2>Cart Panel</h2>
      <p className="cart-sub">Signal integrity compromised</p>

      <div className="cart-list">
        {cartItems.length === 0 ? <p className="cart-empty">No items yet. The shelves are watching.</p> : null}

        {cartItems.map((item, visibleIndex) => (
          <div key={item.rowId} className="cart-item">
            <div>
              <strong>{item.name}</strong>
              <span>{formatINR(item.lineTotal)}</span>
            </div>

            <div className="qty-controls">
              <button type="button" onClick={() => onQuantityChange(item.rowId, -1)}>
                −
              </button>
              <span>{item.qty}</span>
              <button type="button" onClick={() => onQuantityChange(item.rowId, 1)}>
                +
              </button>
              <button type="button" className="remove-item" onClick={() => onRemoveByVisibleIndex(visibleIndex)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="coupon-box">
        <label htmlFor="coupon">Coupon</label>
        <div className="coupon-row">
          <input
            id="coupon"
            type="text"
            value={couponInput}
            onChange={(event) => onCouponInputChange(event.target.value)}
            placeholder="Try SAVE10"
          />
          <button type="button" onClick={onApplyCoupon}>
            Apply
          </button>
        </div>
        {couponCode ? <p className="coupon-ok">Applied: {couponCode}</p> : null}
        {couponError ? <p className="coupon-error">{couponError}</p> : null}
      </div>

      <div className="totals">
        <div>
          <span>Subtotal</span>
          <strong>{formatINR(subtotal)}</strong>
        </div>
        <div>
          <span>Discount</span>
          <strong>-{formatINR(discountValue)}</strong>
        </div>
        <div className="grand-total">
          <span>Total</span>
          <strong>{formatINR(total)}</strong>
        </div>
      </div>

      {checkoutError ? <p className="checkout-error">{checkoutError}</p> : null}

      <button type="button" className="checkout glitch" disabled={cartItems.length === 0} onClick={onCheckout}>
        Proceed To Checkout
      </button>
    </aside>
  )
}
