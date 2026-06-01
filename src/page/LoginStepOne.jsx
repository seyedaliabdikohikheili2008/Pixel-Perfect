import React from 'react'
import LoginStepOneForm from "../components/organisms/loginStepOneForm/LoginStepOneForm"
import Footer from "../components/organisms/Footer/Footer"
import Banner from "../assets/images/login-background/Banner.png"
import Header from '../components/organisms/header/Header'
const LoginStepOne = () => {
  return (
    <>
    <Header variant={"linear"} />
    <div className='bg-repeat-x mt-85' style={{
        backgroundImage: `url('${Banner}')`,}}>
          <div className='relative bottom-50 '>
            <LoginStepOneForm />
          </div>
        
      </div>
      <Footer/>
    
    </>
  )
}

export default LoginStepOne