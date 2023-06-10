import { createSlice } from '@reduxjs/toolkit'
import type { IMUSICSEARCHSTATE } from './type'

const initialState: IMUSICSEARCHSTATE = {
  suggestResult: {}
}

const musicSearchSlice = createSlice({
  name: 'musicSearch',
  initialState,
  reducers: {
    changeSuggestResultAction(state, { payload }) {
      state.suggestResult = payload
    }
  }
})

export const { changeSuggestResultAction } = musicSearchSlice.actions
export default musicSearchSlice.reducer
