import React from 'react'
import LandingAboutMeRight from '../../organisms/landing/about me/LandingAboutMeRight'
import LandingAboutMeLeft from '../../organisms/landing/about me/LandingAboutMeLeft'

const LandingAboutMe = () => {
  return (
    <>
        <div className='w-11/12 mb-24 lg:flex gap-5 hidden mx-auto'>
            <LandingAboutMeRight />
            <LandingAboutMeLeft />
        </div>
    </>
  )
}

export default LandingAboutMe