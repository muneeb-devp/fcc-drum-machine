import React, { useState } from 'react'
import DrumSettings from '../drumsettings/drumsettings.component'
import './drummachine.styles.css'
 
function DrumMachine() {
  const [power, setPower] = useState(false)
  const [sound, setSound] = useState('None')

  const keypad = 'Q W E A S D Z X C'.split(' ')
  const soundNames = 'Heater 1,Heater 2,Heater 3,Heater 4,Clap,Open HH,Kick \'n Hat,Kick,Closed HH'.split(',')
  const sounds = [
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  ]

  const playKey = (e) => {
    if (power){
      e.target.querySelector('.clip').play()
      setSound(soundNames[keypad.indexOf(e.target.innerText)])
    }
  }

  const keyPressed = (e) => {
    const key = e.key.toUpperCase()
    
    console.log(power)
    if (power && keypad.indexOf(key) !== -1){
      document.querySelector(`#${key}`).play()
      setSound(soundNames[keypad.indexOf(key)])
    }
  }

  const powerChanged = (e) => setPower(e.target.checked)

  return (
    <div id="drum-machine" onKeyPress={(e) => keyPressed(e)}>
      <div id="drum-machine-elems">
      {
        keypad.map((k, i) => (
          <div className="drum-pad" id={soundNames[i]} onClick={(e) => playKey(e)} key={i}>
            {k} 
            <audio src={`${sounds[i]}`} className="clip" id={`${k}`} ></audio>
          </div>
        ))
      }
      </div>
      <DrumSettings powerChanged={powerChanged} soundName={sound}/>
    </div>
  )
}

export default DrumMachine
