import React,{useState} from 'react'
import Navbar from './Navbar'
import Main from './Main'
import {BrowserRouter as Router} from 'react-router-dom'
import Menu from './Cartitem_data'
import './style.css'


export default function Project1() {

  const uniqueCategory=[...new Set(Menu.map((ele)=>{
    return ele.category;
  })),'All'];

  //console.log("GIII");
  //console.log(uniqueitem);

  const [menuitem,setmenu]=useState(Menu);
  const [allcategory,setcategory]=useState(uniqueCategory);

  const fileritem=(category)=>{
    console.log("hi");
    if(category==='All'){
      setmenu(Menu);
    }
    else{
     const updatedlist=Menu.filter((ele)=>{
        return ele.category===category
          })
      
      setmenu(updatedlist);
    }
  }

 

  return (
    <>  
    <h1 style={{marginTop:"17px",marginBottom:"5px"}}>Welcome to My website</h1>
    <Router><Navbar category={allcategory}  filteritem={fileritem}/></Router>
    <Main items={menuitem}/>
    </>
  )
}
