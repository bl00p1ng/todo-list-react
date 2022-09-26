import '../styles/TodoCounter.css'

function TodoCounter ({ totalToDos, completedToDos }) {
  return (
    <h2 className='TodoCounter'>
      Has completado {completedToDos} de {totalToDos} tareas
    </h2>
  )
}

export default TodoCounter
