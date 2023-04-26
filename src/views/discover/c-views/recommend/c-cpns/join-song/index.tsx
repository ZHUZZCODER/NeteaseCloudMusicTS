import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { JoinSongWrapper } from './style'
import NavHeaderV2 from '@/components/nav-header-v2'
import SongItem from './c-cpns/song-item'
import joinSongList from '@/assets/data/join_singer.json'

interface IProps {
  children?: ReactNode
}

const JoinSong: FC<IProps> = (props) => {
  return (
    <JoinSongWrapper>
      <NavHeaderV2
        title="入驻歌手"
        moreText="查看全部 &gt;"
        moreLink="#/discover/singer/signed/"
      />
      <div className="songContent">
        {joinSongList.slice(0, 5).map((item) => {
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
