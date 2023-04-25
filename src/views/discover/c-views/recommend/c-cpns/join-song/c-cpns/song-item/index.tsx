import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import type { ISONGITEMDATA } from '@/views/discover/c-views/recommend/c-cpns/join-song/type'
import { SongItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: ISONGITEMDATA
}

const SongItem: FC<IProps> = (props) => {
  const {
    itemData: { picUrl = '', name = '', alias = [], accountId }
  } = props
  return (
    <SongItemWrapper>
      <a className="itemContent" href={`#/user/home?id=${accountId}`}>
        <img className="songItemImg" src={getImageSize(picUrl, 65)} alt="" />
        <div className="songItemRight">
          <span>{name}</span>
          <span>{alias.join(' ')}</span>
        </div>
      </a>
    </SongItemWrapper>
  )
}

export default memo(SongItem)
