import React, { memo, useCallback, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { HotAlbumWrapper } from './style'
import NavHeaderV4 from '@/components/nav-header-v4'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import NewAlbumItem from '@/components/new-album-item'
import { fetchNewAlbumsDataAction } from '@/views/discover/c-views/recommend/store/recommend'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const HotAlbum: FC<IProps> = (props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchNewAlbumsDataAction())
  }, [dispatch])

  const { albums } = useAppSelector(
    (state) => ({
      albums: state.recommend.albums
    }),
    shallowEqual
  )

  const newAlbumClick = useCallback(
    (id: number) => {
      navigate(`/discover/albumList?id=${id}`)
    },
    [navigate]
  )

  return (
    <HotAlbumWrapper>
      <NavHeaderV4 navTitle="热门新碟" />
      <div className="hotAlbumContent">
        {albums.slice(0, 10).map((item) => {
          return (
            <NewAlbumItem
              key={item.id}
              newAlbumItem={item}
              newAlbumClick={newAlbumClick}
              width={'153px'}
              height={'130px'}
              bgP={'0 -845px'}
              titleSize={'14px'}
            />
          )
        })}
      </div>
    </HotAlbumWrapper>
  )
}

export default memo(HotAlbum)
