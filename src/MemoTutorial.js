import React, { useEffect,useState,useMemo } from 'react'

export default function MemoTutorial() {
    const [data,setData] = useState(null)
    const [toggle, setToggle] = useState(true)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(resp=>resp.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[]);

    // computed the longest name from the comments
    // recreated again recomputed every time! we need to use useMemo
    const findLongestName = (comments) => {
        if (!comments) return null;
        let longestName = "";
        for(let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("that was computed!")
        return longestName;
    }
    
    const getLongestName = useMemo(() => findLongestName(data),[toggle])
  return (
      <div>
          <hr />
          <h1>useMemo</h1>
          <div>{getLongestName}</div>
          <button onClick={()=>setToggle(!toggle)}>
              Toggle</button>
      </div>
  )
}
