import { useDrop } from 'react-dnd'
export default function Board() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item: { piece: number }) => placePiece(item.piece),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))
  return (
    <div className="border-2">
      <h1>Board</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
