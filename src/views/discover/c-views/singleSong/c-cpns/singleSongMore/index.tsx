import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingleSongMoreWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const SingleSongMore: FC<IProps> = (props) => {
  return <SingleSongMoreWrapper>右侧</SingleSongMoreWrapper>
}

export default memo(SingleSongMore)
