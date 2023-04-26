export interface ICURRENTTYPE {
  name: string
  type: number
  url: string
  id?: number
  dataPath?: string
}

export interface IARTISTS {
  name: string
  id: number
  picUrl: string
  img1v1Url: string
  picId: number
  alias: string[]
}

export interface SINGERSTATE {
  currentArea: number
  currentType: ICURRENTTYPE
  hotArtists: IARTISTS[]
  artistsList: IARTISTS[]
}

export interface ITHUNKPAYLOAD {
  initial: string
  //推荐页面的入驻歌手
  isJoinSong?: boolean
}
