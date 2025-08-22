import React from 'react'
import NavHero from '../components/NavHero'
import Properties from '../components/Properties'
import PropertySlide from '../components/PropertySlide'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div>
      <NavHero/>
      <Properties/>
      <PropertySlide/>
      <Footer/>
    </div>
  )
}

export default Landing