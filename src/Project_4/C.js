import React,{useState} from 'react'
import {useParams} from 'react-router-dom'  

export default function C(){
    console.log(useParams());
    const {name}=useParams();
    
    return (
        
        <div>
            <p>Error  {name} </p>
           
        </div>
    )
}






