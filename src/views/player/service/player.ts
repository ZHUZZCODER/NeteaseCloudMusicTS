import zhuRequest from '@/services'

//6.0获取歌曲信息数据
export const getSongDetail = (ids: number) => {
  return zhuRequest.get({ url: '/song/detail', params: { ids } })
}

//7.0获取歌曲的歌词
export const getLyric = (id: number) => {
  return zhuRequest.get({ url: '/lyric', params: { id } })
}

//获取音乐是否可用
export const getCheckMusic = (id: number) => {
  return zhuRequest.get({ url: '/check/music', params: { id } })
}

// 播放音质等级, 分为 standard => 标准,higher => 较高, exhigh=>极高, lossless=>无损, hires=>Hi-Res
type TLEVEL = 'standard' | 'higher' | 'exhigh' | 'lossless' | 'hires'

//获取歌曲url
export const getSongUrl = (id: number, level: TLEVEL = 'exhigh') => {
  return zhuRequest.get({ url: '/song/url/v1', params: { id, level } })
}
