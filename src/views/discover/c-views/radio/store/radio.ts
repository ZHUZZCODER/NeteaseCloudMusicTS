import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { IRADIOSTATE } from './type'
import {
  getDjCatelist,
  getProgramRecommend,
  getDjProgramToplist,
  getDjRecommendType,
  getDjRadioHot
} from '../service/radio'
import type { IThunkState } from '@/store'

export const fetchCategoriesDataAction = createAsyncThunk(
  'fetchCategoriesData',
  async (args, { dispatch }) => {
    const { categories = [] } = await getDjCatelist()
    if (!categories) return
    dispatch(changeCategoriesAction(categories))
  }
)

//获取推荐节目数据
export const fetchProgramsDataAction = createAsyncThunk(
  'fetchProgramsData',
  async (args, { dispatch }) => {
    const { programs = [] } = await getProgramRecommend()
    if (!programs) return
    dispatch(changeProgaramsAction(programs))
  }
)

//获取节目排行榜数据
export const fetchDjProgramToplistDataAction = createAsyncThunk(
  'fetchDjProgramToplist',
  async (args, { dispatch }) => {
    const { toplist = [] } = await getDjProgramToplist()
    if (!toplist) return
    dispatch(changeTopListAction(toplist))
  }
)

export const fetchDjRecommendTypeDataAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('fetchDjRecommendTypeData', async (type: number, { dispatch, getState }) => {
  const { djRadios = [] } = await getDjRecommendType(type)
  if (!djRadios) return
  const { djRadiosList } = getState().radio
  //数组合并
  const newDjRadiosList = djRadiosList.concat(djRadios)
  //数组去重
  const djRadiosArr = [
    ...new Set(newDjRadiosList.map((item: any) => JSON.stringify(item)))
  ].map((item) => JSON.parse(item))
  dispatch(changeDjRadiosListAction(djRadiosArr))
})

interface IDJRADIOHOTPARAMS {
  offset: number
  cateId: number
}

//获取电台排行榜数据
export const fetchDjRadioHotDataAction = createAsyncThunk<
  void,
  IDJRADIOHOTPARAMS,
  IThunkState
>('fetchDjRadioHotData', async ({ offset, cateId }, { dispatch }) => {
  const { djRadios = [], count } = await getDjRadioHot(
    (offset - 1) * 22,
    22,
    cateId
  )
  if (!djRadios) return
  dispatch(changeHotRadiosAction(djRadios))
  dispatch(changeHotRadiosCountAction(Math.ceil(count / 22)))
})

const initialState: IRADIOSTATE = {
  //电台分类
  categories: [],
  //推荐节目
  programs: [],
  //节目排行榜
  toplist: [],
  //根据分类获取电台数据
  djRadiosList: [],
  //活跃的category
  activeRadioId: null,
  //热门电台
  hotRadios: [],
  hotRadiosCount: 0
}

const radioSlice = createSlice({
  name: 'radioSlice',
  initialState,
  reducers: {
    changeCategoriesAction(state, { payload }) {
      state.categories = payload
    },
    changeProgaramsAction(state, { payload }) {
      state.programs = payload
    },
    changeTopListAction(state, { payload }) {
      state.toplist = payload
    },
    changeDjRadiosListAction(state, { payload }) {
      state.djRadiosList = payload
    },
    changeActiveRadioIdAction(state, { payload }) {
      state.activeRadioId = payload
    },
    changeHotRadiosAction(state, { payload }) {
      state.hotRadios = payload
    },
    changeHotRadiosCountAction(state, { payload }) {
      state.hotRadiosCount = payload
    }
  }
})

export const {
  changeCategoriesAction,
  changeProgaramsAction,
  changeTopListAction,
  changeDjRadiosListAction,
  changeActiveRadioIdAction,
  changeHotRadiosAction,
  changeHotRadiosCountAction
} = radioSlice.actions
export default radioSlice.reducer
