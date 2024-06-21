interface Props {
  pieces: number[]
  setPieces: React.Dispatch<React.SetStateAction<number[]>>
  board: number[]
  setBoard: React.Dispatch<React.SetStateAction<number[]>>
}
export default function Pieces({ pieces, setPieces, board, setBoard }: Props) {
  return (
    <div className="border-2  border-fuchsia-600">
      {2 + 2}
      <p>hey</p>
      <br />
      <br />
      <br />
    </div>
  )
}

// '../../public/soot-parts/image_part_001.png'
