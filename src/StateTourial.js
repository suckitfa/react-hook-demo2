import React, { useState } from 'react'

const StateTourial = () => {
    const [count,setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const [inputValue,setInputValue] = useState('Perdo')
    const handleChange = (e) => {
        const newVal = e.target.value;
        setInputValue(newVal)
    }
  return (
      <div>
          <hr />
          <h1>useState</h1>
          <h3>counter={count}</h3>
          <button onClick={increment}>increment</button>
          <div>
              <input type="text"  placeholder='enter some thing' onChange={handleChange}/>
              {inputValue}
          </div>
      </div>
  )
}

export default StateTourial;