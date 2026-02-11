'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-brand">
        <span className="sym">SYMB</span>
        <span className="bai">AI</span>
        <span className="ote">OTE</span>
      </Link>

      <ul className="nav-links">
        <li><Link href="#specimens">SPECIMENS</Link></li>
        <li><Link href="#manifesto">THE SHIFT</Link></li>
        <li><Link href="#bond">JOIN</Link></li>
      </ul>

      <Link href="#" className="nav-cart">
        <span className="cart-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </span>
        <span className="cart-count">0</span>
      </Link>
    </nav>
  )
}
