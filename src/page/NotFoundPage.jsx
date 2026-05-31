import React from 'react'
import Header from '../components/organisms/header/Header'
import Footer from '../components/organisms/Footer/Footer'
import NotFoundSection from '../components/templates/not-found/NotFoundSection'

const NotFoundPage = () => {
  return (
    <>
        <Header variant={"linear"}/> 
        <NotFoundSection />
        <Footer />
    </>
  )
}

export default NotFoundPage