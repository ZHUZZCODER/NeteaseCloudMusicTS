import NavHeaderV4 from '@/components/nav-header-v4'
import React, { memo, useMemo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayList } from '../../store/type'
import SongMenuItem from '@/components/song-menu-item'
import { CreateSongListWrapper } from './style'

interface IProps {
  children?: ReactNode
  playlist: PlayList[]
}

const CreateSongList: FC<IProps> = (props) => {
  const { playlist } = props
  const navTitle = useMemo(() => {
    return `我创建的歌单（${playlist.length}）`
  }, [playlist.length])
  return (
    <CreateSongListWrapper>
      <NavHeaderV4 navTitle={navTitle} titleFontsize="20px" />
      <div className="playlist">
        {playlist.map((item) => {
          return <SongMenuItem key={item.id} itemData={item} right={49} />
        })}
        <i className="normal-i"></i>
        <i className="normal-i"></i>
        <i className="normal-i"></i>
      </div>
    </CreateSongListWrapper>
  )
}

export default memo(CreateSongList)
