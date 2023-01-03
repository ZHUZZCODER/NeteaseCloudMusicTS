import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Id } from '@reduxjs/toolkit/dist/tsHelpers'
import { getTopList, getRankingList } from '../service/ranking'
import type { IRANKINGSTATE } from './type'

export const fetchRankingListDataAction = createAsyncThunk(
  'fetchRankingListData',
  async (args, { dispatch }) => {
    const { list = [] } = await getTopList()
    dispatch(changeRankingListAction(list))
  }
)

export const fetchPlayListDataAction = createAsyncThunk<void, number>(
  'fetchPlayListData',
  async (id: number, { dispatch }) => {
    const { playlist } = await getRankingList(id)
    if (!playlist) return
    dispatch(changePlayListAction(playlist))
  }
)

const initialState: IRANKINGSTATE = {
  rankingList: [],
  currentIndex: 0,
  playList: null
}

const rankingSlice = createSlice({
  name: 'rankingSilce',
  initialState,
  reducers: {
    changeRankingListAction(state, { payload }) {
      state.rankingList = payload
    },
    changeCurrentIndexAction(state, { payload }) {
      state.currentIndex = payload
    },
    changePlayListAction(state, { payload }) {
      state.playList = payload
    }
  }
})

export const {
  changeRankingListAction,
  changeCurrentIndexAction,
  changePlayListAction
} = rankingSlice.actions
export default rankingSlice.reducer
