'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import ProductGrid from '@/components/ProductGrid'
import BondSignup from '@/components/BondSignup'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Manifesto />
      <ProductGrid />
      <BondSignup />
      <Footer />
    </>
  )
}
