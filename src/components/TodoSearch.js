import '../styles/TodoSearch.css'

function TodoSearch ({ searchValue, setSearchValue }) {
  const onSearchValueChange = (e) => {
    console.log(e.target.value)
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
