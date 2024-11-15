// import React from 'react'
import "./Acordion.css"
import AcordBox from "./AcordBox.jsx"
function Acordion() {
  return (
    <div id="wrapper">
    <div id="accordion">
        <AcordBox heading="Box1"/>
        <AcordBox heading="Box2"/>
        <AcordBox heading="Box3"/>
        <AcordBox heading="Box4"/>

    </div>

    </div>
    
    
  )
}

export default Acordion
