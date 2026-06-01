import React from 'react'
import LoginStepTwoForm from "../components/organisms/loginStepTwoForm/LoginStepTwoForm"
import Footer from "../components/organisms/Footer/Footer"
import Banner from "../assets/images/login-background/Banner.png"
import Header from '../components/organisms/header/Header'
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