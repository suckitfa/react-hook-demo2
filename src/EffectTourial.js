import React,{useEffect,useState} from 'react'
export default function EffectTourial() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(rep=>rep.json())
        .then(data=> {
            setData(data)
            // console.log(data)
        })
    },[])
  return (
      <div>
          <hr />
          <h1>useEffect</h1>
          <ol>
                  {data.slice(0,5).map(item =>  <li key={item.postId+item.email}>{item.email}</li>)}
          </ol>
      </div>
  )
}
