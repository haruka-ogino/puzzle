import { useState } from 'react'
import Pieces from './Pieces'
import Board from './Board'

export default function Puzzle() {
  const initialPieces = Array.from({ length: 15 }, (_, index) => index + 1)
  // randomise order of pieces
  for (let i = initialPieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[initialPieces[i], initialPieces[j]] = [initialPieces[j], initialPieces[i]]
  }

  const [pieces, setPieces] = useState(initialPieces)

  console.log(pieces)
  return (
    <>
      <h1>PUZZLE</h1>

      <Board />
      <Pieces />
    </>
  )
}
