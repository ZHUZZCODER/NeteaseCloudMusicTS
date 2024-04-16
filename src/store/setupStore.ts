import localCache from '@/utils/cache'
import {
  changeCurrentSongAction,
  changeLyricsAction,
  changePlayModeAction,
  changeCurrentListAction,
  changePrevSongIndexAction
} from '@/views/player/store/player'
import {
  changeCookie,
  changeUserInfo,
  changePlaySonglistIdsValue,
  changeVoiceVal
} from '@/store/modules/global'
import { isNumber } from '@/utils/type'

export function setupStore(store: any) {
  const currentSong = localCache.getCache('currentSong')
  const lyric = localCache.getCache('lyric')
  const playMode = localCache.getCache('playMode')
  const currentList = localCache.getCache('currentList')
  const preSongIndex = localCache.getCache('preSongIndex')
  const cookie = localCache.getCache('cookie')
  const userInfo = localCache.getCache('userInfo')
  const playSonglistIds = localCache.getCache('playSonglistIds')
  const voiceVal = localCache.getCache('voiceVal')
  if (currentSong) store.dispatch(changeCurrentSongAction(currentSong))
  if (lyric) store.dispatch(changeLyricsAction(lyric))
  if (playMode !== 'undefined') store.dispatch(changePlayModeAction(playMode))
  if (currentList) store.dispatch(changeCurrentListAction(currentList))
  if (typeof preSongIndex === 'number')
    store.dispatch(changePrevSongIndexAction(preSongIndex))
  if (cookie) store.dispatch(changeCookie(cookie))
  if (userInfo) store.dispatch(changeUserInfo(userInfo))
  if (isNumber(voiceVal)) store.dispatch(changeVoiceVal(voiceVal))
  // if (playSonglistIds)
  //   store.dispatch(changePlaySonglistIdsValue(playSonglistIds))
}
