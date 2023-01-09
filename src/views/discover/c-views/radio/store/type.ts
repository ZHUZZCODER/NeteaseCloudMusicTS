interface ICATEGORIES {
  id: number
  picWebUrl: string
  name: string
}

interface IMAINSONG {
  name: string
  id: number
  album: IALBUM
}

interface IRADIO {
  name: string
  category: string
  desc: string
}

interface IPROGRAMS {
  id: number
  blurCoverUrl: string
  mainSong: IMAINSONG
  radio: IRADIO
}

interface IPORGRAM {
  mainSong: IMAINSONG
  radio: IRADIO
  coverUrl: string
}

interface IALBUM {
  picUrl: string
}

interface ITOPLIST {
  program: IPORGRAM
}

interface IAVATARDETAIL {
  identityIconUrl?: string
}

interface IDJ {
  avatarUrl: string
  nickname: string
  avatarDetail: IAVATARDETAIL
}

interface IDJRADIOS {
  id: number
  name: string
  desc: string
  categoryId: number
  rcmdtext: string
  picUrl: string
  dj: IDJ
  programCount: number
  subCount: number
}

export interface IRADIOSTATE {
  categories: ICATEGORIES[]
  programs: IPROGRAMS[]
  toplist: ITOPLIST[]
  djRadiosList: IDJRADIOS[]
  activeRadioId: number | null
  hotRadios: IDJRADIOS[]
  hotRadiosCount: number
}
