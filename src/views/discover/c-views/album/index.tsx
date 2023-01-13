import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import HotAlbum from './c-cpns/hot-album'
import AllAlbum from './c-cpns/all-album'

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = (props) => {
  return (
    <AlbumWrapper>
      <div className="wrap-v2 albumContent">
        <HotAlbum />
        <AllAlbum />
      </div>
    </AlbumWrapper>
  )
}

export default memo(Album)
