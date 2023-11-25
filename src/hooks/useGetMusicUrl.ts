import { getNewSongUrl } from '@/views/player/service/player'

export default async function useGetMusicUrl(id: number): Promise<string> {
  try {
    const {
      data: [{ url }]
    } = await getNewSongUrl(id)
    return url
  } catch (error) {
    console.log(error)
  }
  return ''
}
