import React,{useEffect, useState} from "react";
const Effect=()=>{
    let[count,setcount]=useState(0)

    useEffect(()=>{
        document.file=`you clicked${count}times`
    },[count]
    )
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{
                setcount(count+1)
            }
            }></button>
        </div>
        
    )
}
export default Effect