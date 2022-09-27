import { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import Header from './Header'
import TodoCounter from './TodoCounter'
import TodoSearch from './TodoSearch'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import CreateTodoButton from './CreateTodoButton'
import Footer from './Footer'

function UI () {
  // Obtener las propiedades del Context
  const {
    searchedToDos,
    toggleCompleteTodo,
    deleteTodo
  } = useContext(ToDoContext)

  return (
    <div className='container'>
      <Header />

      <TodoCounter />

      <TodoSearch />

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

export default UI
