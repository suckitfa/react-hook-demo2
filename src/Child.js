import React, { useEffect } from 'react'

export default function Child({returnComment}) {
    useEffect(()=>{
        console.log("function was called")
    },[returnComment])
  return (
      <div>
          <h1>{returnComment("bobo")}</h1>
      </div>
  )
}
