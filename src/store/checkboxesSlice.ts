import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
export type CheckboxType = { name: string; id: string; active: boolean }
type CheckboxState = { checkboxes: CheckboxType[] }
const initialState: CheckboxState = {
  checkboxes: [
    { name: 'Всё', id: nanoid(), active: true },
    { name: 'Без пересадок', id: nanoid(), active: true },
    { name: '1 пересадка', id: nanoid(), active: true },
    { name: '2 пересадки', id: nanoid(), active: true },
    { name: '3 пересадки', id: nanoid(), active: true },
  ],
}
const checkboxSlice = createSlice({
  name: 'checkboxes',
  initialState,
  reducers: {
    toggleCheckbox(state, action: PayloadAction<CheckboxType>) {
      const clickedName = action.payload.name

      if (clickedName === 'Всё') {
        const allOtherCheckboxesActive = state.checkboxes
          .slice(1)
          .every((checkbox) => checkbox.active)

        state.checkboxes.forEach((el) => {
          el.active = !allOtherCheckboxesActive
        })
      } else {
        state.checkboxes.forEach((el, index) => {
          if (clickedName === el.name) {
            el.active = !el.active
          }

          if (index !== 0 && !el.active) {
            state.checkboxes[0].active = false
          }
        })

        const allOtherCheckboxesActive = state.checkboxes
          .slice(1)
          .every((checkbox) => checkbox.active)

        if (allOtherCheckboxesActive) {
          state.checkboxes[0].active = true
        }
      }
    },
  },
})

export const { toggleCheckbox } = checkboxSlice.actions
export default checkboxSlice.reducer
