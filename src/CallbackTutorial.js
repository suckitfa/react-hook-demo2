import React,{useCallback, useState} from 'react'
import Child from './Child'
export default function CallbackTutorial() {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState('yo, you are handsome!')
    // 缓存函数
    const returnComment = useCallback((name="") => {
        return data + name;
    },[data])
  return (
      <div> 
          <hr />
          <h1>useCallback</h1>
          <Child returnComment={returnComment}/>
          <button onClick={() =>{setToggle(!toggle)} }>Toggle</button>
          {
              toggle && <h1>toggle</h1>
          }
      </div>
  )
}
 