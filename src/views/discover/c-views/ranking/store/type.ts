export interface IRANKINGLIST {
  subscribers: any[]
  subscribed?: any
  creator?: any
  artists?: any
  tracks?: any
  updateFrequency: string
  backgroundCoverId: number
  backgroundCoverUrl?: any
  titleImage: number
  titleImageUrl?: any
  englishTitle?: any
  opRecommend: boolean
  recommendInfo?: any
  socialPlaylistCover?: any
  subscribedCount: number
  cloudTrackCount: number
  adType: number
  trackNumberUpdateTime: number
  userId: number
  createTime: number
  highQuality: boolean
  specialType: number
  updateTime: number
  coverImgId: number
  trackCount: number
  coverImgUrl: string
  newImported: boolean
  anonimous: boolean
  commentThreadId: string
  totalDuration: number
  trackUpdateTime: number
  privacy: number
  playCount: number
  ordered: boolean
  tags: any[]
  description: string
  status: number
  name: string
  id: number
  coverImgId_str: string
  ToplistType: string
}

interface ITRACKS {
  id: number
  al: { picUrl: string }
  name: string
  dt: number
  ar: [{ name: string }]
  mv: number
}

interface IPLAYLIST {
  id: number
  name: string
  coverImgUrl: string
  updateTime: number
  shareCount: number
  commentCount: number
  subscribedCount: number
  tracks: ITRACKS[]
  playCount: number
}

export interface IRANKINGSTATE {
  rankingList: IRANKINGLIST[]
  currentIndex: number
  playList: IPLAYLIST | null
}
