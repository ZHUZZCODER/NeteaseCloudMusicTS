import {
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
}

export const fetchUserInfo = createAsyncThunk<void, string>(
  'fetchUserInfo',
  async (cookieVal: string, { dispatch, getState }) => {
    const { data } = await getLoginStatus(cookieVal)
    console.log('res=', data)
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
  cookie: ''
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
    }
  }
})

export const { changeUserInfo, changeCookie } = globalSlice.actions
export default globalSlice.reducer
