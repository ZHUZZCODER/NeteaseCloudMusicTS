export interface IArtist {
  id: number
  name: string
  picUrl: string
  alias: any[]
  albumSize: number
  picId: number
  fansGroup?: any
  img1v1Url: string
  img1v1: number
  trans?: any
}

export interface IAlbums {
  id: number
  name: string
  artist: IArtist
  publishTime: number
  size: number
  copyrightId: number
  status: number
  picId: number
  mark: number
  alia: string[]
}

export interface IArtists {
  id: number
  name: string
  picUrl: string
  alias: any[]
  albumSize: number
  picId: number
  fansGroup?: any
  img1v1Url: string
  accountId: number
  img1v1: number
  trans?: any
}

export interface ISongs {
  id: number
  name: string
  artists: IArtists[]
  album: IAlbums
  duration: number
  copyrightId: number
  status: number
  alias: any[]
  rtype: number
  ftype: number
  mvid: number
  fee: number
  rUrl?: any
  mark: number
}

export enum EOrder {
  SONGS = 'songs',
  ARTISTS = 'artists',
  ALBUMS = 'albums'
}

export interface Playlists {
  id: number
  name: string
  coverImgUrl: string
  creator?: any
  subscribed: boolean
  trackCount: number
  userId: number
  playCount: number
  bookCount: number
  specialType: number
  officialTags?: any
  action?: any
  actionType?: any
  recommendText?: any
  score?: any
  description?: any
  highQuality: boolean
}

// export enum ESuggestResult {
//    albums =
// }

export interface ISuggestResult {
  [index: string]: unknown
  albums?: IAlbums[]
  artists?: IArtists[]
  songs?: ISongs[]
  order?: string[]
  playlists?: Playlists[]
}

export interface IMUSICSEARCHSTATE {
  suggestResult: ISuggestResult
}
