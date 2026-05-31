import React from 'react'
import Header from '../components/organisms/header/Header'
import Footer from '../components/organisms/Footer/Footer'
import CoursesHeroSection from '../components/templates/course-list/CoursesHeroSection'

const CourseListPage = () => {
  return (
    <>
        <Header variant={"linear"} />
        <CoursesHeroSection />

        <Footer />
    </>
  )
}

export default CourseListPage