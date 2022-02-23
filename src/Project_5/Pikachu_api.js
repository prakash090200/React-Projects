import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Getapi from './Getapi';
import './style.css'

export default function Pikachu_api() {
    const [data,setData]=useState(1);
    const [apidata,setApidata]=useState(null);

   async function getapi(){
        // const respond=await fetch(`https://pokeapi.co/api/v2/pokemon/${data}`);
        // const res=await respond.json();

           /** OR  **/

        const respond=await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`)
        console.log(respond);
        setApidata(respond);

    }

    useEffect(()=>{
        console.log("hji");
         getapi();
    },[data])

  if(!apidata) return ""
  return (
    <div>
        <h1>Hi {data}</h1>
        <h4>This POkemon is {apidata.data.name}</h4>
        <select value={data} onChange={(e)=>setData(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>

  )
}
