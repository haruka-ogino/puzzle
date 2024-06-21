import { useState } from 'react'
import Pieces from './Pieces'
import Board from './Board'

export default function Puzzle() {
  const shuffledPieces = Array.from({ length: 15 }, (_, index) => index + 1)

  // randomise order of pieces
  for (let i = shuffledPieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledPieces[i], shuffledPieces[j]] = [
      shuffledPieces[j],
      shuffledPieces[i],
    ]
  }

  const [initialPieces] = useState(shuffledPieces)
  const [pieces, setPieces] = useState(initialPieces)
  const initialBoard = Array.from({ length: 15 }, () => 90)
  const [board, setBoard] = useState(initialBoard)

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
              initialPieces={initialPieces}
            />
          ))}
        </ul>
      </div>
      <section className="">
        <ul className="border-dnd-active flex min-h-[15em] w-4/5 flex-wrap items-center justify-center border-[0.2em]">
          {pieces.map((piece, i) => (
            <Pieces
              key={`${i}-piece`}
              // url={handleUrl(number)}
              piece={piece}
              i={i}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
