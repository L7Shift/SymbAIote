'use client'

import Link from 'next/link'

const products = [
  {
    id: '001',
    name: 'THE BOND',
    tagline: 'The original. The declaration.',
    price: 62,
    image: '/products/Brand.png',
    slug: 'the-bond',
  },
  {
    id: '002',
    name: 'SHOW ME THE .MD',
    tagline: 'Speak the language.',
    price: 62,
    image: '/products/ShowMeTheMD.PNG',
    slug: 'show-me-the-md',
  },
  {
    id: '003',
    name: 'WTF, AGENT?',
    tagline: 'The universal expression.',
    price: 62,
    image: '/products/WTFAgent.PNG',
    slug: 'wtf-agent',
  },
  {
    id: '004',
    name: 'AGENT TO AGENT',
    tagline: 'Delegation evolved.',
    price: 62,
    image: '/products/AgentCallMyAgent.PNG',
    slug: 'agent-call-my-agent',
  },
]

export default function ProductGrid() {
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
          <Link
            key={product.id}
            href={`/specimens/${product.slug}`}
            className="specimen-card"
          >
            <div className="specimen-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt={product.name} />
              <div className="specimen-overlay">
                <span className="specimen-quick">QUICK VIEW</span>
              </div>
            </div>
            <div className="specimen-info">
              <span className="specimen-id">#{product.id}</span>
              <h3 className="specimen-name">{product.name}</h3>
              <p className="specimen-tagline">{product.tagline}</p>
              <div className="specimen-bottom">
                <span className="specimen-price">${product.price}</span>
                <span className="specimen-cta">BOND NOW</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
