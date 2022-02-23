import React, { useEffect, useReducer } from "react";
import "./style1.css";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }

  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};

const Part2 = () => {
  
  
  const [state, dispatch] = useReducer(reducer, 0);   // ***USEREDUCER  for big Projects

  useEffect(()=>{
    document.title = `Chats(${state})`;           // componentDidMount  IMP IMP 
  }); 

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={() => dispatch({ type: "DECR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default Part2;
