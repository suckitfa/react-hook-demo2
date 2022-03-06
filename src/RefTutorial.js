import React,{useRef} from 'react'

export default function RefTutorial() {
    const inputRef = useRef(null)
    const onButtonClick = () => {
        console.log(inputRef)
        const inputEle = inputRef.current
        inputEle.value = ''
        inputEle.focus()

    }
  return (
      <div>
          <hr />
          <h1>useRef</h1>
          <input type="text" placeholder='enter..' ref={inputRef}/>
          <button onClick={onButtonClick}>Change Name</button>
      </div>
  )
}
