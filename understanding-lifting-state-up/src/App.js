import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import './App.css';

const initialTodos = [
  { id: 1, text: 'Learn React', completed: true },
  { id: 2, text: 'Practice lifting state up', completed: false },
  { id: 3, text: 'Build a todo filter', completed: false },
];

function App() {
  const [todos] = useState(initialTodos);
  const [filter, setFilter] = useState('All');

  const getFilteredTodos = () => {
    if (filter === 'Active') return todos.filter((t) => !t.completed);
    if (filter === 'Completed') return todos.filter((t) => t.completed);
    return todos;
  };

  return (
    <div className="app-container">
      <h2 className="app-title">Todo Filter App</h2>
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList todos={getFilteredTodos()} />
    </div>
  );
}

export default App;
