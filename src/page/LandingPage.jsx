import React from 'react'
import Header from '../components/organisms/header/Header'
import Footer from '../components/organisms/Footer/Footer'
import LandingHeroSection from '../components/templates/landing/LandingHeroSection'
import NewCourse from '../components/templates/landing/NewCourse'
import LandingBestTeacher from '../components/templates/landing/LandingBestTeacher'

const LandingPage = () => {
  return (
    <>
        <Header variant={"linear"}/> 
        <LandingHeroSection />
        <NewCourse />
        <LandingBestTeacher />
        
        <Footer />
    </>
  )
}

export default LandingPage