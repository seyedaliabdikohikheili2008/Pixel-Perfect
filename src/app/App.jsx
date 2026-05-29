import '../assets/styles/App.css'
import Header from '../components/molecules/header/Header'
import Footer from '../components/organisms/Footer/Footer'
import LoginStepOneForm from '../components/organisms/loginStepOneForm/LoginStepOneForm'
import LoginStepOne from '../components/templates/login/loginStepOne/LoginStepOne'



function App() {

  return (
    <>

      <div className='flex justify-center flex-col '>
        <Header variant={"linear"} />
        {/* <LoginStepOne/> */}
        <LoginStepOneForm/>
        <Footer/>
      </div>

    </>
  )
}

export default App
