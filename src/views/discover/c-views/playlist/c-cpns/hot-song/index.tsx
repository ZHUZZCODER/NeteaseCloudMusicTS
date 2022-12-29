import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import NavHeaderV2 from '@/components/nav-header-v2'
import { HotSongWrapper } from './style'
import HotSongItem from '@/components/hot-song-item'
import { hotSong } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const HotSong: FC<IProps> = (props) => {
  return (
    <HotSongWrapper>
      <NavHeaderV2 title="热门歌单" />
      <div className="hotSongList">
        {/* <div className="songItem"> */}
        {hotSong.length &&
          hotSong.map((song) => {
            return <HotSongItem key={song.imgUrl} hotSongItem={song} />
          })}

        {/* </div> */}
      </div>
    </HotSongWrapper>
  )
}

export default memo(HotSong)
