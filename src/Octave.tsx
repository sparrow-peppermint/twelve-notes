import React from 'react'
import styled from 'styled-components'
import { NoteType } from './helpers'
import Note from './Note'

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

type Props = {
  notes: NoteType[]
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Octave: React.FC<Props> = ({ notes, clickHandler }) => (
  <Wraper>
    <div>
      {notes.map((element: NoteType) => (
        <Note
          key={element.note}
          color={element.color}
          note={element.note}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  </Wraper>
)

export default Octave
