import { useAppDispatch, useAppSelector } from '@/store'
import { useCallback, useEffect } from 'react'
import { shallowEqual } from 'react-redux'
import { changePushSongListCurrentListAction } from '@/views/player/store/player'
import type { CurrentSongState } from '@/views/player/store/type'
import { changePlaySonglistIds } from '@/store/modules/global'

export default function useAddPlaySongList() {
  const dispatch = useAppDispatch()
  const { playSonglistIds, currentList } = useAppSelector(
    (state) => ({
      playSonglistIds: state.globalStore.playSonglistIds,
      currentList: state.player.currentList
    }),
    shallowEqual
  )

  const handleExistSong = useCallback(
    (songId: number) => {
      const isExistSong = currentList.some(({ al: { id } }) => {
        return id === songId
      })
      return isExistSong
    },
    [currentList]
  )

  const handleAddPlaySongList = useCallback(
    (playListId: number, songList: CurrentSongState[]) => {
      // 已添加了播放列表
      // if (playSonglistIds.includes(playListId)) return
      // 没有添加播放列表
      // 过滤掉已经存在歌曲
      const newSongList = songList.filter(
        ({ al: { id } }) => !handleExistSong(id)
      )
      dispatch(changePushSongListCurrentListAction(newSongList))
    },
    [playSonglistIds, dispatch, handleExistSong, currentList]
  )

  return {
    handleAddPlaySongList
  }
}
