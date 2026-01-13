import React from 'react'
import "./OptionCard.css"
import upArrow from "../../assets/uparrow.png"

function OptionCard({product}) {
  return (
    <div className='OptionCard'>
        <div>
            <h1>{product}</h1>
            <p>Get immediate AI generated response</p>
        </div>

        <div>
            <img src={upArrow} alt="upArrow" />
        </div>
        
    </div>
  )
}

export default OptionCard