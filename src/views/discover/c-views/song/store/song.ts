import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { ISONGSTATE } from './type'
import { getPlaylistCatlist, getPlaylists } from '../service/song'
import { RootState, AppDispatch } from '@/store'

interface IThunkState {
  state: RootState
  dispatch: AppDispatch
}

export const fetchCatlistDataAction = createAsyncThunk(
  'fetchCatlistData',
  async (args, { dispatch }) => {
    const res = await getPlaylistCatlist()
    dispatch(changeCategoryInfoAction(res))
  }
)

export const fetchPlaylistsDataAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('fetchPlaylistsData', async (offset: number, { dispatch, getState }) => {
  const { category } = getState().song
  const res = await getPlaylists(category, offset)
  if (!res) return
  dispatch(changePlaylistsAction(res))
})

const initialState: ISONGSTATE = {
  categoryInfo: null,
  playlistsInfo: null,
  category: '全部',
  currentPage: 1
}

const songSlice = createSlice({
  name: 'songSlice',
  initialState,
  reducers: {
    changeCategoryInfoAction(state, { payload }) {
      state.categoryInfo = payload
    },
    changePlaylistsAction(state, { payload }) {
      state.playlistsInfo = payload
    },
    changeCategoryAction(state, { payload }) {
      state.category = payload
    },
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload
    }
  }
})

export const {
  changeCategoryInfoAction,
  changePlaylistsAction,
  changeCategoryAction,
  changeCurrentPageAction
} = songSlice.actions
export default songSlice.reducer
