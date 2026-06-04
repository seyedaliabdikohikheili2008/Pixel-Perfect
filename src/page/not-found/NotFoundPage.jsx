import React from 'react'
import Header from '../../components/organisms/header/Header'
import NotFoundSection from '../../components/templates/not-found/NotFoundSection'
import Footer from '../../components/organisms/Footer/Footer'

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