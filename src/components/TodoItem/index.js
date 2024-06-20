import './index.css'

const TodoItem = props => {
  const {todoItem, deleteUser} = props
  const {title, id} = todoItem

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="lists">
      <p className="para">{title}</p>
      <button className="button" type="button" onClick={onDelete} alt="del">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
