import '../assets/styles/App.css'
import Header from '../components/molecules/header/Header'
import Footer from '../components/organisms/Footer/Footer'
import LoginStepOneForm from '../components/organisms/loginStepOneForm/LoginStepOneForm'
import RegisterStepOne from "../components/organisms/RegisterStepOne/RegisterStepOne"



function App() {

  return (
    <>

      <div className='flex justify-center flex-col '>
        <Header variant={"linear"} />
        {/* <LoginStepOne/> */}
        <RegisterStepOne/>
        <Footer/>
      </div>

    </>
  )
}

export default App
