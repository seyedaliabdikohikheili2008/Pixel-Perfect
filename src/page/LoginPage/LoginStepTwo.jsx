import React from 'react'
import LoginStepTwoForm from "../../components/organisms/loginStepTwoForm/LoginStepTwoForm"
import Banner from "../../assets/images/login-background/Banner.png"

const LoginStepTwo = () => {
  return (
    <>
    <div className='bg-repeat-x bg-center h-screen' style={{
        backgroundImage: `url('${Banner}')`,}}>
          <div className='pt-11 '>
            <LoginStepTwoForm />
          </div>  
      </div>
    </>
  )
}

export default LoginStepTwo