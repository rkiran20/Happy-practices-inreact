import React, { useState } from 'react'

const TempCard = () => {
    const [temp,setTemp] = useState(25);
    const [isCelsius,setIsCelsius] = useState(true);
    // if(!isCelsius){
    //     setTemp(changeToFahrenheit(temp))
    // }
    const changeToFahranheit = (temp)=>{
        const dummy= ((temp*9)/5)+32;
        return dummy;
    }
    const changeTocelcius = (temp)=>{
        const dummy= ((temp-32)*5)/9;
        return dummy;
    }
    const handleTemp=()=>{
        const newChange= isCelsius===true ? "fahranheit" : "celcius";
        setIsCelsius(newChange==="celcius");
        const newTemp = newChange==="celcius" ? changeTocelcius(temp) : changeToFahranheit(temp);
        setTemp(newTemp);
    }
  return (
    <div>
        <h2>Temperature Card</h2>
        <h3>we will do this temperature update by only 2 state varialbes not three</h3>
        <div className='tempDisplay'> {temp} </div>
        <div style={{display:'flex',}}>
            <button className="tempChangeBtn" onClick={handleTemp} > {isCelsius ? "change to Fahrenheit" : "change to Celcius"}  </button>
            <div>
                <button onClick={()=>{setTemp(temp+1)}}>up</button>
                <button  onClick={()=>{setTemp(temp-1)}}>down</button>
            </div>
        </div>
    </div>
  )
}

export default TempCard