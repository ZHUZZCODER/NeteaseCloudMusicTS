import zhuRequest from '@/services'

//获取热门歌手数据
// export const "/top/artists"

//歌手分类列表
export const getArtistList = (
  type: number,
  area: number,
  offset = 0,
  limit = 100,
  initial?: string
) => {
  const url = '/artist/list'
  let params = {}
  // //如果是推荐歌手
  // if (area === -1 && type === 1) {
  //   url = '/top/artists'
  // } else {
  // if (area === -1) {
  //   params = { cat: 5001 }
  // } else {
  params = { type, area, initial }
  // }
  // }

  params = { ...params, offset, limit }

  return zhuRequest.get({
    url,
    params
  })
}

//热门歌手
export const getTopArtists = (offset = 0, limit = 100) => {
  return zhuRequest.get({
    url: '/top/artists',
    params: {
      offset,
      limit
    }
  })
}
