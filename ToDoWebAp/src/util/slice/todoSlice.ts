import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export const getTodo = createAsyncThunk("todo/getTodo", async () => {
  const response = await axios.get("http://localhost:8000/task/tasks");
  return response.data;
});
let taskIdCounter = 1;
export const addTodo = createAsyncThunk("todo/getTodo", async (data: any) => {
  const uniqueId = taskIdCounter++;
  const response = await axios.post("http://localhost:8000/task/tasks", {
    userId: uniqueId,
    title: data?.title,
    description: data?.description,
    deadline: data?.deadline,
    priority: data?.priority,
  });
  return response.data;
});
export const editTodo = createAsyncThunk("todo/getTodo", async (data: any) => {
  const uniqueId = taskIdCounter++;
  const response = await axios.put(
    `http://localhost:8000/task/tasks/${data.id}`,
    {
      title: data?.title,
      description: data?.description,
      deadline: data?.deadline,
      priority: data?.priority,
    }
  );
  return response.data;
});
export const deleteTodo = createAsyncThunk(
  "todo/getTodo",
  async (data: any) => {
    const response = await axios.delete(
      `http://localhost:8000/task/tasks/${data?.id}`
    );
    return response.data;
  }
);
const todoSlice = createSlice({
  name: "todo",
  initialState: { value: 0, loading: false, error: null },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        console.log(action, "action");
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.loading = false;
        // state?.error = action.error.message;
      });
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
