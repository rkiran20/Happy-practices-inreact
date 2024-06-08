import React, { useState } from 'react'

const CountCard = () => {
    const [count,setCount]= useState(0);
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}} className='countBtn'>{count}</button>
    </div>
  )
}

export default CountCard