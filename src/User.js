import React from 'react'
import { AppContext } from './ContextTutorial'
import { useContext } from 'react'
export default function User() {
    const {username} = useContext(AppContext)
  return (
      <div>
          <h1>user:{username}</h1>
      </div>
  )
}
