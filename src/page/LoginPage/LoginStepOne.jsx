import React from 'react'
import LoginStepOneForm from "../../components/organisms/loginStepOneForm/LoginStepOneForm"
import Banner from "../../assets/images/login-background/Banner.png"

const LoginStepOne = () => {
  return (
    <>
    <div className='bg-repeat-x bg-center h-screen' style={{
        backgroundImage: `url('${Banner}')`,}}>
          <div className='pt-11'>
            <LoginStepOneForm />
          </div> 
      </div>
    </>
  )
}

export default LoginStepOne