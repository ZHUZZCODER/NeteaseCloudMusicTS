import React, { memo, useContext } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayListListWrapper } from './style'
import SongList from '@/components/song-list'
import DownloadApp from './c-cpns/download-app'
import NavHeaderV3 from '@/components/nav-header-v3'
import { PlayListCtx } from '@/views/discover/c-views/playlist'

interface IProps {
  children?: ReactNode
}

const PlayListList: FC<IProps> = (props) => {
  const {
    playlist: { trackCount = 0, playCount = 0, tracks = [], id }
  } = useContext(PlayListCtx)!

  return (
    <PlayListListWrapper>
      <NavHeaderV3
        navTitle="歌曲列表"
        titleChildren={`${trackCount}首歌`}
        link="#"
        playCount={playCount}
      />
      <SongList tracks={tracks} />
      <DownloadApp />
    </PlayListListWrapper>
  )
}

export default memo(PlayListList)
