export interface ICREATOR {
  avatarUrl: string
}

export interface IUSERHOMEPLAYLIST {
  creator: ICREATOR
}

export interface IUSERHOMESTATE {
  userhomePlaylist: IUSERHOMEPLAYLIST[]
}
