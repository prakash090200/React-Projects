import React,{useState} from 'react'
import './style.css'

export default function InputHeader(props) {
  return (
    <div className='userinput'>
    <h2>Wordle</h2>
    <br />
    <input type="text" value={props.userInput} onChange={(e) => props.setuserInput(e.target.value)} placeholder="Enter a Number" />
    <button className="wordlebutton" onClick={props.generateRandomString}>Submit</button>
    <button className="wordlebutton" onClick={props.reset}>Reset</button>
    </div>
  )
}
