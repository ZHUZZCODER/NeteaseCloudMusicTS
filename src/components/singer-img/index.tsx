import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerImgWrapper } from './style'
import { getImageSize, showhtml } from '@/utils/format'

interface IProps {
  children?: ReactNode
  coverImgUrl: string
  imgsize: number
  imgPad?: number
}

const SingerImg: FC<IProps> = (props) => {
  const { coverImgUrl, imgsize = 200, imgPad = 4 } = props
  return (
    <SingerImgWrapper imgWH={imgsize} imgPad={imgPad}>
      <img src={getImageSize(coverImgUrl, imgsize)} alt="" />
      <div className="sprite_cover imgMask"></div>
    </SingerImgWrapper>
  )
}

export default memo(SingerImg)
