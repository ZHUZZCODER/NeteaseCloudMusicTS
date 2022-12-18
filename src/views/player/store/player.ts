import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getLyric } from '../service/player'
import { CurrentSongState } from './type'
import { parseLyric } from '@/utils/parse-lyric'
import type { Lyric } from '@/utils/parse-lyric'
import type { RootState } from '@/store'

//6.2获取currentSong数据修改currentSong
export const fetchCurrentSongDataAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('fetchCurrentSong', async (id: number, { dispatch, getState }) => {
  // //请求歌曲信息
  // getSongDetail(id).then(({ songs }) => {
  //   dispatch(changeCurrentSongAction(songs[0]))
  // })
  // //7.2请求歌词信息
  // getLyric(id).then(({ lrc: { lyric = [] } = {} }) => {
  //   if (!lyric.length) return
  //   //7.5
  //   dispatch(changeLyricsAction(parseLyric(lyric)))
  // })

  //8.5准备播放下一首，首先看songList中是否包含这首歌，包含设置为currentSong,不包含则请求.存储当前播放歌曲的prevSongIndex
  //获取player数据
  const { currentList } = getState().player
  //查找当前歌曲列表中是否包含当前歌曲
  const findIndex = currentList.findIndex((item) => item.id === id)
  if (findIndex === -1) {
    //没有找到歌曲
    //请求歌曲信息
    getSongDetail(id).then(({ songs }) => {
      //如果没有获取到歌曲信息return掉
      if (!songs.length) return
      //将歌曲信息加入播放列表
      const newCurrentList = [...currentList]
      newCurrentList.push(songs[0])
      //修改当前播放歌曲
      dispatch(changeCurrentSongAction(songs[0]))
      //修改currentList播放列表
      dispatch(changeCurrentListAction(newCurrentList))
      //设置当前播放歌曲索引
      dispatch(changePrevSongIndexAction(newCurrentList.length - 1))
    })
  } else {
    //找到了歌曲
    //直接返回当前播放歌曲
    const song = currentList[findIndex]
    //修改当前播放歌曲
    dispatch(changeCurrentSongAction(song))
    //设置当前播放歌曲的索引
    dispatch(changePrevSongIndexAction(findIndex))
  }

  //7.2请求歌词信息
  getLyric(id).then(({ lrc: { lyric = [] } = {} }) => {
    if (!lyric.length) return
    //7.5
    dispatch(changeLyricsAction(parseLyric(lyric)))
  })
})

interface IThunkState {
  state: RootState
}

//8.6切换下一首歌曲
export const fetchNextSongAction = createAsyncThunk<void, boolean, IThunkState>(
  'fetchNextSong',
  (isNext, { dispatch, getState }) => {
    const { playMode, currentList, prevSongIndex } = getState().player
    let currentIndex = 0
    //根据播放模式判断
    if (playMode === 1) {
      //随机播放
      currentIndex = Math.floor(Math.random() * currentList.length)
    } else {
      //顺序播放或单曲循环
      currentIndex = isNext ? prevSongIndex + 1 : prevSongIndex - 1
      //大于最后一首，从第一首开始播放
      if (currentIndex > currentList.length - 1) currentIndex = 0
      //小于0从最后一首开始播放
      if (currentIndex < 0) currentIndex = currentList.length - 1
    }

    //修改当前播放歌曲
    const song = currentList[currentIndex]
    dispatch(changeCurrentSongAction(song))
    //修改当前播放歌曲索引
    dispatch(changePrevSongIndexAction(currentIndex))

    //获取歌曲的歌词
    getLyric(song.id).then(({ lrc: { lyric = [] } = {} }) => {
      if (!lyric.length) return
      dispatch(changeLyricsAction(parseLyric(lyric)))
    })
  }
)
type IndexType = string | number | symbol
export type PlainObject<K extends IndexType = string, V = unknown> = Record<
  K,
  V
>

interface InitialState {
  currentSong: CurrentSongState | Record<string, any> //当前播放歌曲
  lyrics: Lyric[]
  lyricsItemIndex: number
  currentList: CurrentSongState[]
  playMode: number
  prevSongIndex: number
}

