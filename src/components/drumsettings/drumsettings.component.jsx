import React from 'react'
import './drumsettings.styles.css'

function DrumSettings({powerChanged, soundName=""}) {

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
      <div className="power">
        <span className="checkbox-label"> Power </span>
        <label className="switch">
          <input type="checkbox" onChange={(e) => powerChanged(e)} /> 
          <span className="slider round"></span>
        </label>
      </div>
      <div id="display">
        <h1> {soundName} </h1>
      </div>
    </div>
  )
}

export default DrumSettings
