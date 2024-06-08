import React, { useState } from 'react'
import { pizzaSizes, pizzaToppings } from '../data'

const PizzaMenu = () => {
    const [size,setSize] = useState("");
    const [toppings,setToppings] = useState(pizzaToppings);
    const [selectAll,setSelectAll]= useState(false);
    const handleToppings=(events,data,index)=>{
        const newObj = [...toppings]
        newObj[index].clicked = !newObj[index].clicked ;
        setToppings(newObj)
        // data.clicked = !data.clicked
        //console.log(newObj);
       // console.log(toppings.find(toppings.find((data)=>data.label)))
    }
    const handleSelectBtn=()=>{
        setSelectAll(!selectAll);
        const newObj = [...toppings]
        newObj.map((data)=>(
            data.clicked = true
        ))
        setToppings(newObj);
    }
    const handleCancelBtn=()=>{
        setSelectAll(!selectAll);
        const newObj = [...toppings]
        newObj.map((data)=>(
            data.clicked = false
        ))
        setToppings(newObj);
    }
  return (
    <div className='pizzaDiv'>PizzaMenu
        <h1>Your Order</h1>
        <form>
            <fieldset>
                <legend>Select Size</legend>
                {pizzaSizes.map((data,index)=>{
                    return (
                        <div key={index}>
                            <input  type='radio' name='sizes' id={data.label} value={data.label} checked={size===data.label} onChange={(event)=>{setSize(event.target.value)}} ></input>
                            <label htmlFor={data.label}>{data.label}</label>
                        </div>
                    )
                })}
            </fieldset>
            <fieldset>
                <legend>Select your pizza toppings</legend>
                <div>
                    {pizzaToppings.map((data,index)=>{
                        return(
                            <div key={index} style={{display:'flex'}}>
                                <input  type='checkbox' id={data.label} value={data.label} checked={data.clicked}  onChange={(event)=>{handleToppings(event,data,index)}} ></input>
                                <label>{data.label}</label>
                            </div>
                        )
                    })}
                </div>
                {!selectAll && <button onClick={handleSelectBtn}>Select All</button>}
                {selectAll && <button onClick={handleCancelBtn}>Cancel All</button>}
            </fieldset>
        </form>
        <h3>we have done this with 3 state variables but can be done with two also buy giving the selectAll btn as a prop to this component</h3>
    </div>
  )
}

export default PizzaMenu