const initialState: InitialState = {
  //1.0 当前播放歌曲
  currentSong: {
    // name: '起风了',
    // id: 1330348068,
    // pst: 0,
    // t: 0,
    // ar: [
    //   {
    //     id: 12085562,
    //     name: '买辣椒也用券',
    //     tns: [],
    //     alias: []
    //   }
    // ],
    // alia: [],
    // pop: 100,
    // st: 0,
    // rt: '',
    // fee: 8,
    // v: 42,
    // crbt: null,
    // cf: '',
    // al: {
    //   id: 74715426,
    //   name: '起风了',
    //   picUrl:
    //     'https://p2.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg',
    //   tns: [],
    //   pic_str: '109951163699673355',
    //   pic: 109951163699673360
    // },
    // dt: 325868,
    // h: {
    //   br: 320000,
    //   fid: 0,
    //   size: 13037236,
    //   vd: -77525,
    //   sr: 44100
    // },
    // m: {
    //   br: 192000,
    //   fid: 0,
    //   size: 7822359,
    //   vd: -74987,
    //   sr: 44100
    // },
    // l: {
    //   br: 128000,
    //   fid: 0,
    //   size: 5214920,
    //   vd: -73504,
    //   sr: 44100
    // },
    // sq: {
    //   br: 985873,
    //   fid: 0,
    //   size: 40158105,
    //   vd: -77524,
    //   sr: 44100
    // },
    // hr: {
    //   br: 2832349,
    //   fid: 0,
    //   size: 115371553,
    //   vd: -77475,
    //   sr: 88200
    // },
    // a: null,
    // cd: '1',
    // no: 1,
    // rtUrl: null,
    // ftype: 0,
    // rtUrls: [],
    // djId: 0,
    // copyright: 0,
    // s_id: 0,
    // mark: 536879104,
    // originCoverType: 0,
    // originSongSimpleData: null,
    // tagPicList: null,
    // resourceState: true,
    // version: 42,
    // songJumpInfo: null,
    // entertainmentTags: null,
    // awardTags: null,
    // single: 0,
    // noCopyrightRcmd: null,
    // rtype: 0,
    // rurl: null,
    // cp: 1415923,
    // mv: 10782615,
    // mst: 9,
    // publishTime: 0
  },
  //7.1当前播放歌曲歌词数据
  lyrics: [],
  //7.10歌词索引
  lyricsItemIndex: 0,
  //8.0当前歌曲播放列表
  currentList: [
    {
      name: '梦里花',
      id: 2006204662,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 35136304,
          name: '卢卢快闭嘴',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 156431025,
        name: '梦里花',
        picUrl:
          'https://p1.music.126.net/RdMHRLZwtbCg-N23TLGHVA==/109951168141737066.jpg',
        tns: [],
        pic_str: '109951168141737066',
        pic: 109951168141737070
      },
      dt: 206273,
      h: {
        br: 320000,
        fid: 0,
        size: 8253165,
        vd: -58626,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4951917,
        vd: -56025,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3301293,
        vd: -54354,
        sr: 48000
      },
      sq: {
        br: 941004,
        fid: 0,
        size: 24263096,
        vd: -57822,
        sr: 48000
      },
      hr: {
        br: 1706277,
        fid: 0,
        size: 43995070,
        vd: -58623,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536870912,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 327090,
        name: '梦里花',
        artists: [
          {
            id: 10562,
            name: '张韶涵'
          }
        ],
        albumMeta: {
          id: 32361,
          name: '梦里花'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mst: 9,
      cp: 0,
      rtype: 0,
      rurl: null,
      mv: 0,
      publishTime: 1670860800000,
      tns: ['唯一纯白的茉莉花']
    },
    {
      name: '雨天·2022',
      id: 2004349260,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 36181946,
          name: '不是花火呀',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 3,
      crbt: null,
      cf: '',
      al: {
        id: 156014665,
        name: '雨天',
        picUrl:
          'https://p2.music.126.net/B1NngmaTA9RFvCqjN70vBw==/109951168125876900.jpg',
        tns: [],
        pic_str: '109951168125876900',
        pic: 109951168125876900
      },
      dt: 200419,
      h: {
        br: 320000,
        fid: 0,
        size: 8019636,
        vd: -52560,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4811799,
        vd: -49935,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3207880,
        vd: -48206,
        sr: 44100
      },
      sq: {
        br: 845018,
        fid: 0,
        size: 21169757,
        vd: -52702,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 0,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 287083,
        name: '雨天',
        artists: [
          {
            id: 9272,
            name: '孙燕姿'
          }
        ],
        albumMeta: {
          id: 28521,
          name: 'My Story,Your Song 经典全记录'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 3,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 1670428800000
    }
  ],
  //8.1播放模式  0：顺序，1：随机，2：单曲循环
  playMode: 0,
  //8.6上一次播放歌曲的index
  prevSongIndex: 0
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    //6.1修改currentSong
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    //7.3修改lyrics歌词数据
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricsIndexItemAction(state, { payload }) {
      state.lyricsItemIndex = payload
    },
    //8.2修改播放模式
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    },
    changeCurrentListAction(state, { payload }) {
      state.currentList = payload
    },
    changePrevSongIndexAction(state, { payload }) {
      state.prevSongIndex = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricsIndexItemAction,
  changePlayModeAction,
  changeCurrentListAction,
  changePrevSongIndexAction
} = playerSlice.actions
export default playerSlice.reducer
