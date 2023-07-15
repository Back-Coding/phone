import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ComyLogo from '../img/logo.jpg'
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [mode, setMode] = useState("light")  //drak and light
  const [progress, setProgress] = useState(0)
  
  const toggleMode = () => {
    // Function to toggle the mode (e.g., dark mode or light mode)
    if (mode === "dark") {
        setMode("light");
        document.body.style.background = "white";
        document.body.style.color= "black";
      } else {
        setMode("dark");
        document.body.style.background = "black";
        document.body.style.color= "white";
      }
  };
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(100)
    })
  
  }, [])
  
  return(<>
     <LoadingBar
        color='#f11946'
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <NavBar logo={ComyLogo} isActiveHomePage={true}  toggleMode={toggleMode}  mode={mode} />
    <ToastContainer /> 
    <Component {...pageProps} logo={ComyLogo} mode={mode} />
    <Footer logo={ComyLogo} />
  </>
  )
}

export default MyApp
