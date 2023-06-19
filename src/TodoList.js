import React, { useState, useEffect } from 'react';
import "./App.css"

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleFormSubmit = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = inputValue;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  };
  const handleTodoDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  const handleTodoEdit = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };
  return (
    <div className='ForCenter'>
      <h1>To-Do List</h1>
      <form onSubmit={handleFormSubmit}>
        <input  type="text" value={inputValue} onChange={handleInputChange} />
        <button className='add' type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
      </form>
      <ul className='demo'>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className='edit' onClick={() => handleTodoEdit(index)}>Edit</button>
            <button  className='delete'onClick={() => handleTodoDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
