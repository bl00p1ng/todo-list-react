import { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import Header from './Header'
import TodoCounter from './TodoCounter'
import TodoSearch from './TodoSearch'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import CreateTodoButton from './CreateTodoButton'
import Footer from './Footer'
import Modal from './Modal'
import TodoForm from './ToDoForm'

function UI () {
  // Obtener las propiedades del Context
  const {
    searchedToDos,
    toggleCompleteTodo,
    deleteTodo,
    toggleModal,
    setToggleModal
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

      {toggleModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setToggleModal={setToggleModal}
      />

      <Footer />
    </div>
  )
}

export default UI
