import Navbar from "./Navbar";
import HeatMap from "./pages/HeatMapTable";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import { Route, Routes} from "react-router-dom"
import React from "react";

function App() {

  return (
    <>
      <Navbar/>
      <div className="container"> 
        <Routes>
          <Route path ="/" element={< Home />} />
          <Route path ="/heatmap" element={< HeatMap />} />
          <Route path ="/staff" element={< Staff />} />
        </Routes>
      </div>
    </>
  )
}

export default App

