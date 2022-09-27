import UI from './UI'
import { ToDoProvider } from '../context/ToDoContext'

function App () {
  return (
    <ToDoProvider>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <UI />
    </ToDoProvider>
  )
}

export default App
