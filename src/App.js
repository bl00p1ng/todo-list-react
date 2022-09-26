import { useState } from 'react'
import TodoCounter from './components/TodoCounter'
import TodoItem from './components/TodoItem'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import CreateTodoButton from './components/CreateTodoButton'
import Header from './components/Header'
import Footer from './components/Footer'

const defaultToDos = [
  { text: 'Estudiar React', completed: true },
  { text: 'Trabajar en mi website', completed: false },
  { text: 'Desarrollar un proyecto', completed: true }
]

function App () {
  // Almacenar las tareas en el state
  const [toDos, setToDos] = useState(defaultToDos)

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
    setToDos(toDosUpdated)
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
    setToDos(toDosUpdated)
  }

  return (
    <div className='container'>
      <Header />

      <TodoCounter
        totalToDos={totalToDos}
        completedToDos={completedToDos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedToDos.map(toDo => (
          <TodoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => toggleCompleteTodo(toDo.text)}
            onDelete={() => deleteTodo(toDo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      <Footer />
    </div>
  )
}

export default App
