import { useDrop } from 'react-dnd'
export default function Board() {
  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: 'image',
  //   drop: (item: { piece: number }) => placePiece(item.piece),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }))

  const arr = [90, 90, 90, 90, 90]
  return (
    <div className="border-2">
      <ul>
        {arr.map((piece, i) => (
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
