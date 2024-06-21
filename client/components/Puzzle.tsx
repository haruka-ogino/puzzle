import { useState } from 'react'
import Pieces from './Pieces'

export default function Puzzle() {
  const initialPieces = Array.from({ length: 15 }, (_, index) => index + 1)
  const [pieces, setPieces] = useState(initialPieces)
  console.log(pieces)
  return (
    <>
      <h1>PUZZLE</h1>
      <Pieces />
    </>
  )
}
