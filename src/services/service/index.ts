import { getMilliseconds } from '@/utils/format'
import zhuRequest from '..'
import type { LoginStatusRes, PlaylistCreate, PlaylistTracks } from './type'

//获取搜索建议
export const searchSuggest = (keywords: string) => {
  return zhuRequest.get({
    url: '/search/suggest',
    params: {
      keywords
    }
  })
}

//获取输入框搜索
export const search = (keywords: string) => {
  return zhuRequest.get({
    url: 'search',
    params: {
      keywords
    }
  })
}

//获取二维码的key
export const getQrKey = () => {
  return zhuRequest.post({
    url: '/login/qr/key',
    params: {
      timestamp: getMilliseconds()
    }
  })
}

//生成二维码
export const getQrCreate = (key: string, qrimg = true) => {
  return zhuRequest.post({
    url: '/login/qr/create',
    params: {
      key,
      qrimg,
      timestamp: getMilliseconds()
    }
  })
}

//检查二维码是否失效
export const getQrCheck = (key: string, noCookie = true) => {
  return zhuRequest.post({
    url: '/login/qr/check',
    params: {
      key,
      noCookie,
      timestamp: getMilliseconds()
    }
  })
}

//获取登录状态
export const getLoginStatus = (cookie: string) => {
  return zhuRequest.post<{ data: LoginStatusRes }>({
    url: '/login/status',
    params: {
      cookie
    }
  })
}

//退出登录
export const getLogout = () => {
  return zhuRequest.post({
    url: '/logout'
  })
}

//获取用户详情
export const getUserDetail = (uid: string) => {
  return zhuRequest.post({
    url: '/user/detail',
    params: {
      uid
    }
  })
}

//获取账号信息
export const getUserAccount = () => {
  return zhuRequest.post({
    url: '/user/account'
  })
}

//获取用户信息，歌单，收藏，mv，dj数量
export const getUserSubcount = () => {
  return zhuRequest.post({
    url: '/user/subcount'
  })
}

//获取用户绑定信息
export const getUserBinging = (uid: string) => {
  return zhuRequest.post({
    url: '/user/binding',
    params: {
      uid
    }
  })
}

export interface Playlist {
  id: number
  name: string
  trackCount: number
  coverImgUrl: string
}
export interface IUserPlaylist {
  code: number
  playlist: Playlist[]
}

//获取用户歌单
export const getUserPlaylist = (params: {
  uid: number
  offset?: number
  limit?: number
}) => {
  return zhuRequest.post<IUserPlaylist>({
    url: '/user/playlist',
    params: {
      offset: 0,
      limit: 1001,
      ...params
    }
  })
}

//将歌曲添加或删除歌单
export const getPlaylistTracks = (params: {
  op: 'add' | 'del'
  pid: number
  tracks: number | string
  cookie?: string
}) => {
  return zhuRequest.post<PlaylistTracks>({
    url: '/playlist/tracks',
    params
  })
}

//收藏/取消收藏歌单
export const getPlaylistSubscribe = (params: {
  //t : 类型,1:收藏,2:取消收藏 id : 歌单 id
  t: 1 | 2
  id: number
  cookie: string
}) => {
  return zhuRequest.post({
    url: 'playlist/subscribe',
    params
  })
}

//新建歌单
export const getPlaylistCreate = (params: {
  name: string
  cookie: string
  privacy?: '10' //是否设置隐私歌单
  type?: 'NORMAL' | 'VIDEO' | 'SHARED' //歌单类型,默认'NORMAL',传 'VIDEO'则为视频歌单,传 'SHARED'则为共享歌单
}) => {
  return zhuRequest.post<PlaylistCreate>({
    url: '/playlist/create',
    params
  })
}
