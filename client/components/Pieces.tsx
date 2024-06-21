import { useDrag } from 'react-dnd'

interface Props {
  pieces: number[]
  setPieces: React.Dispatch<React.SetStateAction<number[]>>
  board: number[]
  setBoard: React.Dispatch<React.SetStateAction<number[]>>
}
export default function Pieces({ pieces, setPieces, board, setBoard }: Props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { type: 'image' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <div className="border-2  border-fuchsia-600">
      <ul>
        {pieces.map((piece, i) => (
          <li key={i} className={isDragging ? 'bg-blue-200' : ''}>
            <img
              ref={drag}
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

// '../../public/soot-parts/image_part_001.png'
