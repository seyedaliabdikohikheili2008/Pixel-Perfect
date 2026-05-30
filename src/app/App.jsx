import '../assets/styles/App.css'
import Header from '../components/molecules/header/Header'
import Footer from '../components/organisms/Footer/Footer'
import LoginStepOneForm from '../components/organisms/loginStepOneForm/LoginStepOneForm'
import RegisterStepTwo from "../components/organisms/RegisterStepTwo/RegisterStepTwo"



function App() {

  return (
    <>

      <div className='flex justify-center flex-col '>
        <Header variant={"linear"} />
        {/* <LoginStepOne/> */}
        <RegisterStepTwo/>
        <Footer/>
      </div>

    </>
  )
}

export default App
