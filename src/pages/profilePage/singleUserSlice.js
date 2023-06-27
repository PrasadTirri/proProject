import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  activeUser: {},
  error: "",
};

export const fetchActiveUser = createAsyncThunk(
  "users/fetchActiveUser",
  async (id) => {
    const response = await fetch(`https://panorbit.in/api/users.json`);
    const data = await response.json();
    const user = data.users.find((user) => user.id === Number(id));
    if (!user) throw new Error("User not found");
    return user;
  }
);

const singleUserSlice = createSlice({
  name: "activeUser",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchActiveUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchActiveUser.fulfilled, (state, action) => {
        state.activeUser = action.payload;
        state.loading = false;
      })
      .addCase(fetchActiveUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
});

export default singleUserSlice.reducer;
