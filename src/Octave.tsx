import React from 'react'
import styled from 'styled-components'
import { NoteType } from './helpers'
import Note from './Note'

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`

type Props = {
  notes: NoteType[]
  clickHandler: (note: string) => void
}

const Octave: React.FC<Props> = ({ notes, clickHandler }) => {
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      notes.forEach((note) => {
        if (e.key === note.key) {
          clickHandler(note.note)
        }
      })
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [clickHandler, notes])

  return (
    <Wraper>
      <div>
        {notes.map((element: NoteType) => (
          <Note
            color={element.color}
            note={element.note}
            clickHandler={() => clickHandler(element.note)}
            key={element.key}
          />
        ))}
      </div>
    </Wraper>
  )
}

export default Octave
