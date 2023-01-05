import zhuRequest from '@/services'

//获取歌单分类
export const getPlaylistCatlist = () => {
  return zhuRequest.get({
    url: '/playlist/catlist'
  })
}

//获取歌单分类的歌曲数据
export const getPlaylists = (
  cat = '全部',
  offset = 0,
  limit = 35,
  order = 'hot'
) => {
  return zhuRequest.get({
    url: '/top/playlist',
    params: {
      cat,
      limit,
      offset,
      order
    }
  })
}
