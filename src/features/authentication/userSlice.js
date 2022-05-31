import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  sex: null,
  birthDate: null,
  password: null,
  isAuth: false,
  id: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.name = action.payload.name
      state.email = action.payload.email
      state.password = action.payload.password
      state.sex = action.payload.sex
      state.birth = action.payload.birth
      state.isAuth = action.payload.isAuth
    },
    logoutUser(state) {

    }
  }
})

export const { loginUser } = userSlice.actions
export default userSlice.reducer