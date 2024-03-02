import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingleSongMoreWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const SingleSongMore: FC<IProps> = (props) => {
  return <SingleSongMoreWrapper>暂无</SingleSongMoreWrapper>
}

export default memo(SingleSongMore)
