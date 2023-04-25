import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { SINGERSTATE, ITHUNKPAYLOAD } from './type'
import { getArtistList, getTopArtists } from '../service/singer'
import { IThunkState } from '@/store'

export const fetchArtistListDataAction = createAsyncThunk<
  void,
  ITHUNKPAYLOAD,
  IThunkState
>(
  'fetchArtistListData',
  async (thunkPayload: ITHUNKPAYLOAD, { dispatch, getState }) => {
    let {
      currentArea,
      currentType: { type }
    } = getState().singer
    const { initial, isJoinSong = false } = thunkPayload
    //如果是recommend的入驻歌手数据
    if (isJoinSong) {
      currentArea = -1
      type = 2
    }
    //如果是点击的推荐歌手
    if (currentArea === -1 && type === 1) {
      getTopArtists().then(({ artists }) => {
        if (!artists) return
        dispatch(changeHotArtistsAction(artists))
      })
    }
    //获取非推荐歌手
    getArtistList(type, currentArea, 0, 100, initial).then(({ artists }) => {
      if (!artists) return
      dispatch(changeArtistsListAction(artists))
    })
  }
)

const initialState: SINGERSTATE = {
  currentArea: -1,
  currentType: {
    name: '推荐歌手',
    type: 1,
    url: '/discover/singer'
  },
  hotArtists: [],
  artistsList: []
}

const singerSlice = createSlice({
  name: 'singerSlice',
  initialState,
  reducers: {
    changeCurrentAreaAction(state, { payload }) {
      state.currentArea = payload
    },
    changeCurrentTypeAction(state, { payload }) {
      state.currentType = payload
    },
    changeHotArtistsAction(state, { payload }) {
      state.hotArtists = payload
    },
    changeArtistsListAction(state, { payload }) {
      state.artistsList = payload
    }
  }
})

export const {
  changeCurrentAreaAction,
  changeCurrentTypeAction,
  changeHotArtistsAction,
  changeArtistsListAction
} = singerSlice.actions
export default singerSlice.reducer
