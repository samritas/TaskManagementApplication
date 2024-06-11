import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import React, { useRef, useState, useEffect } from "react";

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
  CardActions,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddTodo } from "./add_todo";
import { EditTodo } from "./edit_todo";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodo } from "../../util/slice/todoSlice";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const Table = () => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState([
    {
      name: "Tesla",
      description: "description Y",
      price: 64950,
      name1: "Tesla",
      description1: "description Y",
      price1: 64950,
    },
    { name: "Ford", description: "F-Series", price: 33850 },
    { name: "Toyota", description: "Corolla", price: 29600 },
  ]);
  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const tododata = useSelector((state: any) => state.todo.value);

  console.log(tododata, "tododata");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo() as any);
  }, []);

  const handleOpen = () => setOpen(true);

  const handleUpdateOpen = (row: any) => {
    console.log(row, "roww");
    setSelectedRow(row);
    setUpdateOpen(true);
  };

  const handleUpdateClose = () => setUpdateOpen(false);

  const handleDeleteOpen = (row: any) => {
    setSelectedRow(row);
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => setDeleteOpen(false);

  const handleDelete = async () => {
    await dispatch(deleteTodo(selectedRow) as any);
    dispatch(getTodo() as any);
    handleDeleteClose();
  };
  const handleClose = () => {
    return setOpen(false);
  };

  const handleUpdate = () => {
    // Add your update logic here
    console.log("Updated:", selectedRow);
    handleUpdateClose();
  };

  const date = (dateStr: any) => {
    const date = new Date(dateStr);

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based in JS
    const year = date.getUTCFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  return (
    <Card
      sx={{
        height: "100%",

        overflow: "auto",
      }}
    >
      <CardHeader
        title="Todo List"
        action={
          <Button color="primary" variant="contained" onClick={handleOpen}>
            Add Task
          </Button>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          {/* //map the below code */}
          {tododata.length > 0 &&
            tododata?.map((task: any) => (
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box>
                  <Card
                    variant="outlined"
                    sx={{
                      height: "280px",
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {task?.title}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {task.description}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <b style={{ color: "green" }}>Completed :</b>
                        {task.completed === 1 ? "True" : "False"}
                      </Typography>
                      <Typography variant="body2">
                        Deadline {date(task?.deadline)}
                        <br />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => handleUpdateOpen(task)}
                        size="small"
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        onClick={() => handleDeleteOpen(task)}
                        size="small"
                        style={{ color: "red" }}
                      >
                        <DeleteIcon />
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            ))}
        </Grid>
      </CardContent>

      <AddTodo open={open} handleCloth={() => handleClose()} />
      <Box sx={{ paddingTop: "1000px" }}>
        <EditTodo
          selectedRow={selectedRow}
          updateOpen={updateOpen}
          handleUpdateClose={handleUpdateClose}
        />

        <Dialog
          open={deleteOpen}
          onClose={handleDeleteClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Confirm Delete</DialogTitle>
          <DialogContent>
            <Typography id="alert-dialog-description">
              Are you sure you want to delete the task "{"selectedRow?.name"}"?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteClose}>Cancel</Button>
            <Button onClick={handleDelete} color="error" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Card>
  );
};
