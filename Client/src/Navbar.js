import React from "react"
import {Link, useResolvedPath, useMatch} from "react-router-dom"
import home from './images/Home.png'
import staff from './images/Staff.png'
import HeatMap from './images/HeatMap.png'

//navbar function which remains on screen at all times
export default function Navbar() {
  
  return (
    <nav className="nav">
        
        <ul>
            <CustomLink to="/"><img src={home} style={{maxHeight: "100px", maxWidth: "100px"}}/></CustomLink>
            <CustomLink to = "/heatmap"><img src={HeatMap} style={{maxHeight: "100px", maxWidth: "100px"}}/></CustomLink>
            <CustomLink to = "/staff"><img src={staff} style={{maxHeight: "100px", maxWidth: "100px"}}/></CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>
                {children}
            </Link>
        </li>
    )
}