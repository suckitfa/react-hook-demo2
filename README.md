```sh
yarn install
yarn start
```

- https://www.youtube.com/watch?v=LlvBzyy-558

### why hook?
In function components, we use hook function to hook into React character...

### React Hook Example
1. useState
2. useReducer
```js
const initialState = {
    count:1
}
const countReducer = (state,action) => {
    switch(action.type) {
        case '':
            return {...state,count:state.count}
        default:
            return state
    }
}
const [state,dispatch] = useReducer(countReducer,initialState)
// state.count
// dispatch({type:'increment'})
```
3. useEffect
```js
useEffect(()=>{
    // effect actions
},[dependencies])
```
4. useLayoutEffect
5. useRef
```jsx
function Test() {
    const inputRef = useRef(null)
    const autoFocus = (e) => {
        const inputElem = e.target.current;
        inputElem.focus();
    }
    return (
        <div>
            <input ref={inputRef} type="text" />
        <button onClick={autoFocus}>focus on input</button>
        </div>
    )
}
```
6. useMemo
7. useCallback
8.  useContext
详见ContextTutorial