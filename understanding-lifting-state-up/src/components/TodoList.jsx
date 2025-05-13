import './TodoList.css';

function TodoList({ todos }) {
  if (todos.length === 0) return <p className="empty">No todos to show.</p>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;