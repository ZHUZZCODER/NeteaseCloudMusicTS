import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumItemWrapper } from './style'
import { Link } from 'react-router-dom'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  newAlbumItem: any
}

const NewAlbumItem: FC<IProps> = (props) => {
  const {
    newAlbumItem: {
      picUrl = '',
      name = '',
      artist: { name: newName = '' }
    }
  } = props
  return (
    <NewAlbumItemWrapper>
      <div className="albumItemBox">
        <div className="albumItemHeader">
          <img className="albumImage" src={getImageSize(picUrl, 100)} alt="" />
          <Link className="sprite_cover albumCover" to="/"></Link>
          <a className="sprite_icon albumPlay" title="播放" href="#"></a>
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
