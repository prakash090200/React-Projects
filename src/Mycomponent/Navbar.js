import React from 'react'
import {Link,Route} from 'react-router-dom'

export default function Navbar(props) {
  
  return (
    <div className="nav">
        
       {
         props.category.map((ele,i)=>{
           
          return(
            <div key={i}>
            <Link className="list" to={"/"+ele}><button className="navButton" onClick={()=>props.filteritem(ele)} >{ele}</button></Link> 
            </div>
          )
           
          })
       }
       
    </div>
  )
}
