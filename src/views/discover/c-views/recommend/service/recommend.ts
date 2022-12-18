import zhuRequest from '@/services'

//获取轮播图数据
export const getBanner = () => {
  return zhuRequest.get({ url: '/banner' })
}

//获取热门推荐数据
export const getHotRecommend = (limit = 30) => {
  return zhuRequest.get({ url: '/personalized', params: { limit } })
}

//获取新碟上架数据
export const getNewAlbum = () => {
  return zhuRequest.get({ url: '/album/newest' })
}

//获取榜单数据
export const getRankingList = (id: number) => {
  return zhuRequest.get({ url: '/playlist/detail', params: { id } })
}

//获取入驻歌手数据
export const getJoinSong = (limit = 30) => {
  return zhuRequest.get({ url: '/artist/list', params: { limit } })
}
