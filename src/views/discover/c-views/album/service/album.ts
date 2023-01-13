import zhuRequest from '@/services'

//获取全部新碟
export const getAlbumNew = (offset = 0, limit = 35, area = 'ALL') => {
  return zhuRequest.get({
    url: '/album/new',
    params: {
      offset,
      limit,
      area
    }
  })
}
