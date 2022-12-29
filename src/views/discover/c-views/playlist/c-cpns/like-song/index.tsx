import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import NavHeaderV2 from '@/components/nav-header-v2'
import { LikeSongWrapper } from './style'
import LikeSongItem from '@/components/like-song-item'
import type { ILIKEITEM } from './type'

interface IProps {
  children?: ReactNode
  likeList: ILIKEITEM[]
}

const LikeSong: FC<IProps> = (props) => {
  const { likeList } = props
  return (
    <LikeSongWrapper>
      <NavHeaderV2 title="喜欢这个歌单的人" />
      <div className="likeList">
        {likeList.length &&
          likeList.map(({ avatarUrl, userId, nickname }) => {
            return (
              <LikeSongItem
                key={userId}
                imgSrc={avatarUrl}
                link={'#'}
                nickname={nickname}
              />
            )
          })}
      </div>
    </LikeSongWrapper>
  )
}

export default memo(LikeSong)
