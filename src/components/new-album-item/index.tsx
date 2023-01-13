import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumItemWrapper } from './style'
import { Link } from 'react-router-dom'
import { getImageSize } from '@/utils/format'
import { playMusic } from '@/utils/handle-player'
import { useAppDispatch } from '@/store'

interface IProps {
  children?: ReactNode
  newAlbumItem: any
  newAlbumClick: (id: number) => void
  width?: string
  height?: string
  bgP?: string
  titleSize?: string
}

const NewAlbumItem: FC<IProps> = (props) => {
  const {
    newAlbumItem: {
      id = 0,
      picUrl = '',
      name = '',
      artist: { name: newName = '' }
    },
    newAlbumClick,
    width,
    height,
    bgP,
    titleSize
  } = props

  const dispatch = useAppDispatch()

  return (
    <NewAlbumItemWrapper
      imgWidth={width}
      imgHeight={height}
      bgP={bgP}
      titleSize={titleSize}
    >
      <div className="albumItemBox" onClick={(e) => newAlbumClick(id)}>
        <div className="albumItemHeader">
          <div className="albumImgBox">
            <img
              className="albumImage"
              src={getImageSize(picUrl, 100)}
              alt=""
            />
            <div
              className="sprite_icon albumPlay"
              title="播放"
              onClick={(e) => playMusic(e, id, dispatch)}
            ></div>
          </div>

          <Link className="sprite_cover albumCover" to="/"></Link>

          <div className="sprite_cover bottomCover"></div>
        </div>
        <div className="albumItemFooter">
          <div className="name">{name}</div>
          <div className="footName">{newName}</div>
        </div>
      </div>
    </NewAlbumItemWrapper>
  )
}

export default memo(NewAlbumItem)
