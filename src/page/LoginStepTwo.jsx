import React from 'react'
import Header from "../components/molecules/header/Header"
import LoginStepTwoForm from "../components/organisms/loginStepTwoForm/LoginStepTwoForm"
import Footer from "../components/organisms/Footer/Footer"
import Banner from "../assets/images/login-background/Banner.png"
const LoginStepTwo = () => {
  return (
    <>
    <Header variant={"linear"} />
    <div className='bg-no-repeat mt-85' style={{
        backgroundImage: `url('${Banner}')`,}}>
          <div className='relative bottom-50 '>
            <LoginStepTwoForm />
          </div>
        
      </div>
      <Footer/>
    
    </>
  )
}

export default LoginStepTwo