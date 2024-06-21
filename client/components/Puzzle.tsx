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

  const initialPieces = [1, 2, 3, 4, 5]

  const [pieces, setPieces] = useState(initialPieces)
  const [board, setBoard] = useState([90, 90, 90, 90, 90])

  console.log(`board: [${board}]`)
  console.log(`pieces: [${pieces}]`)

  return (
    <>
      <h1>PUZZLE</h1>
      <div className="border-2">
        <ul className="flex">
          {board.map((piece, i) => (
            <Board
              key={`${i}-board`}
              thing={piece}
              i={i}
              setBoard={setBoard}
              setPieces={setPieces}
            />
          ))}
        </ul>
      </div>
      <div className="border-2  border-fuchsia-600">
        <ul className="flex">
          {pieces.map((piece, i) => (
            <Pieces
              key={`${i}-piece`}
              // url={handleUrl(number)}
              piece={piece}
              i={i}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
