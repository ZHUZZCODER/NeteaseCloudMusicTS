import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getLyric } from '@/views/player/service/player'
import { IThunkState } from '@/store'
import { PlainObject } from '@/bean/base'

export const fetchSongInfoDataAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('fetchSongInfo', async (id, { dispatch }) => {
  const result = await getLyric(id)
  dispatch(changeSongInfoAction(result))
})

interface SingleSongState {
  songInfo: (PlainObject<string> & { lrc: { lyric: string } }) | null
  singerInformation: {
    songName: string
    singerName: string
    albumName: string
  }
  songId: number
}

const initialState: SingleSongState = {
  //歌曲信息
  songInfo: null,
  //歌手信息
  singerInformation: {
    songName: '',
    singerName: '',
    albumName: ''
  },
  songId: 0
}

const singleSongSlice = createSlice({
  name: 'singleSongSlice',
  initialState,
  reducers: {
    changeSongInfoAction(state, { payload }) {
      state.songInfo = payload
    },
    changeSingerInfomationAction(state, { payload }) {
      Object.assign(state.singerInformation, payload)
    },
    changeSongIdAction(state, { payload }) {
      state.songId = payload
    }
  }
})

export const {
  changeSongInfoAction,
  changeSingerInfomationAction,
  changeSongIdAction
} = singleSongSlice.actions
export default singleSongSlice.reducer
