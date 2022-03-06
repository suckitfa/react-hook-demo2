import React,{forwardRef, useState,useImperativeHandle} from 'react'

function Button(props,ref) { 
    const [toggle,setToggle] = useState(false)
    useImperativeHandle(ref,()=>({
        alertToggle() {
            setToggle(!toggle)
        }
    })
    );
  return (
      <>
        <button
            onClick={() => {
                setToggle(!toggle)
            }}
            >Button From Child</button>
            {
                toggle && <h1>Hello World</h1>
            }
      </>
  )
}

export default forwardRef(Button)
