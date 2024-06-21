import { useState } from 'react'
import Pieces from './Pieces'
import Board from './Board'

export default function Puzzle() {
  // const initialPieces = Array.from({ length: 15 }, (_, index) => index + 1)
  // // randomise order of pieces
  // for (let i = initialPieces.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1))
  //   ;[initialPieces[i], initialPieces[j]] = [initialPieces[j], initialPieces[i]]
  // }

  const initialPieces = useState([1, 2, 3, 4, 5])

  const [pieces, setPieces] = useState(initialPieces)
  const [board, setBoard] = useState([90, 90, 90, 90, 90])

  console.log(pieces)
  return (
    <>
      <h1>PUZZLE</h1>

      <Board
        pieces={pieces}
        setPieces={setPieces}
        board={board}
        setBoard={setBoard}
      />
      <Pieces
        pieces={pieces}
        setPieces={setPieces}
        board={board}
        setBoard={setBoard}
      />
    </>
  )
}
