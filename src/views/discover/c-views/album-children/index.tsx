import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  AlbumChildrenWrapper,
  ChildrenLeftWrapper,
  ChildrenRightWrapper
} from './style'
import AlbumInfo from './c-cpns/album-info'
import AlbumList from './c-cpns/album-list'
import { fetchAlbumInfoDataAction } from './store/album-children'
import { useAppDispatch, useAppSelector } from '@/store'
import { useLocation } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import MoreDownload from '@/components/more-download'

interface IProps {
  children?: ReactNode
}

const AlbumChildren: FC<IProps> = (props) => {
  const dispath = useAppDispatch()
  const location = useLocation()

  const { albumInfo, songInfo } = useAppSelector(
    (state) => ({
      albumInfo: state.albumChildren.albumInfo,
      songInfo: state.albumChildren.songInfo
    }),
    shallowEqual
  )

  useEffect(() => {
    const id = parseInt(location.search.split('=')[1])
    dispath(fetchAlbumInfoDataAction(id))
  }, [dispath, location])
  return (
    <AlbumChildrenWrapper>
      <div className="wrap-v2 albumListContent">
        <ChildrenLeftWrapper>
          {albumInfo && (
            <AlbumInfo albumInfo={albumInfo} songInfo={songInfo || []} />
          )}
          {songInfo.length && <AlbumList songInfo={songInfo} />}
        </ChildrenLeftWrapper>
        <ChildrenRightWrapper>
          <MoreDownload />
        </ChildrenRightWrapper>
      </div>
    </AlbumChildrenWrapper>
  )
}

export default memo(AlbumChildren)
