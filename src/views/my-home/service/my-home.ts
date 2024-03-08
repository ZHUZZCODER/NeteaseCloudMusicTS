import zhuRequest from '@/services'
import { PlayList } from '../store/type'

export const getUserPlaylist = (uid: number) => {
  return zhuRequest.post<{ code: number; playlist: PlayList[] }>({
    url: '/user/playlist',
    params: {
      uid
    }
  })
}
