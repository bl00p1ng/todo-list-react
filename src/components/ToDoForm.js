import { useContext, useState } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import '../styles/TodoForm.css'

function TodoForm () {
  const { addToDo, setToggleModal } = useContext(ToDoContext)

  // Guardar la tarea nueva en el state
  const [newToDo, setNewToDo] = useState('')

  // Cerrar el modal
  const closeModal = () => {
    setToggleModal(false)
  }

  // Crear una tarea en el state
  const createToDo = e => {
    setNewToDo(e.target.value)
  }

  // Guardar tarea
  const saveToDo = e => {
    e.preventDefault()

    addToDo(newToDo)

    closeModal()
  }

  return (
    <div className='form-modal'>
      {/* Icono de cierre del Modal */}
      <div className='close-bar'>
        <button
          className='close-button'
          onClick={closeModal}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>

      <form onSubmit={saveToDo} className='ToDoForm'>
        <label htmlFor='toDo'>
          Escribe una nueva tarea
        </label>
        <textarea
          id='toDo'
          value={newToDo}
          onChange={createToDo}
          placeholder='Escribe el nombre de la tarea'
        />

        <input
          className='save-button'
          type='submit'
          value='Guardar'
        />
      </form>
    </div>
  )
}

export default TodoForm
