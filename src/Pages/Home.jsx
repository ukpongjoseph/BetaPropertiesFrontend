import React from 'react'
import LoggedNav from '../components/LoggedNav'
import Footer from '../components/Footer'
import LoggedProperties from '../components/LoggedProperties'
import LoggedPropertySlide from '../components/LoggedPropertySlide'

const Home = () => {
  return (
    <div>
      <LoggedNav/>
      <LoggedProperties/>
      <LoggedPropertySlide/>
      <Footer/>
    </div>
  )
}

export default Home