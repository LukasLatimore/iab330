import React, { useState, useEffect } from "react";
import ClinicalRoom from '../images/ClinicalRoom.jpg'
import green from "../images/green.png"
import red from "../images/red.png"


//Heat map function which displays the Heat Map screen
export default function HeatMapTable({ list, colNames, room, height='auto'}) {
  const [count, setCount] = useState(0)
  const [backendData, setBackendData] = useState([{}])

   //to define the number of rows
   colNames = ["", "", "",""] 
   //fetching data from backend
   useEffect(() => {
    fetch("/heatmapapi").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [count] ) 
  list = backendData[count].mapped
  room = backendData[count].room
  console.log(list)
  return (
    <div className="theme1">
      <h1>Heat Map</h1>
      <p1 >Room: {room}</p1>
      <button onClick={() => setCount(count - 1)}>Prev</button>
      <button onClick={() => setCount(count === 9 ? console.log("no more"): count+1)}>Next</button>
      <div className="layer"> 
        {list?.length > 0 && (
          <table cellSpacing="0" style={{ height: height}}>
            <thead>
              <tr>
                {colNames.map((headerItem, index) => (
                  <th key={index}>
                    {headerItem.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.values(list).map((obj, index) => (
              <tr key={index}>
                {Object.values(obj).map((value, index2) => (

                  <td  key={index2}>
                    {value === 0 ? <img className="map"src={green}/> : <img className="map" src={red}/>}
                    </td>
                ))}
              </tr>
              ))}
            </tbody>
          </table>
         )}
         <img className="room" src={ClinicalRoom}></img>
      </div>
    </div>
  )
}
