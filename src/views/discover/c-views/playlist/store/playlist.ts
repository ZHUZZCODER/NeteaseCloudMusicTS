import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootObject } from './type'
import { getRankingList } from '@/views/discover/c-views/recommend/service/recommend'
// import type { RootState, AppDispatch } from '@/store'

export const fetchPlaylistDataAction = createAsyncThunk<void, number>(
  'fetchPlaylistData',
  async (id: number, { dispatch }) => {
    const { playlist = {} } = await getRankingList(id)
    dispatch(changePlaylistAction(playlist))
  }
)

const initialState: RootObject | any = {
  playlist: {}
}

export const playListSlice = createSlice({
  name: 'playList',
  initialState,
  reducers: {
    changePlaylistAction(state, { payload }) {
      state.playlist = payload
    }
  }
})

export const { changePlaylistAction } = playListSlice.actions
export default playListSlice.reducer
