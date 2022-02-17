import React from 'react'

export default function Main(props) {
  return (
    <>
     <div className="parent1">
     {props.items.map((ele,i)=>{
       const {id,category,name,description,price,image}=ele;   // Destructing Obect
       
      return(
        
       <div className='parent2' key={i}>
            <p className='parent child1'>{id}</p>
            <p className='parent child2'>{category}</p>
            <h3 className='parent child3'>{name}</h3>
            <p className='parent child4'>{description}<hr  className="hrline" />  <p className="read">Read</p></p>
            
            <p className='parent child5'><img className="image" src={image} alt="mice"/></p>
            
            <p className='parent child6'>{price}</p>
            <button className="orderButton">Order</button>
        </div>
        
      )
        
       
     })
     }
     </div>
    </>
  )
}
