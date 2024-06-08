import React, { useState } from 'react'
import { productDetails } from '../data'

const ItemsCard = ({data,setItems,items}) => {
    const [noOfItems,setNoOfItems]= useState(0);
    const handleAdd =()=>{
        setItems(items+1);
        setNoOfItems(noOfItems+1);
    }
    const handleRemove=()=>{
        setItems(items-1);
        setNoOfItems(noOfItems-1)
    }
    
  return (
    <div key={data.id} style={{margin:'10px'}}>
                        <img src={data.src} alt='photo' className='productsImg'></img>
                        <p style={{fontStyle:'italic'}}>{data.title}</p>
                        <p >{data.caption}</p>
                        <button className='productsCartBtn' onClick={handleAdd}> Add to Cart (${data.price}) </button>
                        {noOfItems!==0 && <button onClick={handleRemove}>Remove</button>}
                    </div>
  )
}

export default ItemsCard