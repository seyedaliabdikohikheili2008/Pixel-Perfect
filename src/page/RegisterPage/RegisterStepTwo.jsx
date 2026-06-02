import React from 'react'
import RegisterStepTwoForm from "../../components/organisms/RegisterStepTwoForm/RegisterStepTwoForm"
import Banner from "../../assets/images/login-background/Banner.png"
const RegisterStepTwo = () => {
  return (
    <>
    <div className='bg-repeat-x bg-center h-screen ' style={{
        backgroundImage: `url('${Banner}')`,}}>
          <div className='pt-11 '>
            <RegisterStepTwoForm />
          </div>
      </div>
    </>
  )
}

export default RegisterStepTwo