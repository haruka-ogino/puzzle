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
  const [win, setWin] = useState(false)

  function checkWin(arr: number[]) {
    let tempWin = true
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i + 1) tempWin = false
    }
    setWin(tempWin)
  }

  return (
    <>
      <h1>PUZZLE</h1>
      {win && <p>You win!</p>}
      <div className="">
        <ul className="w-42 flex min-h-[15em] flex-wrap items-center justify-center border-[0.2em]">
          {board.map((piece, i) => (
            <Board
              key={`${i}-board`}
              thing={piece}
              i={i}
              setBoard={setBoard}
              setPieces={setPieces}
              initialPieces={initialPieces}
              checkWin={checkWin}
            />
          ))}
        </ul>
      </div>
      <section className="">
        <ul className="w-45 flex min-h-[15em] flex-wrap items-center justify-center border-[0.2em]">
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
