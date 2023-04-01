import React from 'react'
import { notes } from './helpers'
import Octave from './Octave'

function App() {
  const handleClick = (note: string) => {
    const audio = new Audio(`sounds/piano_${note}.mp3`)
    audio.play()
  }

  return (
    <div>
      <Octave notes={notes} clickHandler={handleClick} />
    </div>
  )
}

export default App
