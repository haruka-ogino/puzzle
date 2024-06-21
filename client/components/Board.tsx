import { useState } from 'react'
import { DropTargetMonitor, useDrop } from 'react-dnd'

interface Props {
  pieces: number[]
  setPieces: React.Dispatch<React.SetStateAction<number[]>>
  board: number[]
  setBoard: React.Dispatch<React.SetStateAction<number[]>>
}
export default function Board({ pieces, setPieces, board, setBoard }: Props) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: { piece: number }) => placePiece(item.piece, draggedIndex),
    collect: (monitor: DropTargetMonitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  function placePiece(piece: number, index: number | null) {
    if (index !== null) {
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard]
        newBoard[index] = piece // Update board at the specified index
        return newBoard
      })

      setPieces((prevPieces) => {
        const newPieces = [...prevPieces]
        const pieceIndex = newPieces.indexOf(piece)
        if (pieceIndex !== -1) {
          newPieces[pieceIndex] = 0 // Remove piece from pieces array
        }
        return newPieces
      })
    } else {
      console.log('Invalid index')
    }
  }

  return (
    <div className="border-2">
      <ul className="flex">
        {board.map((piece, i) => (
          <li key={i} className={'w-50px' + isOver ? ' bg-blue-200' : ''}>
            <img
              ref={drop}
              src={
                piece < 10
                  ? `/soot-parts/image_part_00${piece}.png`
                  : `/soot-parts/image_part_0${piece}.png`
              }
              alt="piece"
              draggable
              onDragStart={() => setDraggedIndex(i)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
