import React from 'react'
import BotHeader from "../../assets/Bot_header.png";
import Edit from "../../assets/Edit.png"
import './Sidebar.css'

function Sidebar() {
  return (
        <div className='sidebar'>

          <div className='sideBar-top'>
              <div className='sideBar-left'>
                <img src={BotHeader} alt="BotHeader" className='BotHeader' />
                <h2>Want new suggestion?</h2>
              </div>

              <div>
                <img src={Edit} alt="Edit" className='edit' />
              </div>
        </div>

        <button className='suggestion'>Previous Suggestions</button>
        
    </div>
  )
}

export default Sidebar