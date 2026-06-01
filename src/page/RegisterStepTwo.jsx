import React from 'react'
import Header from "../components/molecules/header/Header"
import RegisterStepTwoForm from "../components/organisms/RegisterStepTwoForm/RegisterStepTwoForm"
import Footer from "../components/organisms/Footer/Footer"
import Banner from "../assets/images/login-background/Banner.png"
const RegisterStepTwo = () => {
  return (
    <>
    <Header variant={"linear"} />
    <div className='bg-repeat-x mt-85 ' style={{
        backgroundImage: `url('${Banner}')`,}}>
          <div className='relative bottom-50  '>
            <RegisterStepTwoForm />
          </div>
        
      </div>
      <Footer/>
    
    </>
  )
}

export default RegisterStepTwo