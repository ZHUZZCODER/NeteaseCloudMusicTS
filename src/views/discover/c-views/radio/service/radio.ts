import zhuRequest from '@/services'

//获取电台分类
export const getDjCatelist = () => {
  return zhuRequest.get({
    url: '/dj/catelist'
  })
}

//获取推荐节目电台
export const getProgramRecommend = () => {
  return zhuRequest.get({
    url: '/program/recommend'
  })
}

//获取电台节目排行榜
export const getDjProgramToplist = (offset = 0, limit = 100) => {
  return zhuRequest.get({
    url: '/dj/program/toplist'
  })
}

//获取电台分类推荐
export const getDjRecommendType = (type: number) => {
  return zhuRequest.get({
    url: '/dj/recommend/type',
    params: {
      type
    }
  })
}

//获取类别热门电台
export const getDjRadioHot = (offset = 0, limit = 30, cateId: number) => {
  return zhuRequest.get({
    url: '/dj/radio/hot',
    params: {
      offset,
      limit,
      cateId
    }
  })
}
