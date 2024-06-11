import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const login = createAsyncThunk("counter/login", async (data: any) => {
  const response = await axios.post("http://localhost:8000/auth/login", {
    username: data?.username,
    password: data?.password,
  });
  return response.data;
});

export const signup = createAsyncThunk("auth/signup", async (data: any) => {
  try {
    const response = await axios.post("http://localhost:8000/auth/signup", {
      username: data?.username,
      password: data?.password,
    });
    return response.data; // Return the response data (e.g., newly created user details)
  } catch (error) {
    throw error; // Throw any errors for rejection handling
  }
});
const authSlice = createSlice({
  name: "counter",
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
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
    
        state.loading = false;
        state.value += action.payload;
        
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        // state?.error = action.error.message;
      });
  },
});

export const { increment, decrement } = authSlice.actions;
export default authSlice.reducer;
