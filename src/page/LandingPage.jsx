import React from 'react'
import Header from '../components/organisms/header/Header'
import Footer from '../components/organisms/Footer/Footer'
import LandingHeroSection from '../components/templates/landing/LandingHeroSection'
import NewCourse from '../components/templates/landing/NewCourse'
import LandingBestTeacher from '../components/templates/landing/LandingBestTeacher'
import LandingAboutMe from '../components/templates/landing/LandingAboutMe'
import Roadmap from '../components/templates/landing/RoadMap'
import LandingBestCourse from '../components/templates/landing/LandingBestCourse'
import PopularCtegory from '../components/templates/landing/PopularCtegory'
import LandingNewNews from '../components/templates/landing/LandingNewNews'
import { Toaster } from 'react-hot-toast'

const LandingPage = () => {
  return (
    <>
    <Toaster/>
        <LandingHeroSection />
        <NewCourse />
        <LandingBestTeacher />
        <LandingAboutMe />
        <Roadmap />
        <LandingBestCourse />
        <PopularCtegory />

        <LandingNewNews />
    </>
  )
}

export default LandingPage