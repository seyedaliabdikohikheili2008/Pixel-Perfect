import '../assets/styles/App.css'
import Header from '../components/molecules/header/Header'
import Footer from '../components/organisms/Footer/Footer'
import LoginStepOneForm from '../components/organisms/loginStepOneForm/LoginStepOneForm'
import LoginStepTwoForm from '../components/organisms/LoginStepTwoForm/LoginStepTwoForm'
import RegisterStepTwo from "../components/organisms/RegisterStepTwoForm/RegisterStepTwoForm"



function App() {

  return (
    <>

      <div className='flex justify-center flex-col '>
        <Header variant={"linear"} />
        <LoginStepTwoForm/>
        <Footer/>
      </div>

    </>
  )
}

export default App
