/* eslint-disable no-case-declarations */
import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name:'filter',
  initialState:"",
  reducers: {
    createFilter(state, action) {
      return action.payload.value
  }}
    })

export const { createFilter } = filterSlice.actions
export default filterSlice.reducer
