import localCache from '@/utils/cache'
import {
  changeCurrentSongAction,
  changeLyricsAction,
  changePlayModeAction,
  changeCurrentListAction,
  changePrevSongIndexAction
} from '@/views/player/store/player'

export function setupStore(store: any) {
  const currentSong = localCache.getCache('currentSong')
  const lyric = localCache.getCache('lyric')
  const playMode = localCache.getCache('playMode')
  const currentList = localCache.getCache('currentList')
  const preSongIndex = localCache.getCache('preSongIndex')
  if (currentSong) store.dispatch(changeCurrentSongAction(currentSong))
  if (lyric) store.dispatch(changeLyricsAction(lyric))
  if (playMode !== 'undefined') store.dispatch(changePlayModeAction(playMode))
  if (currentList) store.dispatch(changeCurrentListAction(currentList))
  if (typeof preSongIndex === 'number')
    store.dispatch(changePrevSongIndexAction(preSongIndex))
}
