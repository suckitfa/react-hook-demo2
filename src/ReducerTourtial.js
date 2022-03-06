import React, { useReducer, useState } from 'react'

export default function ReducerTourtial() {
    const intialState = {
        count: 0,
        showText:true
    }
    const reducer = (state,action) => {
        switch (action.type) {
            case 'increment':
                return {...state,count:state.count + 1}
            case 'decrement':
                return {...state,count:state.count-1}
            case 'toggleShowText':
                return {...state,showText:!state.showText}
            default:
                return state
        }
    }
    const [state,dispatch] = useReducer(reducer,intialState)
  return (
      <div>
          <hr />
          <h1>useReducer</h1>
          <h3>{state.count}</h3>
          <button
            onClick={() => {
                dispatch({type:'increment'})
                dispatch({type:'toggleShowText'})
            }}
          >Click me!</button>
          {
              state.showText && <h1>Hello World</h1>
          }
      </div>
  )
}
