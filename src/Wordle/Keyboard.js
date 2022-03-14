import React from 'react'
import { FaBackspace } from 'react-icons/fa'

export default function Keyboard(props) {
  return (
    <>
      <div className='alphabets'>
        {
          props.keyBoardText.map((ele, index) => {
            return <button key={index} className="alphabuttons" onClick={() => props.clicked(ele)}>{ele}</button>
          })
        }
      </div>


      <div className="click">
        <button className="alphabuttons" onClick={() => props.enter("Enter")}><b>Enter</b></button>
        <button className="alphabuttons" onClick={() => props.deleted(-100)}><FaBackspace /></button>
      </div>

    </>
  )
}
