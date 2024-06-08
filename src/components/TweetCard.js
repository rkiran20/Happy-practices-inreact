import React, { useState } from 'react'

const TweetCard = () => {
    const [text,setText] = useState("");
    const handleOnChange = (event)=>{
        const dummy = event.target.value;
        ///setText(dummy);
        if(wordsLeft>0){
            setText(dummy);
        }
    }
    const wordsLeft = 100-text.length;
  return (
    <div>
        <h2>Tweet Card</h2>
        <p>Compose Tweet: {wordsLeft}</p>
        <form>
            <textarea  className='tweetInput' id='tweet' value={text} onChange={(event)=>{handleOnChange(event)}}  ></textarea>
        </form>
        {wordsLeft===0 && <p>Max limit reached</p>}
        <button className='tweetBtn'>Tweet</button>
    </div>
  )
}

export default TweetCard