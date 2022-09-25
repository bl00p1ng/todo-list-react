import TodoCounter from './components/TodoCounter';
import TodoItem from './components/TodoItem';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';
// import './App.css';

const toDos = [
  { text: 'Estudiar React', completed: false },
  { text: 'Trabajar en mi website', completed: false },
  { text: 'Desarrollar un proyecto', completed: false }
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {toDos.map(toDo => (<TodoItem key={toDo.text} text={ toDo.text } />))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
