import React, { useReducer } from 'react'
import { productDetails } from '../data';

const reducer=(cartItems,action)=>{
    return [
        ...cartItems,{
            id: action.items.id,
            title:action.items.title,
            src: action.items.src,
            price:action.items.price,
            caption: action.items.caption,
        },
    ]
}

const ReducerCart = () => {
    const [cartItems,dispatch] = useReducer (reducer,[]);
    const handleCartBtn =(items)=>{
        dispatch({
            type:"add-to-cart",
            items,
        })
        //console.log(cartItems);
    }
  return (
    <div className='reducerCart'>
        <div>Cart  {cartItems.length>0 && cartItems.length} </div>
        <div style={{display:'flex', flexWrap:'wrap', margin:'10px 10px 10px 10px'}} className='productsDiv'>
        {productDetails.map((data)=>{
            return(
                <div key={data.id} style={{margin:'10px'}}> 
                    <img src={data.src} alt='logo' className='productsImg'></img>
                    <p style={{fontStyle:'italic'}}>{data.title}</p>
                    <p>{data.caption}</p>
                    <button className='productsCartBtn' onClick={()=>{handleCartBtn(data)}}>Add To Cart (${data.price})</button>
                </div>
            )
        })}</div>
        <h2>this we have done by using useReducer not with useState hook see  the codse if u want to know more about it</h2>
    </div>
  )
}

export default ReducerCart