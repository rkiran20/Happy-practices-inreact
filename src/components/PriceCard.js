import React, { useId, useState } from 'react'
import priceDetails from '../data';

const PriceCard = () => {
    const [text,setText] = useState("free");
    const [price,setPrice]= useState(0);
    const selectPlansId = useId();
    const handleOnChange = (data)=>{
        setText(data.name);
       //console.log(data)
        setPrice(data.price)
    }
    //console.log(price);
  return (
    <div><h2>Price Card</h2>
        {price? <div>$ {price}.00</div> : <div>this is Free</div>}
        <form>
            <fieldset>
                <legend>Select Plans</legend>
                {priceDetails.map((data,index)=>{
                    return(
                        <div key={index}>
                            <input  type='radio' name='agreed-to-terms' id={`${data.name}-${selectPlansId}`} value={data.price} checked={price===data.price} onChange={()=>{handleOnChange(data)}}  ></input>
                            <label htmlFor={`${data.name}-${selectPlansId}`}>{data.name}</label>
                        </div>
                    )
                })}
            </fieldset>
        </form>
    </div>
  )
}

export default PriceCard