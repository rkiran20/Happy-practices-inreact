import React, { useState } from 'react'

const FormToDo = ({handleValue}) => {
    const [text,setText] = useState("");
    const handleBtn= (event)=>{
        event.preventDefault();
        handleValue(text);
        setText("")
        //console.log(text)
    }
  return (
    <div className='toDoFormDiv'>
        <form>
            <label style={{display:'block'}}>New Item:</label>
            <input required value={text} onChange={(event)=>{setText(event.target.value)}}  className='todoInput' ></input>
            <button onClick={(event)=>{handleBtn(event)}} className='todoBtn' >Add Item</button>
        </form>
    </div>
  )
}

export default FormToDo