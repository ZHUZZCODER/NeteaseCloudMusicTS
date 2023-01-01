import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAlbumList } from '@/views/discover/c-views/recommend/service/recommend'
import type { IALBUMCHILDRENSTATE } from './type'
import song from '../../song'

export const fetchAlbumInfoDataAction = createAsyncThunk<void, number>(
  'fetchAlbumInfoData',
  async (id: number, { dispatch }) => {
    const { songs, album } = await getAlbumList(id)
    if (songs) dispatch(changeSongInfoAction(songs))
    if (album) dispatch(changeAlbumInfoAction(album))
  }
)

const initialState: IALBUMCHILDRENSTATE = {
  albumInfo: null,
  songInfo: []
}

const albumChildrenSlice = createSlice({
  name: 'ablumChildren',
  initialState,
  reducers: {
    changeAlbumInfoAction(state, { payload }) {
      state.albumInfo = payload
    },
    changeSongInfoAction(state, { payload }) {
      state.songInfo = payload
    }
  }
})

export const { changeAlbumInfoAction, changeSongInfoAction } =
  albumChildrenSlice.actions
export default albumChildrenSlice.reducer
