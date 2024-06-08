import React, { useState } from 'react'
import { productDetails } from '../data';
import ItemsCard from './ItemsCard';

const ShoppingCart = () => {
    const [items,setItems] = useState(0);
  return (
    <div>
        <h2>We are creating shopping cart</h2>
        <h1>Pinto Famoso</h1>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <p>Abstract Expressionist</p>
            <div>
                <div className='numBox'>{items!==0 && items}</div>
                <img  style={{width:'40px'}}  src='https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=' alt='cart'></img>
            </div>
        </div>
        <div style={{display:'flex', flexWrap:'wrap', margin:'10px 10px 10px 10px'}} className='productsDiv'>
        {productDetails.map((data,index)=>{
                return(
                    <ItemsCard key={index} data={data} setItems={setItems} items={items} />
                )
            })}
        </div>
        <p>This we have added add button and we have also added remove button which is added to the cart</p>
    </div>
  )
}

export default ShoppingCart