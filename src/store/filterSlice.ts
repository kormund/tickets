import { createSlice, nanoid } from '@reduxjs/toolkit'
type Filter = { name: string; id: string; active: boolean }
type FilterState = Filter[]
const initialState: FilterState = [
  { name: 'Самый дешёвый', id: nanoid(), active: true },
  { name: 'Самый быстрый', id: nanoid(), active: false },
  { name: 'Оптимальный', id: nanoid(), active: false },
]
const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    selectFilter: (state, action) => {
      const selectedId = action.payload

      // Loop through the filters and update the active state based on the selected filter id
      state.forEach((filter) => {
        filter.active = filter.id === selectedId
      })
    },
  },
})

export const { selectFilter } = filterSlice.actions
export default filterSlice.reducer
