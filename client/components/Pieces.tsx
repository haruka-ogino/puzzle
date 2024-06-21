import { useDrag } from 'react-dnd'

interface Props {
  piece: number
  i: number
}
export default function Pieces({ piece, i }: Props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { type: 'image', piece },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <li key={i} className={'' + isDragging ? ' bg-blue-200' : ''}>
      <img
        ref={drag}
        src={
          piece < 10
            ? `/soot-parts/image_part_00${piece}.png`
            : `/soot-parts/image_part_0${piece}.png`
        }
        alt="piece"
        className="w-32"
      />
    </li>
  )
}

// '../../public/soot-parts/image_part_001.png'
