import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingleSongInfoWrapper } from './style'
import VinylRecord from './c-cpns/vinyl-record'
import MusicInfo from './c-cpns/music-info'

interface IProps {
  children?: ReactNode
}

const SingleSongInfo: FC<IProps> = (props) => {
  return (
    <SingleSongInfoWrapper className="wrap-v6">
      <VinylRecord />
      <MusicInfo />
    </SingleSongInfoWrapper>
  )
}

export default memo(SingleSongInfo)
