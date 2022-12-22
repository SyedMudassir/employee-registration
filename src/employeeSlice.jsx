import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  employees: [],
};
const addEmployeeSlice = createSlice({
  name: "Add Employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});
export const { addEmployee } = addEmployeeSlice.actions;
export default addEmployeeSlice.reducer;
