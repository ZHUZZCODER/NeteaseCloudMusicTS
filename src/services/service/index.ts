import { getMilliseconds } from '@/utils/format'
import zhuRequest from '..'
import type { LoginStatusRes } from './type'

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
