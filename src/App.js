import TodoCounter from './components/TodoCounter'
import TodoItem from './components/TodoItem'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import CreateTodoButton from './components/CreateTodoButton'
import Header from './components/Header'
import Footer from './components/Footer'

const toDos = [
  { text: 'Estudiar React', completed: true },
  { text: 'Trabajar en mi website', completed: false },
  { text: 'Desarrollar un proyecto', completed: false }
]

function App () {
  return (
    <div className='container'>
      <Header />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {toDos.map(toDo => (
          <TodoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      <Footer />
    </div>
  )
}

export default App
