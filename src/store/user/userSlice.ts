import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userData: {
    name: string;
    email: string;
    role: string;
  } | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  userData: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ name: string; email: string; role: string }>
    ) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userData = null;
      state.isAuthenticated = false;
    },
    updateUser: (
      state,
      action: PayloadAction<Partial<{ name: string; email: string; role: string }>>
    ) => {
      if (state.userData) {
        state.userData = { ...state.userData, ...action.payload };
      }
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
