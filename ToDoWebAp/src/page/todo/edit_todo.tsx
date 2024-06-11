import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Modal,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo, getTodo } from "../../util/slice/todoSlice";

export const EditTodo = ({
  updateOpen,
  handleUpdateClose,
  selectedRow,
}: any) => {
  console.log(selectedRow, "tttttttt");
  const [title, setTitle] = useState(selectedRow?.title);
  const [description, setDescription] = useState(selectedRow?.description);
  const [deadline, setDeadline] = useState(selectedRow?.deadline);
  const [priority, setPriority] = useState(selectedRow?.priority);
  const dispatch = useDispatch();
  // Handlers for input changes
  const handleTitleChange = (event: any) => setTitle(event.target.value);
  const handleDescriptionChange = (event: any) =>
    setDescription(event.target.value);
  const handleDeadlineChange = (event: any) => setDeadline(event.target.value);
  const handlePriorityChange = (event: any) => setPriority(event.target.value);

  useEffect(() => {
    setDeadline(selectedRow?.deadline);
    setPriority(selectedRow?.priority);
    setTitle(selectedRow?.title);
    setDescription(selectedRow?.description);
  }, [selectedRow]);
  // Submit handler
  const handleSubmit = (event: any) => {
    const reqdata = {
      userId:selectedRow?.userId,
      title: title,
      description: description,
      deadline: deadline,
      priority: priority,
    };
    dispatch(editTodo(reqdata) as any);
    event.preventDefault();
    dispatch(getTodo() as any);
    // Close the modal after submission
    handleUpdateClose();

    // Optionally reset the form
    setTitle("");
    setDescription("");
    setDeadline("");
    setPriority("");
  };

  return (
    <Modal
      open={updateOpen}
      onClose={handleUpdateClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add a new task
        </Typography>
        <TextField
          id="Title"
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          id="Description"
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={handleDescriptionChange}
        />
        <TextField
          id="Deadline"
          label="Deadline"
          variant="outlined"
          fullWidth
          type="date"
          margin="normal"
          value={deadline}
          onChange={handleDeadlineChange}
          InputLabelProps={{ shrink: true }}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="priority-label">Priority</InputLabel>
          <Select
            labelId="priority-label"
            id="Priority"
            value={priority}
            label="Priority"
            onChange={handlePriorityChange}
          >
            <MenuItem value={0}>High</MenuItem>
            <MenuItem value={1}>Medium</MenuItem>
            <MenuItem value={3}>Low</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Modal>
  );
};
