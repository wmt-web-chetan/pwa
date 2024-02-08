// import { createSlice } from "@reduxjs/toolkit";
// import { getUserData } from "./actions";

// const initialState = {
//   list: [],
//   loading: false,
//   error: null,
// };
// const getUserSlice = createSlice({
//   name: "getUser",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//       builder
//       .addCase(getUserData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getUserData.fulfilled, (state, action) => {
//         state.loading = false;
//         console.log('action',action),
//         state.list = action.payload;
//       })
//       .addCase(getUserData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });
// export default getUserSlice.reducer;
