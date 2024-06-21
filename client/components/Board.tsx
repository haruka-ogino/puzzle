import { useDrop } from 'react-dnd'
interface Props {
  thing: number
  i: number
  setBoard: React.Dispatch<React.SetStateAction<number[]>>
  setPieces: React.Dispatch<React.SetStateAction<number[]>>
}
export default function Board({ thing, i, setBoard, setPieces }: Props) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: { piece: number }) => placePiece(item.piece),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  function placePiece(number: number) {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard]
      newBoard[i] = number
      return newBoard
    })
    setPieces((prevPieces) => {
      const newPieces = [...prevPieces]
      const index = newPieces.indexOf(number)
      if (index === -1) {
        console.log('piece not found for removal')
      } else {
        newPieces[index] = 90
      }
      return newPieces
    })
  }

  return (
    <li key={i} className={'w-50px' + isOver ? ' bg-blue-200' : ''}>
      <img
        ref={drop}
        src={
          thing < 10
            ? `/soot-parts/image_part_00${thing}.png`
            : `/soot-parts/image_part_0${thing}.png`
        }
        alt="piece"
      />
    </li>
  )
}
