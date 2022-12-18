import zhuRequest from '@/services'

//6.0获取歌曲信息数据
export const getSongDetail = (ids: number) => {
  return zhuRequest.get({ url: '/song/detail', params: { ids } })
}

//7.0获取歌曲的歌词
export const getLyric = (id: number) => {
  return zhuRequest.get({ url: '/lyric', params: { id } })
}
