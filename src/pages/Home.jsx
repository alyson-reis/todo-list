import React, { useState } from 'react'
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';
import {Container, List} from '@mui/material';    
import { idID } from '@mui/material/locale';
export default function Home() {
  const [todos, setTodos] = useState([]);

  const todoHeadler = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <Form todoHeadler={todoHeadler} />
        <List sx={{ marginTop: "1em" }}>
          {todos.map((todo) => (
            <div key={todo.id} style={{ marginTop: "1em" }}>
              <TodoItem
                todo={todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            </div>
          ))}
        </List>
      </Container>
    </div>
  );
}
