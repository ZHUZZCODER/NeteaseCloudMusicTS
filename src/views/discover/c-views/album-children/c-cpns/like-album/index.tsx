import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LikeAlbumWrapper } from './style'
import NavHeaderV2 from '@/components/nav-header-v2'

interface IProps {
  children?: ReactNode
}

const LikeAlbum: FC<IProps> = (props) => {
  return (
    <LikeAlbumWrapper>
      <NavHeaderV2 title="喜欢这张专辑的人" />
      <div></div>
    </LikeAlbumWrapper>
  )
}

export default memo(LikeAlbum)
