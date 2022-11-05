import React,{ useEffect, useState } from "react"
//home function which displays the home screen or "clinical spaces" screen
export default function Home() {
  const [backendData, setBackendData] = useState([{}])
  //fetching the heatmap api
  useEffect(() => {
    fetch("/heatmapapi").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [] ) 
  console.log(backendData)
  return (
    <div className="theme">
      <h1>Available Clinical Spaces</h1>
      <>
        {
          backendData.map(post => <p1 className={"theme3"} key={post.id}>
            {console.log(post.staffnum)}
            {post.staffnum === 0 ? `Room ${post.room} available` : `Room ${post.room} is not avaialable` }
          </p1>)
        }
      </>
    </div>
  )
}
