import '../assets/styles/App.css'
import DarkModeButton from '../components/atoms/DarkModeButton/DarkModeButton'
import Header from '../components/molecules/header/Header'


function App() {

  return (
    <>
      <div className='flex justify-center'>
        <Header variant={"linear"} />
      </div>
    </>
  )
}

export default App
