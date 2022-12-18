import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { JoinSongWrapper } from './style'
import NavHeaderV2 from '@/components/nav-header-v2'
import { useAppSelector } from '@/store'
import SongItem from './c-cpns/song-item'

interface IProps {
  children?: ReactNode
}

const JoinSong: FC<IProps> = (props) => {
  const { songList = [] } = useAppSelector((state) => ({
    songList: state.recommend.songList
  }))
  return (
    <JoinSongWrapper>
      <NavHeaderV2
        title="入驻歌手"
        moreText="查看全部 &gt;"
        moreLink="#/discover/artist"
      />
      <div className="songContent">
        {songList.map((item) => {
          return <SongItem key={item.id} itemData={item} />
        })}
      </div>
      <div className="btnBox">
        <a
          className="sprite_button btn"
          href="https://music.163.com/st/musician"
          target="_blank"
          rel="noreferrer"
        >
          <p className="sprite_button">申请成为网易音乐人</p>
        </a>
      </div>
    </JoinSongWrapper>
  )
}

export default memo(JoinSong)
