import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Puzzle from './Puzzle'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-4 px-5 pt-6">
        <h1>App</h1>
        <p>React development has begun!</p>
        <Puzzle />
      </div>
    </DndProvider>
  )
}

export default App
