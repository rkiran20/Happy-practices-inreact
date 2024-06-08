import React, { useState } from 'react'
import FormToDo from './FormToDo';

const TodoCard = () => {
    const [value,setValue] = useState([]);
    const [work,setWork] = useState(false)
    const handleValue = (data)=>{
        const newValue = {data,id:Math.random(),};
        const newArray = [...value,newValue]
        setValue(newArray);
        //console.log(value)
    }
    const handleDelete=(removedValue)=>{
        const newArray = value.filter((data)=> (data.id!==removedValue))
        setValue(newArray)
        //console.log(value)
    }
  return (
    <div className='todoDiv'>
        <h2 style={{color:'orange'}}>ToDo List</h2>
        {value.length>0 &&
            value.map((data)=>{
                return (
                    <div key={data.id} style={{display:"flex", justifyContent:'space-between', }} className='todoDataDiv' >
                        <div   >{data.data}</div>
                        <div onClick={()=>{handleDelete(data.id)}}  className='deleteTodo'>❌</div>
                        
                    </div>
                )
            })
        }
        <FormToDo handleValue={handleValue} />
    </div>
  )
}

export default TodoCard