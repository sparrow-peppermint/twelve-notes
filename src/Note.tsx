import React, { useEffect } from 'react'
import styled from 'styled-components'

const Black = styled.button`
  width: 60px;
  height: 130px;
  background: #b393d3;
  border: solid white 1px;
  border-radius: 15px;
  position: absolute;
  margin: 1px;
  margin-left: -20px;

  :active {
    background: #333;
  }
`

const White = styled.button`
  width: 90px;
  height: 200px;
  background: #4e1f9e;
  border: solid #b393d3 1px;
  border-radius: 15px;
  box-shadow: 2px 5px;
  margin: 1px;
  margin-left: '-20px';
  box-sizing: border-box;

  :active {
    background: #eee;
  }
`

type Props = {
  color: string
  note: string
  key: string
  clickHandler: () => void
}

const Note: React.FC<Props> = ({ color, note, key, clickHandler }) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === key) {
        clickHandler()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [clickHandler, key])

  return color == 'white' ? (
    <White value={note} onClick={clickHandler} />
  ) : (
    <Black value={note} onClick={clickHandler} />
  )
}

export default Note
