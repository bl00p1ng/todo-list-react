function TodoList (props) {
  return (
    <section className='TodoList'>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}

export default TodoList
