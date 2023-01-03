import zhuRequest from '@/services'

//获取榜单左侧数据
export const getTopList = () => {
  return zhuRequest.get({
    url: '/toplist'
  })
}

//获取榜单详情
export const getRankingList = (id: number) => {
  return zhuRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
