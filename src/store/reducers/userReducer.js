import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../http/axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await $api.post("/login", { email, password });
      return response.data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

export const register = createAsyncThunk(
  "user/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await $api.post("/register", formData);
      return response.data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Registration failed");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await $api.post("/logout");
      return true;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Logout failed");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    success: null,
    error: null,
  },
  reducers: {
    clearMessages: (state) => {
      state.error = null;
      state.success = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = "Login successful";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = "Registration successful";
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
        state.success = "Logged out successfully";
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMessages, setUser } = userSlice.actions;
export default userSlice.reducer;
