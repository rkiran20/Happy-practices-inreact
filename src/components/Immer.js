import React from 'react'
import { useState } from 'react';
import { details } from '../data';
const Immer = () => {
    const [events, setEvents] = useState(details);
    const filterData =()=>{
        const newData = events[2].metadata.invitees.filter((data) => data.email!=="dseppo@widgetco.com")
       const filteredData = {
        ...events[2],
        metadata:{
            ...events[2]?.metadata,
            invitees: newData,
        }
       }
       var newDummy = [...events.slice(0,2)]
       newDummy.push(filteredData)
       setEvents(newDummy)
       // console.log(events);
    }
  return (
    <div>Immer
        <button onClick={filterData}>click</button>
    </div>
  )
}

export default Immer