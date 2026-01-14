// import React,{useState,useEffect} from 'react'
import BotLogo from '../assets/Bot_logo.png'
import Sidebar from '../components/Sidebar/Sidebar'
import { useTheme } from '../context/themeContext'
import OptionCard from './OptionCard/OptionCard'
import './Home.css'

function Home() {
  
  const {theme,toggleTheme}=useTheme();

  return (

    <div className="layout">
    <Sidebar/>
    <div className='container'>
      <header>
        <h1>Product Recommendation AI</h1>
        <div className='mode-switch'>
          <span>{theme==="dark"? "Dark":"Light"}</span>
          <label htmlFor="theme-toggle">
            <input
            id="theme-toggle" 
            type="checkbox"
            onChange={toggleTheme}
            checked={theme==="dark"} />
            <span className='slider'></span>
          </label>
        </div>
      </header>

      <div className='requirement'>
        <h1>Hi, Please tell me what you want?</h1>
        <img src={BotLogo} alt="BotLogo" className='BotLogo'/>
      </div>

      <div className='OptionGrid'>
        <OptionCard product="Jeans"/>
          console.log("debugging");
        <OptionCard product="SmartPhone"/>

        <OptionCard product="Laptop"/>

        <OptionCard product="T-Shirt"/>
      </div>

      <div className='Input'>
        <input type="text" placeholder='Please tell me about your query!' />
        <button className='btn'>Ask</button>
        <button className='btn'>Save</button>
      </div>
    
    </div>
    </div>
  )
}

export default Home