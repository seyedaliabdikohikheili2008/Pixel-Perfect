import React from 'react'
import Header from "../components/molecules/header/Header"
import RegisterStepOneForm from "../components/organisms/RegisterStepOneForm/RegisterStepOneForm"
import Footer from "../components/organisms/Footer/Footer"
import Banner from "../assets/images/login-background/Banner.png"
const RegisterStepOne = () => {
  return (
    <>
    <Header variant={"linear"} />
    <div className=' mt-85 bg-repeat-x' style={{
        backgroundImage: `url('${Banner}')`,}}>
          <div className='relative bottom-50 '>
            <RegisterStepOneForm />
          </div>
        
      </div>
      <Footer/>
    
    </>
  )
}

export default RegisterStepOne