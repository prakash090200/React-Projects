import React from 'react'
import {Routes,Route,Link} from 'react-router-dom';

import A from './A'
import B from './B'
import C from './C'
import './style.css'

export default function Router() {
  return (
    <>
     <Link  to="/a">A click</Link><br/>
     <Link to="/b">B click</Link>
   
   
    <Routes>
      <Route exact path="/" element={<A/>}></Route>
      <Route exact path="a" element={<A/>}></Route>
      <Route exact path="b" element={<B/>}></Route>
      {/* USEPARAMS */}
      <Route  exact path="/b/:name"  element={<C/>}></Route>  
      <Route  path="*" element={<C/>}/>
    </Routes>
    </>

  ) 
}
