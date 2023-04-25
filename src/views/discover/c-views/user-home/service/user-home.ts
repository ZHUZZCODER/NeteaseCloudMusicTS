import zhuRequest from '@/services'

//获取获取用户歌单（点击推荐页面歌手跳转的歌手信息）
export const getUserPlaylist = (uid: number) => {
  return zhuRequest.get({ url: '/user/playlist', params: { uid } })
}
