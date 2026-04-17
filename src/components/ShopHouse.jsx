import CartPanel from './shop-house/CartPanel'
import PaginationControls from './shop-house/PaginationControls'
import ProductGrid from './shop-house/ProductGrid'
import ProductModal from './shop-house/ProductModal'
import ShopToolbar from './shop-house/ShopToolbar'
import { categories } from './shop-house/data'
import { useDebugQuestShop } from './shop-house/hooks/useDebugQuestShop'
import './ShopHouse.css'

export default function ShopHouse({ onBack }) {
  const shop = useDebugQuestShop()

  return (
    <main className="shop-house-shell">
      <div className="shop-noise" aria-hidden="true" />

      <div className="shop-page-wrap">
        <nav className="shop-navbar">
          <button type="button" className="back-link" onClick={onBack}>
            ← Back To City
          </button>

          <div className="title-group">
            <h1>🏪 Shop House</h1>
            <p>Something feels broken here...</p>
          </div>

          <div className="status-pill flicker">DEBUG QUEST MODE</div>
        </nav>

        {shop.toast ? <div className="coupon-toast">{shop.toast}</div> : null}

        <ShopToolbar
          categories={categories}
          search={shop.search}
          activeCategory={shop.activeCategory}
          sortDirection={shop.sortDirection}
          onSearchChange={shop.onSearchChange}
          onCategoryChange={shop.onCategoryChange}
          onSortChange={shop.onSortChange}
        />

        <section className="shop-main-grid">
          <div className="products-column">
            <ProductGrid
              products={shop.pagedProducts}
              isLoadingProducts={shop.isLoadingProducts}
              wishlistSet={shop.wishlistSet}
              lockedAddSet={shop.lockedAddSet}
              onToggleWishlist={shop.toggleWishlist}
              onAddToCart={shop.addToCart}
              onOpenProductModal={shop.openProductModal}
            />

            <PaginationControls page={shop.page} totalPages={shop.totalPages} onPageChange={shop.setPage} />
          </div>

          <CartPanel
            cartItems={shop.cartItems}
            couponInput={shop.couponInput}
            couponCode={shop.couponCode}
            couponError={shop.couponError}
            subtotal={shop.subtotal}
            discountValue={shop.discountValue}
            total={shop.total}
            onQuantityChange={shop.changeQty}
            onRemoveByVisibleIndex={shop.removeCartByVisibleIndex}
            onCouponInputChange={shop.setCouponInput}
            onApplyCoupon={shop.applyCoupon}
            onCheckout={shop.checkout}
            checkoutError={shop.checkoutError}
          />
        </section>

        {shop.isModalOpen ? <ProductModal product={shop.modalProduct} onClose={shop.closeProductModal} /> : null}
      </div>
    </main>
  )
}