import React, { forwardRef } from 'react'

 function Matrix(props,refer) {
  return (
    <>
     <div className='matrix' ref={refer}>
                   
     </div>
    </>
  )
}
export default forwardRef(Matrix);