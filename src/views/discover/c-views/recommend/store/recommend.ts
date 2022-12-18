import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanner,
  getHotRecommend,
  getNewAlbum,
  getRankingList,
  getJoinSong
} from '../service/recommend'
import type {
  BannerState,
  HotRecommendState,
  AlbumsState,
  RankingState,
  SongState
} from './type'
//请求轮播数据
export const fetchBannersDataAction = createAsyncThunk(
  'fetchBannersData',
  async (args, { dispatch }) => {
    const res = await getBanner()
    dispatch(changeBannersAction(res.banners))
  }
)
//请求热门推荐数据
export const fetchHotRecommendDataAction = createAsyncThunk(
  'fetchHotRecommendData',
  async (args, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(res.result))
  }
)

//请求新碟上架
export const fetchNewAlbumsDataAction = createAsyncThunk(
  'fetchNewAlbumsData',
  async (args, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(changeNewAlbumAction(res.albums))
  }
)

//请求榜单数据
const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingListDataAction = createAsyncThunk(
  'fetchRankingListData',
  (args, { dispatch }) => {
    // 获取榜单的数据
    // 1.每一个请求单独处理
    // for (const id of rankingIds) {
    //   getRankingList(id).then((res) => {
    //     switch (id) {
    //       case 19723756:
    //         console.log('飙升榜的数据', res)
    //         break
    //       case 3779629:
    //         console.log('新歌榜的数据', res)
    //         break
    //       case 2884035:
    //         console.log('原创榜的数据', res)
    //         break
    //     }
    //   })
    // }

    // 2.将三个结果都拿到, 统一放到一个数组中管理\
    // 保障一: 获取到所有的结果后, 进行dispatch操作
    // 保障二: 获取到的结果一定是有正确的顺序
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getRankingList(id))
    }

    Promise.all(promises).then((res) => {
      const playlists = res
        .filter((item) => item.playlist)
        .map((item) => item.playlist)
      console.log(playlists)
      dispatch(changeRankingListAction(playlists))
    })
  }
)

//请求入驻歌手数据
export const fetchSongListDataAction = createAsyncThunk(
  'fetchSongListData',
  async (args, { dispatch }) => {
    const res = await getJoinSong(5)
    dispatch(changeSongListAction(res.artists))
  }
)

interface InitialState {
  banners: BannerState[]
  hotRecommends: HotRecommendState[]
  albums: AlbumsState[]
  rankingList: RankingState[]
  songList: SongState[]
}

const initialState: InitialState = {
  banners: [], //轮播图数据
  hotRecommends: [], //热门推荐数据
  albums: [], //新碟上架数据
  rankingList: [], //榜单数据
  songList: [] //入驻歌手数据
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.albums = payload
    },
    changeRankingListAction(state, { payload }) {
      state.rankingList = payload
    },
    changeSongListAction(state, { payload }) {
      state.songList = payload
    }
  }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingListAction,
  changeSongListAction
} = recommendSlice.actions
export default recommendSlice.reducer
