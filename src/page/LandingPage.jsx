import React from 'react'
import Header from '../components/organisms/header/Header'
import Footer from '../components/organisms/Footer/Footer'
import LandingHeroSection from '../components/templates/landing/LandingHeroSection'
import NewCourse from '../components/templates/landing/NewCourse'

const LandingPage = () => {
  return (
    <>
        <Header variant={"linear"}/> 
        <LandingHeroSection />
        <NewCourse />
        
        <Footer />
    </>
  )
}

export default LandingPage