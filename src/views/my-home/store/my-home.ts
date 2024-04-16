import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PlayList } from './type'
import { getUserPlaylist } from '../service/my-home'

export const fetchPlaylist = createAsyncThunk<void, number>(
  'fetchPlaylist',
  async (uid: number, { dispatch, getState }) => {
    const { code, playlist } = await getUserPlaylist(uid)
    if (code === 200) {
      dispatch(changePlayListAction(playlist))
      const createPlaylist = playlist.filter(
        ({ creator: { userId } }) => userId === uid
      )
      const collectPlaylist = playlist.filter(
        ({ creator: { userId } }) => userId !== uid
      )
      dispatch(changeCreatePlaylistAction(createPlaylist))
      dispatch(changeCollectPlaylistAction(collectPlaylist))
    }
  }
)

interface InitialState {
  playList: PlayList[]
  createPlaylist: PlayList[]
  collectPlaylist: PlayList[]
}

const initialState: InitialState = {
  playList: [],
  createPlaylist: [],
  collectPlaylist: []
}

const MyHomeSlice = createSlice({
  name: 'myHomeSlice',
  initialState,
  reducers: {
    changePlayListAction(state, { payload }) {
      state.playList = payload
    },
    changeCreatePlaylistAction(state, { payload }) {
      state.createPlaylist = payload
    },
    changeCollectPlaylistAction(state, { payload }) {
      state.collectPlaylist = payload
    }
  }
})

export const {
  changePlayListAction,
  changeCreatePlaylistAction,
  changeCollectPlaylistAction
} = MyHomeSlice.actions
export default MyHomeSlice.reducer
