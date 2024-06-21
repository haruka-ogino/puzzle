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
    setPieces((prevPieces) => {
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard]
        newBoard[i] = number
        return newBoard
      })
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

  function handleClick(number: number) {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard]
      const index = newBoard.indexOf(number)
      if (index === -1) {
        console.log('piece not found for removal')
      } else {
        newBoard[index] = 90
      }
      setPieces((prevPieces) => {
        const newPieces = [...prevPieces]
        const empty = newPieces.indexOf(90)
        console.log(`the empty index is:${empty}`)

        if (index !== -1) {
          newPieces[empty] = number
        }
        return newPieces
      })
      return newBoard
    })
  }

  return (
    <li key={i} className={'w-50px' + isOver ? ' bg-blue-200' : ''}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img
        ref={drop}
        src={
          thing < 10
            ? `/soot-parts/image_part_00${thing}.png`
            : `/soot-parts/image_part_0${thing}.png`
        }
        alt="piece"
        onClick={() => handleClick(thing)}
      />
    </li>
  )
}
