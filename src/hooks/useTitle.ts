import { useEffect } from 'react'

export default function useTitle(playStatus: boolean, title: string) {
  useEffect(() => {
    const doc = document
    if (playStatus) {
      doc.title = `▶ ${title}`
    } else {
      doc.title = '网易云音乐'
    }
  }, [playStatus, title])
}
