import NavHeaderV4 from '@/components/nav-header-v4'
import React, { memo, useMemo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayList } from '../../store/type'
import SongMenuItem from '@/components/song-menu-item'
import { CollectSongListWrapper } from './style'

interface IProps {
  children?: ReactNode
  playlist: PlayList[]
}

const CollectSongList: FC<IProps> = (props) => {
  const { playlist } = props
  const navTitle = useMemo(() => {
    return `我收藏的歌单（${playlist.length}）`
  }, [playlist.length])
  return (
    <CollectSongListWrapper>
      <NavHeaderV4 navTitle={navTitle} titleFontsize="20px" />
      <div className="playlist">
        {playlist.map((item) => {
          return <SongMenuItem key={item.id} itemData={item} right={49} />
        })}
        <i className="normal-i"></i>
        <i className="normal-i"></i>
        <i className="normal-i"></i>
      </div>
    </CollectSongListWrapper>
  )
}

export default memo(CollectSongList)
