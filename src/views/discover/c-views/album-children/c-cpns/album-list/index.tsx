import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumListWrapper } from './style'
import NavHeaderV3 from '@/components/nav-header-v3'
import SongList from '@/components/song-list'
import type { ISONGINFO } from '@/views/discover/c-views/album-children/store/type'
import type { Track } from '@/components/song-list'

interface IProps {
  children?: ReactNode
  songInfo: ISONGINFO[]
}

const AlbumList: FC<IProps> = (props) => {
  const { songInfo } = props

  const newSongInfo: Track[] = songInfo.map(({ id, name, dt, ar, al, mv }) => ({
    id,
    name,
    dt,
    ar,
    al,
    mv
  }))
  return (
    <AlbumListWrapper>
      <NavHeaderV3
        navTitle="包含歌曲列表"
        titleChildren={`${songInfo.length}首歌`}
        link="#"
      />
      <SongList tracks={newSongInfo} isShowAlbum={false} />
    </AlbumListWrapper>
  )
}

export default memo(AlbumList)
