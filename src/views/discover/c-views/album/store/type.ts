import type { AlbumsState } from '@/views/discover/c-views/recommend/store/type'

export interface IALBUMSTATE {
  allAlbums: AlbumsState[]
  allAlbumsTotal: number
  allArea: string
}
