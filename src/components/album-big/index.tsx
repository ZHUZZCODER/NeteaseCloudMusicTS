import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumBigWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  imgUrl: string
}

const AlbumBig: FC<IProps> = (props) => {
  const { imgUrl } = props
  return (
    <AlbumBigWrapper>
      <img src={getImageSize(imgUrl, 177)} alt="" />
      <div className="sprite_cover cover_img"></div>
    </AlbumBigWrapper>
  )
}

export default memo(AlbumBig)
