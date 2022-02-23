import React,{useState} from 'react'
import './style.css'
import { GrAdd } from 'react-icons/gr'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'


export default function Todo() {

  const [store,setStore]=useState("");
  const [array,setArray]=useState([]);
  const [editflag,seteditflag]=useState(false);
  const [editid,seteditid]=useState(null);

 


//ADD
  function add(){
   
    if(editflag && editid !== null){
      console.log("edit area");
     
   const ind=array.findIndex(function (item){
          return item.id===editid;
   });
   
      array[ind].name=store;

       setArray(array);
       setStore("");
        seteditflag(false);
      seteditid(null);
    }

    else if(store!=="" ){
      console.log("enter 2");
          const token={
            id:new Date().getTime().toString(),
            name:store
          };
          
      setArray([...array,token]);
     setStore("");
    } 
  }

//Delete

  function deleteitem(id){
    setArray("newarray");
      const newarray=array.filter((ele)=>{
        return ele.id!==id;
      });
      console.log(newarray);
      setArray(newarray);
  }
//Edit
  function edit(ele){
    setStore(ele.name);
    seteditflag(true);
    seteditid(ele.id);

  }

  //Complete Delete

  function deleteall(){
    setArray([]);
  }
  //Return
  return (
    <>
    <div className="parent">
      <h3>Work List</h3>
      <br/>
      
      <div className='parent1'>
      <input type="text" className="box child1" value={store} onChange={(e)=>setStore(e.target.value)  }/>
      <i className="child2" onClick={add}><GrAdd/> </i>
    
      </div>

      {/* Here display */}
        
          {
            array.map((ele,index)=>{
              
              return (

                <div className="parent2 box" key={index}>
                      <span>{ele.name}</span>

                      <div>
                      <span className='icon1' onClick={()=>edit(ele)}><BiEdit/></span>
                      <span className='icon2' onClick={()=>deleteitem(ele.id)}><MdDelete/></span>
                      </div>
                </div>
                

              
              )
            })
          }
          <br/>
        

      <button onClick={deleteall}>Delete All</button>

    </div>
    
    </>
  )
}
