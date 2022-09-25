import '../styles/TodoItem.css'

function TodoItem (props) {
  return (
    <li className={`TodoItem ${props.completed && 'completed'}`}>
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 12.75l6 6 9-13.5'
          />
        </svg>
      </span>

      <p className='task-name'>{props.text}</p>

      <span className='Icon Icon-delete'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </span>
    </li>
  )
}

export default TodoItem
