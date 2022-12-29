import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LikeSongItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  imgSrc: string
  link: string
  nickname: string
}

const LikeSongItem: FC<IProps> = (props) => {
  const { imgSrc, link = 'undefined', nickname } = props
  return (
    <LikeSongItemWrapper>
      <a href={link} title={nickname}>
        <img src={imgSrc} alt="" />
      </a>
    </LikeSongItemWrapper>
  )
}

export default memo(LikeSongItem)
