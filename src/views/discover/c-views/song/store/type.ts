interface ISUB {
  name: string
  resourceCount: number
  imgId: number
  imgUrl: null
  type: number
  category: number
  resourceType: number
  hot: boolean
  activity: boolean
}

interface ICATEGORIES {
  [key: string]: string
}

interface ICATEGORYINFO {
  categories: ICATEGORIES
  sub: ISUB[]
}

interface IPLAYLISTINFO {
  playlists: any[]
  total: number
}

export interface ISONGSTATE {
  categoryInfo: ICATEGORYINFO | null
  playlistsInfo: IPLAYLISTINFO | null
  category: string
  currentPage: number
}
