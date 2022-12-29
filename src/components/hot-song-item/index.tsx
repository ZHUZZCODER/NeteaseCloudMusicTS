import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotSongItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IHOTSONGITEM {
  imgUrl: string
  title: string
  description: string
  iconUrl: string
}

interface IProps {
  children?: ReactNode
  hotSongItem: IHOTSONGITEM
}

const HotSongItem: FC<IProps> = (props) => {
  const {
    hotSongItem: { imgUrl, title, description, iconUrl }
  } = props
  return (
    <HotSongItemWrapper>
      <a className="songImg" href={undefined}>
        <img src={getImageSize(imgUrl, 50)} alt="" />
      </a>
      <div className="songTx">
        <a className="songTitle" href={undefined} title={title}>
          {title}
        </a>
        <div className="songDescription">
          <a href={undefined} title={description}>
            by {description}
          </a>
          <img className="descriptionIcon" src={iconUrl} alt="" />
        </div>
      </div>
    </HotSongItemWrapper>
  )
}

export default memo(HotSongItem)
