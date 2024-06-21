import { useDrop } from 'react-dnd'
interface Props {
  thing: number
  i: number
  setBoard: React.Dispatch<React.SetStateAction<number[]>>
  setPieces: React.Dispatch<React.SetStateAction<number[]>>
  initialPieces: number[]
  checkWin: (arr: number[]) => void
}
export default function Board({
  thing,
  i,
  setBoard,
  setPieces,
  initialPieces,
  checkWin,
}: Props) {
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
        if (newBoard.indexOf(90) === -1) checkWin(newBoard)
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
        return prevBoard
      }
      newBoard[index] = 90
      return newBoard
    })
    setPieces((prevPieces) => {
      const returnIndex = initialPieces.indexOf(number)
      if (returnIndex !== -1) {
        const newPieces = [...prevPieces]
        newPieces[returnIndex] = number
        return newPieces
      } else {
        return prevPieces
      }
    })
  }

  return (
    <li key={i} className={'w-50px m-1 p-0' + isOver ? ' bg-blue-200' : ''}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img
        ref={drop}
        src={
          thing < 10
            ? `/soot-parts/image_part_00${thing}.png`
            : `/soot-parts/image_part_0${thing}.png`
        }
        alt="piece"
        className={`h-[7em] w-[7em] flex-none`}
        onClick={() => handleClick(thing)}
      />
    </li>
  )
}
