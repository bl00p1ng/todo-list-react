import { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import '../styles/TodoSearch.css'

function TodoSearch () {
  const { searchValue, setSearchValue } = useContext(ToDoContext)

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <input
      className='TodoSearch'
      type='search'
      placeholder='Busca una tarea'
      onChange={onSearchValueChange}
      value={searchValue}
    />
  )
}

export default TodoSearch
