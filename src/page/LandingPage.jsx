import React from 'react'
import Header from '../components/organisms/header/Header'
import Footer from '../components/organisms/Footer/Footer'
import LandingHeroSection from '../components/organisms/landing/LandingHeroSection'

const LandingPage = () => {
  return (
    <>
        <Header variant={"linear"}/> 
        <LandingHeroSection />

        <Footer />
    </>
  )
}

export default LandingPage