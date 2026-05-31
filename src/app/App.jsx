import '../assets/styles/App.css'
import Header from '../components/molecules/header/Header'
import Footer from '../components/organisms/Footer/Footer'
import RegisterStepTwoForm from '../components/organisms/RegisterStepTwoForm/RegisterStepTwoForm'




function App() {

  return (
    <>

      <div className='flex justify-center flex-col '>
        <Header variant={"linear"} />
        <RegisterStepTwoForm/>
        <Footer/>
      </div>

    </>
  )
}

export default App
