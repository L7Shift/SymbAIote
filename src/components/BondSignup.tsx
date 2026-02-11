'use client'

import { useState } from 'react'

export default function BondSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <section className="bond-section" id="bond">
      <div className="bond-inner">
        <div className="bond-content">
          <h2 className="bond-title">JOIN THE BONDED</h2>
          <p className="bond-desc">
            New drops. Exclusive access. No spam—just signal.
          </p>

          {status === 'success' ? (
            <div className="bond-success">
              <div className="success-icon">✓</div>
              <p>You&apos;re in. The bond is forming.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bond-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                required
                className="bond-input"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bond-btn"
              >
                {status === 'loading' ? '...' : 'FUSE'}
              </button>
            </form>
          )}
        </div>

        <div className="bond-stats">
          <div className="stat">
            <span className="stat-number">2,847</span>
            <span className="stat-label">BONDED</span>
          </div>
          <div className="stat">
            <span className="stat-number">4</span>
            <span className="stat-label">SPECIMENS</span>
          </div>
          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">PERMANENT</span>
          </div>
        </div>
      </div>
    </section>
  )
}
