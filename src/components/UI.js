import Header from './Header'
import TodoCounter from './TodoCounter'
import TodoItem from './TodoItem'
import TodoSearch from './TodoSearch'
import TodoList from './TodoList'
import CreateTodoButton from './CreateTodoButton'
import Footer from './Footer'

function UI ({
  totalToDos,
  completedToDos,
  searchValue,
  setSearchValue,
  searchedToDos,
  toggleCompleteTodo,
  deleteTodo
}) {
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

export default UI
