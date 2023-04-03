import React from 'react'
import { notes } from './helpers'
import Octave from './Octave'
import Header from './Header'

function App() {
  const handleClick = (note: string) => {
    const audio = new Audio(`sounds/synth_${note}.mp3`)
    audio.play()
  }

  return (
    <div>
      <Header />
      <Octave notes={notes} clickHandler={handleClick} />
    </div>
  )
}

export default App
