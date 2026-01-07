import React,{useState,useEffect} from 'react'
import BotLogo from '../assets/Bot_logo.png'
import Sidebar from '../components/Sidebar/Sidebar'

import './Home.css'

function Home() {
  const [isOpen,setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
      if (window.innerWidth >= 800) {
        setIsOpen(false); // reset sidebar state
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (

    <div className='layout'>
    <Sidebar/>
    console.log("Checking");
    <div className='container'>
      <header>
        <h1>Product Recommendation AI</h1>
        <div>
          <span>Light</span>
          {/* <img src="" alt="" /> */}
        </div>
      </header>

      <div className='requirement'>
        <h1>Hi, Please tell me what you want?</h1>
        <img src={BotLogo} alt="BotLogo" className='BotLogo'/>
      </div>

      <div className='OptionGrid'>
        <div className='OptionCard'>
          <h1>Jeans</h1>
          <p>Get immediate AI generated response</p>
        </div>

        <div className='OptionCard'>
          <h1>SmartPhone</h1>
          <p>Get immediate AI generated response</p>
        </div>

        <div className='OptionCard'>
          <h1>Laptop</h1>
          <p>Get immediate AI generated response</p>
        </div>

        <div className='OptionCard'>
          <h1>T-Shirt</h1>
          <p>Get immediate AI generated response</p>
        </div>
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