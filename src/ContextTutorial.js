import React,{createContext,useContext, useState} from 'react'
import User from './User'
import Login from './Login'

export const AppContext = createContext(null)
export default function ContextTutorial() {
    const [username,setUserName] = useState('')
  return (
      <AppContext.Provider value={{username,setUserName}}>
          <div>
              <hr />
              <Login />
              <User />
              </div>
      </AppContext.Provider>
  )
}
