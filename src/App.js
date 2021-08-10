import React, { useEffect } from 'react'
import Banner from "./components/Banner/Banner";
import './App.scss'
import 'antd/dist/antd.css';
import Designed from "./components/Designed/Designed";
import State from "./components/State/State";
import Free from "./components/Free/Free";
import Footer from "./components/Footer/Footer";
import Aos from 'aos'
import "aos/dist/aos.css"


function App() {

  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  return (
    <div className="App">
      <Banner />
      <Designed />
      <State/>
      <Free/>
      <Footer/>
    </div>
  );
}

export default App;
