import {
  Playlist,
  getLoginStatus,
  getLogout,
  getUserAccount,
  getUserBinging,
  getUserDetail,
  getUserSubcount
} from '@/services/service'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import localCache from '@/utils/cache'
import type { LoginStatusRes } from '@/services/service/type'

interface GlobalStatus {
  userInfo: LoginStatusRes | null
  cookie: string
  playSonglistIds: number[] // 添加歌曲播放列表
  playlist: Playlist[]
  voiceVal: number
}

export const fetchUserInfo = createAsyncThunk<void, string>(
  'fetchUserInfo',
  async (cookieVal: string, { dispatch, getState }) => {
    const { data } = await getLoginStatus(cookieVal)
    if (data.code === 200) dispatch(changeUserInfo(data))
  }
)

export const fetchLogout = createAsyncThunk(
  'fetchLogout',
  async (args, { dispatch, getState }) => {
    const { code } = await getLogout()
    if (code === 200) {
      dispatch(changeCookie(''))
      dispatch(changeUserInfo(null))
    }
  }
)

const initialState: GlobalStatus = {
  userInfo: null,
  cookie: '',
  playSonglistIds: [],
  playlist: [], //歌单
  voiceVal: 100 // 声音
}

const globalSlice = createSlice({
  name: 'globalStore',
  initialState,
  reducers: {
    changeUserInfo(state, { payload }) {
      localCache.setCache('userInfo', payload)
      state.userInfo = payload
    },
    changeCookie(state, { payload }) {
      localCache.setCache('cookie', payload)
      state.cookie = payload
    },
    changePlaySonglistIds(state, { payload }) {
      state.playSonglistIds.push(payload)
      localCache.setCache('playSonglistIds', state.playSonglistIds)
    },
    changePlaySonglistIdsValue(state, { payload }) {
      state.playSonglistIds = payload
    },
    changePlaylist(state, { payload }) {
      state.playlist = payload
    },
    changeVoiceVal(state, { payload }) {
      state.voiceVal = payload
      localCache.setCache('voiceVal', payload)
    }
  }
})

export const {
  changeUserInfo,
  changeCookie,
  changePlaySonglistIds,
  changePlaySonglistIdsValue,
  changePlaylist,
  changeVoiceVal
} = globalSlice.actions
export default globalSlice.reducer
