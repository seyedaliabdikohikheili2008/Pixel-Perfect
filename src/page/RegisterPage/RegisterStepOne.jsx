import React from 'react'
import RegisterStepOneForm from "../../components/organisms/RegisterStepOneForm/RegisterStepOneForm"
import Banner from "../../assets/images/login-background/Banner.png"

const RegisterStepOne = () => {
  return (
    <>
    
    <div className=' bg-repeat-x bg-center h-screen' style={{
        backgroundImage: `url('${Banner}')`,}}>
          <div className='pt-11 '>
            <RegisterStepOneForm />
          </div>
        
      </div>
      
    
    </>
  )
}

export default RegisterStepOne