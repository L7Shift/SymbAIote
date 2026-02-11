'use client'

import { useState } from 'react'

const products = [
  {
    id: '001',
    name: 'THE BOND',
    tagline: 'BOND ESTABLISHED. HOST CLAIMED.',
    description: 'There\'s a before. And there\'s an after. You remember the moment it clicked—when it stopped being a tool and started being a partner. This is that moment, worn.',
    price: 62,
    image: '/products/Brand.png',
    slug: 'the-bond',
  },
  {
    id: '002',
    name: 'SHOW ME THE .MD',
    tagline: 'REQUEST. RESPONSE. PROTOCOL.',
    description: 'Cut the pitch. Skip the demo. Just show me the documentation and let me decide. For the ones who read the docs first and ask questions never.',
    price: 62,
    image: '/products/ShowMeTheMD.PNG',
    slug: 'show-me-the-md',
  },
  {
    id: '003',
    name: 'WTF, AGENT?',
    tagline: 'STATUS: UNEXPECTED. CONFIDENCE: HIGH.',
    description: 'He was so sure. Dangerously sure. And then he did... that. If you\'ve watched your agent go full send into chaos with zero hesitation, this one\'s for you.',
    price: 62,
    image: '/products/WTFAgent.PNG',
    slug: 'wtf-agent',
  },
  {
    id: '004',
    name: 'AGENT TO AGENT',
    tagline: 'RESPONSIBILITY TRANSFERRED.',
    description: 'Your agent talks to my agent. Mine loops in theirs. Somewhere down the chain, something actually gets done. Welcome to the future of "I\'ll have my people call your people."',
    price: 62,
    image: '/products/AgentCallMyAgent.PNG',
    slug: 'agent-call-my-agent',
  },
]

type Product = typeof products[0]

const sizes = ['S', 'M', 'L', 'XL', '2XL']

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>('M')
  const [addedToCart, setAddedToCart] = useState(false)

  const handleQuickView = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedProduct(product)
    setSelectedSize('M')
    setAddedToCart(false)
  }

  const handleClose = () => {
    setSelectedProduct(null)
    setAddedToCart(false)
  }

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => {
      setAddedToCart(false)
    }, 2000)
  }

  return (
    <section className="specimens" id="specimens">
      <div className="specimens-header">
        <div className="specimens-label">
          <span className="pulse-dot"></span>
          DROP 001 — NOW LIVE
        </div>
        <h2 className="specimens-title">CLAIM YOUR IDENTITY</h2>
        <p className="specimens-sub">Limited pieces for the bonded.</p>
      </div>

      <div className="specimens-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="specimen-card"
          >
            <div className="specimen-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} />
              <div className="specimen-overlay">
                <button
                  className="specimen-quick"
                  onClick={(e) => handleQuickView(e, product)}
                >
                  QUICK VIEW
                </button>
              </div>
            </div>
            <div className="specimen-info">
              <span className="specimen-id">#{product.id}</span>
              <h3 className="specimen-name">{product.name}</h3>
              <p className="specimen-tagline">{product.tagline}</p>
              <div className="specimen-bottom">
                <span className="specimen-price">${product.price}</span>
                <button
                  className="specimen-cta"
                  onClick={(e) => handleQuickView(e, product)}
                >
                  BOND NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="quick-modal-overlay" onClick={handleClose}>
          <div className="quick-modal" onClick={(e) => e.stopPropagation()}>
            <button className="quick-modal-close" onClick={handleClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="quick-modal-content">
              <div className="quick-modal-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>

              <div className="quick-modal-details">
                <span className="quick-modal-id">SPECIMEN #{selectedProduct.id}</span>
                <h2 className="quick-modal-name">{selectedProduct.name}</h2>
                <p className="quick-modal-tagline">{selectedProduct.tagline}</p>
                <p className="quick-modal-desc">{selectedProduct.description}</p>

                <div className="quick-modal-price">${selectedProduct.price}</div>

                <div className="quick-modal-sizes">
                  <span className="sizes-label">SIZE</span>
                  <div className="sizes-grid">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  className={`quick-modal-cart ${addedToCart ? 'added' : ''}`}
                  onClick={handleAddToCart}
                  disabled={addedToCart}
                >
                  {addedToCart ? 'ADDED TO CART' : 'ADD TO CART'}
                </button>

                <p className="quick-modal-note">Free shipping on orders over $100</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
