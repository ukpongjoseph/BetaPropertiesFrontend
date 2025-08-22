import React from 'react'
import LoggedNav from '../components/LoggedNav'
import PropertySlide from '../components/PropertySlide'
import Footer from '../components/Footer'
import LoggedProperties from '../components/LoggedProperties'

const Home = () => {
  return (
    <div>
      <LoggedNav/>
      <LoggedProperties/>
      <PropertySlide/>
      <Footer/>
    </div>
  )
}

export default Home