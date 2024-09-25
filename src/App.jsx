import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Navigate from './Components/Navigate'
import SwiperComponent from './Components/Swiper'
import Footer from './Components/Footer'
import Contactus from './Components/Contactus'
import Whyus from './Components/Whyus'
import Sponsor from './Components/Sponsor'
import News from './Components/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navigate/>
      <SwiperComponent/>
      <Whyus/>
      <Sponsor/>
      <News/>
      <Contactus/>
      <Footer/>
    </>
  )
}

export default App
