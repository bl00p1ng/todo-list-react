import { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import '../styles/TodoCounter.css'

function TodoCounter () {
  const { totalToDos, completedToDos } = useContext(ToDoContext)

  return (
    <h2 className='TodoCounter'>
      Has completado {completedToDos} de {totalToDos} tareas
    </h2>
  )
}

export default TodoCounter
