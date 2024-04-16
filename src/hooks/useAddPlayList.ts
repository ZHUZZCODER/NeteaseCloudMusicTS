import { useCallback } from 'react'
import { useAppDispatch } from '@/store'
import { changePushSongCurrentListAction } from '@/views/player/store/player'
import type { CurrentSongState } from '@/views/player/store/type'

export default function useAddPlayList() {
  const dispatch = useAppDispatch()
  const handleAddPlayList = useCallback(
    (song: CurrentSongState) => {
      if (dispatch) dispatch(changePushSongCurrentListAction(song))
    },
    [dispatch]
  )

  return handleAddPlayList
}
