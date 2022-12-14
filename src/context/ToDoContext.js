import { createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ToDoContext = createContext()

function ToDoProvider (props) {
  // Leer/escribir tareas en localStorage
  const [toDos, saveToDos] = useLocalStorage('TODOS_V1', [])

  // Abrir/cerrar el modal
  const [toggleModal, setToggleModal] = useState(false)

  // Tarea a buscar
  const [searchValue, setSearchValue] = useState('')

  // Cantidad de tareas completadas
  const completedToDos = toDos.filter(toDo => toDo.completed).length

  // Cantidad total de tareas
  const totalToDos = toDos.length

  let searchedToDos = []

  if (searchValue.length >= 1) {
    // Si el usuario hace una busqueda, filtrar las tareas mostradas
    searchedToDos = toDos.filter(toDo => {
      // Convertir las tareas y la busqueda a minuscula
      const toDoText = toDo.text.toLowerCase()
      const searchtext = searchValue.toLowerCase()

      // Filtrar las tareas que coincidan con al busqueda
      return toDoText.includes(searchtext)
    })
  } else {
    // Si no busca nada, mostras todas las tareas
    searchedToDos = toDos
  }

  // Marcar/desmarcar tarea como completada
  const toggleCompleteTodo = (toDoText) => {
    // Obtener el indice de la tarea a completar
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === toDoText)

    // Hacer una copia de las tareas existentes
    const toDosUpdated = [...toDos]

    // Cambiar el valor de la propiedad completed de la tarea
    toDosUpdated[toDoIndex].completed = !toDosUpdated[toDoIndex].completed

    // Actualizar las tareas en el estado
    saveToDos(toDosUpdated)
  }

  // Agregar una tarea
  const addToDo = (toDoText) => {
    // Hacer una copia de las tareas existentes
    const toDosUpdated = [...toDos]

    toDosUpdated.push({
      text: toDoText,
      completed: false
    })

    saveToDos(toDosUpdated)
  }

  // Eliminar tarea
  const deleteTodo = (toDoText) => {
    // Obtener el indice de la tarea a eliminar
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === toDoText)

    // Hacer una copia de las tareas existentes
    const toDosUpdated = [...toDos]

    // Eliminar la tarea seleccionada
    toDosUpdated.splice(toDoIndex, 1)

    // Actualizar las tareas en el estado
    saveToDos(toDosUpdated)
  }

  // Valores que se van a pasar al provider
  const contextValues = {
    totalToDos,
    completedToDos,
    searchValue,
    setSearchValue,
    searchedToDos,
    toggleCompleteTodo,
    addToDo,
    deleteTodo,
    toggleModal,
    setToggleModal
  }

  return (
    <ToDoContext.Provider value={contextValues}>
      {props.children}
    </ToDoContext.Provider>
  )
}

export { ToDoContext, ToDoProvider }
