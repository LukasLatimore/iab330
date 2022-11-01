import "../styles.css"
import {React, useEffect, useState } from "react"
export default function Staff() {
  const [searchTerm, setSearchTerm] = useState('')
  const [backendData, setBackendData] = useState([{}])
  
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [setBackendData] ) 

  return (
    <div className="theme">
      <h1>Staff Info</h1>
      <input type = "text" onChange={event => {setSearchTerm(event.target.value)}} placeholder="Search by Room"/>
      {backendData.filter((mockdetail)=> {
        return searchTerm.toLocaleLowerCase() === '' ? mockdetail : mockdetail.location.toLocaleLowerCase().includes(searchTerm)
      }).map((mockdetail, index) => {
        return <div>
        <p1 key={index}><img src={mockdetail.image}/> {mockdetail.name}: <br/> {mockdetail.position}, <br/> Currently in: {mockdetail.location}</p1>
        </div>
      })}
    </div>
  )
}
