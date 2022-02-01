import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseServerApi from "../api/baseServerApi";

const initialState = {
  userList: [],
  loading: false,
  error: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await baseServerApi.get("/users");
  const userList = response.data.map(
    ({ id, full_name, phone_number, ip_address, city = "", country = "" }) => {
      return {
        id,
        fullName: full_name,
        phoneNumber: phone_number,
        ipAddress: ip_address,
        city,
        country,
      };
    }
  );

  return userList;
});

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const response = await baseServerApi.post("/users", { user: user });

  return response.data;
});

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    const response = await baseServerApi.delete(`/users/${userId}`);

    return response.data;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.userList = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = `${action.error.message}, please try again later.`;
      state.loading = false;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.userList.push(action.payload);
      state.loading = false;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload.toString()
      );
      state.loading = false;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { getUsers } = usersSlice.actions;

export default usersSlice.reducer;
