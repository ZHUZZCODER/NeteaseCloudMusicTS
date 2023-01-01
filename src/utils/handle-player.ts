import { fetchAlbumListDataAction } from '@/views/player/store/player'
import type { AppDispatch } from '@/store'
import React from 'react'

//获取歌曲播放路径
export function getPlayUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

//音乐播放
export function playMusic(
  e: React.MouseEvent,
  id: number,
  dispatch: AppDispatch
) {
  e.stopPropagation()
  dispatch(fetchAlbumListDataAction(id))
}
