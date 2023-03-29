import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Effect2 = () => {
    let[userData,setUserData]=useState([])
    useEffect(()=>{
        window.fetch("https://api.github.com/users")
        .then((x)=>x.json())
        .then((y)=>setUserData(y))
        .catch((err)=>err)
    },[]
    )
  return (
    <div>
        {userData.map((x,index)=>{
            console.log(index);
            return(
                <li key={index}>{x.login}</li>
            )
        }
        )}
    </div>
    

  )
}

export default Effect2