import { useState, useEffect } from "react";

const pageTitle = document.title;

const Count = ()=>{
    const [count, setCount] = useState(0);

    useEffect(()=>{
        count && (document.title = `${pageTitle}--${count}`)
    })
    return (
        <button className="countButton" onClick={()=> setCount(count+1)}>
            {count===0 ? "Click to like" : `Liked ${count} times`}
        </button>
    )
}
export default Count;




