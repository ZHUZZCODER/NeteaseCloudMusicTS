import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { IALBUMSTATE } from './type'
import { getAlbumNew } from '../service/album'
import { IThunkState } from '@/store'

export interface IALBUMNEWPARAMS {
  offset: number
  limit: number
  area: string
}

export const fetchAlbumNewAction = createAsyncThunk<
  void,
  IALBUMNEWPARAMS,
  IThunkState
>('fetchAlbumNew', async ({ offset, limit, area }, { dispatch }) => {
  const { albums, total } = await getAlbumNew((offset - 1) * 35, limit, area)
  if (!albums) return
  dispatch(changeAllAlbumAction(albums))
  dispatch(changeAllAlbumsTotalAction(total))
})

const initialState: IALBUMSTATE = {
  allAlbums: [],
  allArea: 'ALL',
  allAlbumsTotal: 0
}

const albumSlice = createSlice({
  name: 'albumSlice',
  initialState,
  reducers: {
    changeAllAreaAction(state, { payload }) {
      state.allArea = payload
    },
    changeAllAlbumAction(state, { payload }) {
      state.allAlbums = payload
    },
    changeAllAlbumsTotalAction(state, { payload }) {
      state.allAlbumsTotal = payload
    }
  }
})

export const {
  changeAllAreaAction,
  changeAllAlbumAction,
  changeAllAlbumsTotalAction
} = albumSlice.actions
export default albumSlice.reducer
