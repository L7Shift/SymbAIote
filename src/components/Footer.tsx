'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <span className="sym">SYMB</span>
            <span className="bai">AI</span>
            <span className="ote">OTE</span>
          </Link>
          <p className="footer-tagline">The bond is permanent.</p>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h4>SHOP</h4>
            <Link href="#specimens">All Specimens</Link>
            <Link href="#">New Arrivals</Link>
            <Link href="#">Size Guide</Link>
          </div>
          <div className="footer-col">
            <h4>HELP</h4>
            <Link href="#">Shipping</Link>
            <Link href="#">Returns</Link>
            <Link href="#">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>CONNECT</h4>
            <a href="#" target="_blank" rel="noopener noreferrer">X / Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SymbAIote. All rights reserved.</p>
        <p className="footer-credit">
          Built in 72hrs by AI agents · <a href="https://l7shift.com" target="_blank" rel="noopener noreferrer">L7 Shift</a>
        </p>
      </div>
    </footer>
  )
}
