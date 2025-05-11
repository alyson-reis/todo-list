import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";

export default function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [checked, setChecked] = React.useState([]);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedText, setEditedText] = React.useState(todo.text);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    currentIndex === -1 ? newChecked.push(value) : newChecked.splice(currentIndex, 1);
    setChecked(newChecked);
  };

  const handleEdit = () => setIsEditing(true);

  const handleEditConfirm = () => {
    setIsEditing(false);
    updateTodo(todo.id, editedText);
  };

  return (
    <Paper>
      <List sx={{ width: "100%", bgcolor: "background.paper", borderRadius: '2em'} }>
        {[0].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  <IconButton onClick={handleEdit}>
                    <EditIcon style={{color: 'yellowgreen'}} />
                  </IconButton>
                  <IconButton onClick={() => deleteTodo(todo.id)}>
                    <DeleteIcon style={{color: 'e05219'}} />
                  </IconButton>
                </Stack>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.includes(value)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>

                {isEditing ? (
                  <TextField
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onBlur={handleEditConfirm}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleEditConfirm();
                    }}
                    size="small"
                    autoFocus
                  />
                ) : (
                  <ListItemText primary={todo.text} />
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}
