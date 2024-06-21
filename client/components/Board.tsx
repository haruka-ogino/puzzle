import { useDrop } from 'react-dnd'

interface Props {
  pieces: number[]
  setPieces: React.Dispatch<React.SetStateAction<[number[]]>>
  board: number[]
  setBoard: React.Dispatch<React.SetStateAction<[number[]]>>
}
export default function Board({ pieces, setPieces, board, setBoard }: Props) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: { piece: number }) => placePiece(item.piece),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  return (
    <div className="border-2">
      <ul>
        {board.map((piece, i) => (
          <li key={i}>
            <img
              ref={drop}
              src={
                piece < 10
                  ? `/images/soot-parts-easy/image_part_00${piece}.png`
                  : `/images/soot-parts-easy/image_part_0${piece}.png`
              }
              alt="piece"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
