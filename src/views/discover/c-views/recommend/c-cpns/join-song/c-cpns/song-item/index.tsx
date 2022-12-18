import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import type { SongState } from '@/views/discover/c-views/recommend/store/type'
import { SongItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: SongState
}

const SongItem: FC<IProps> = (props) => {
  const {
    itemData: { picUrl = '', name = '', alias = [] }
  } = props
  return (
    <SongItemWrapper>
      <a className="itemContent" href="#">
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
