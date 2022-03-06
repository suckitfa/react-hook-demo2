import React,{useContext} from 'react'
import { AppContext } from './ContextTutorial'

export default function Login() {
    const {setUserName} = useContext(AppContext)
  return (
      <div>
          <input 
            onChange={(e)=>{
                setUserName(e.target.value)
            }}
            type="text" />
      </div>
  )
}
