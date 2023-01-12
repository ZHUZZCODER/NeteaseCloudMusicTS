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
}

export interface SINGERSTATE {
  currentArea: number
  currentType: ICURRENTTYPE
  hotArtists: IARTISTS[]
  artistsList: IARTISTS[]
}
