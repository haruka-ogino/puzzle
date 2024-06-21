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
    <li
      key={i}
      className={`m-1 p-0 ${isDragging ? 'border-dnd-active m-0 border-4 border-solid' : ''}`}
    >
      <img
        ref={drag}
        src={
          piece < 10
            ? `/soot-parts/image_part_00${piece}.png`
            : `/soot-parts/image_part_0${piece}.png`
        }
        alt="piece"
        className={`flex-none ${isDragging ? 'h-[4.5em] w-[4.5em]' : 'h-[5em] w-[5em]'}`}
      />
    </li>
  )
}
