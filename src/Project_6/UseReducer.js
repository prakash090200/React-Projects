import React,{useReducer} from 'react'

export default function UseReducer() {
    const  initialState=0;

    function reducer(state,action){
        switch(action.type){
            case "inc":return state+1;
            case "dec":return state>0?state-1:0;
            default:return state;
        }
    }
const [state,dispatch]=useReducer(reducer,initialState);

  return (
    <>
    <h1>useReducer Hook in React</h1>
    <h5>It is used to handle Multiple state</h5>
    <p>{state}</p>
    <button onClick={()=>dispatch({type:"inc"})}>INC</button>
    <button onClick={()=>dispatch({type:"dec"})}>DEC</button>
    </>
  )
}
