import zhuRequest from '@/services'
import zhuRequestPlay from '@/services/playrequest'
import reservePlayRequest from '@/services/reserverPlayRequest'
import { playRequetVal } from '@/assets/constants'

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

//新的获取歌曲地址
export const getNewSongUrl = (
  id: number,
  level: TLEVEL = 'exhigh',
  type = 'apiSongUrlV1'
) => {
  return zhuRequestPlay.post({ url: '/music/', params: { type, id, level } })
}

//备用地址
export const getReserveSongUrl = (data: FormData) => {
  return reservePlayRequest.post({
    params: {
      callback: playRequetVal
    },
    data
  })
}

/**
 *
 * @param keywords 关键字
 * @param type 搜索类型
 * @param limit 返回数量
 * @param offset 偏移
 * @returns Promise
 */
export const search = (
  keywords: string,
  type = 1,
  limit?: number,
  offset?: number
) => {
  return zhuRequest.get({
    url: '/cloudSearch',
    params: { keywords, type, limit, offset }
  })
}
