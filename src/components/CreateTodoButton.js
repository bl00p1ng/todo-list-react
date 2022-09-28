import '../styles/CreateTodoButton.css'

function CreateTodoButton ({ setToggleModal }) {
  return (
    <button
      className='CreateTodoButton'
      onClick={() => setToggleModal(prevState => !prevState)}
    >
      +
    </button>
  )
}

export default CreateTodoButton
