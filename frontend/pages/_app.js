import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ComyLogo from '../img/logo.jpg'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  
  const [mode, setMode] = useState("light")  //drak and light
  const toggleMode = () => {
    // Function to toggle the mode (e.g., dark mode or light mode)
    if (mode === "dark") {
        setMode("light");
        document.body.style.background = "white";
      } else {
        setMode("dark");
        document.body.style.background = "black";
      }
    

  };
  return(<>
    <NavBar logo={ComyLogo} isActiveHomePage={true}  toggleMode={toggleMode}  mode={mode} />
    <Component {...pageProps} logo={ComyLogo} mode={mode}/>
    <Footer logo={ComyLogo} />
  </>
  )
}

export default MyApp
