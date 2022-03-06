import React,{useEffect, useLayoutEffect, useRef} from 'react'

export default function LayoutEffectTutorial() {
    const inputRef = useRef(null)
    // 什么时候使用?
    useLayoutEffect(()=>{
        const inputEle = inputRef.current
        console.log(inputEle.value)
    })

    useEffect(()=>{
        const inputEle = inputRef.current
        inputEle.value = 'Hello world'
    })
  return (
      <div>
          <hr />
          <h1>useLayoutEffect</h1>
          <input 
            type="text"  
            value="Peroro" 
            ref={inputRef} 
            style={{width:'400px',height:'50px'}}
        />

      </div>
  )
}
