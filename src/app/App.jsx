import { useEffect } from 'react'
import '../assets/styles/App.css'
import Footer from '../components/organisms/Footer/Footer'
import Header from '../components/organisms/header/Header'
import { useSelector } from 'react-redux'




function App() {
  const mode = useSelector((state)=>state.DarkFlag.value);

  useEffect(() => {
    localStorage.setItem('theme',mode);
    document.body.classList.toggle('dark', mode === 'dark')
  
  }, [mode])
  

  return (
    <>
      <Header variant={"linear"} />
      <Footer/>
    </>
  )
}

export default App
