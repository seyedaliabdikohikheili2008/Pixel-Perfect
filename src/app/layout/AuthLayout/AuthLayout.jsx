import React from 'react'
import Logo from '../../../components/atoms/Logo/Logo'
import Banner from "../../../assets/images/login-background/Banner.png"
import { Outlet } from 'react-router-dom'
import DarkModeButton from '../../../components/atoms/DarkModeButton/DarkModeButton'
const AuthLayout = () => {
  return (
    <>
    <div className=' bg-repeat-x bg-center h-screen' style={{
        backgroundImage: `url('${Banner}')`,}}>
          
          <div className='pt-11 '>
            <div className='absolute top-6 left-6 z-50'>
              <DarkModeButton />
            </div>
            
            <div className="w-full">
      <div className="relative w-full md:w-1/2 lg:w-[44%] xl:w-1/3 mx-auto bg-background flex flex-col items-center gap-6 py-8 rounded-xl shadow-2xl">

        <Logo variant="vertical" className="h-52.25" />
        <Outlet/>
        </div></div>
          </div>
        
      </div>
    </>
  )
}

export default AuthLayout