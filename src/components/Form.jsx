import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';

export default function Form({ todoHeadler }) {
  const [text, setText] = useState('');
  const [id, setId] = useState(0);

  const todoCreat = () => {
    if (!text.trim()) return; 
    const todoObj = { text: text.trim(), id: id };
    setId(id + 1);
    todoHeadler(todoObj);
    setText(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    todoCreat();
  };

  return (
    <Paper style={{ padding: '1em' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            id="outlined-basic"
            label="Tarefa"
            variant="outlined"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button variant="text" type="submit">Add</Button>
        </div>
      </form>
    </Paper>
  );
}
