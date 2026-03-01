import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import $api from "../../http/axios";

const setSession = (payload) => {
  if (payload?.accessToken) {
    localStorage.setItem("waynix_access_token", payload.accessToken);
  }
  if (payload?.refreshToken) {
    localStorage.setItem("waynix_refresh_token", payload.refreshToken);
  }
  if (payload?.user) {
    localStorage.setItem("waynix_user", JSON.stringify(payload.user));
  }
};

const clearSession = () => {
  localStorage.removeItem("waynix_access_token");
  localStorage.removeItem("waynix_refresh_token");
  localStorage.removeItem("waynix_user");
};

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await $api.get("/me");
      return response.data.user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Not authenticated");
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await $api.post("/login", { email, password });
      setSession(response.data);
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
      setSession(response.data);
      return response.data;
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
      clearSession();
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
        state.user = action.payload?.user || null;
        state.success = action.payload?.message || "Registration successful";
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        if (action.payload) {
          localStorage.setItem("waynix_user", JSON.stringify(action.payload));
        }
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        const cached = localStorage.getItem("waynix_user");
        if (cached) {
          try {
            state.user = JSON.parse(cached);
          } catch {
            state.user = null;
          }
        } else {
          state.user = null;
        }
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
