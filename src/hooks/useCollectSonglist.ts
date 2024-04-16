import { getPlaylistSubscribe } from '@/services/service'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

export default function useCollectSonglist() {
  const { cookie } = useAppSelector(
    (state) => ({
      cookie: state.globalStore.cookie
    }),
    shallowEqual
  )
  return async function (id: number, t: 1 | 2) {
    const result = await getPlaylistSubscribe({ id, t, cookie })
    console.log(result)
  }
}
