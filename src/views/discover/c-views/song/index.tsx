import React, { memo, useCallback, useEffect, useState, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { SongWrapper } from './style'
import SongHeader from './c-cpns/song-header'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  fetchCatlistDataAction,
  fetchPlaylistsDataAction,
  changeCurrentPageAction,
  changeCategoryAction
} from './store/song'
import { shallowEqual } from 'react-redux'
import SongMenuItem from '@/components/song-menu-item'
import PagePagination from '@/components/page-pagination'
import { useLocation } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Song: FC<IProps> = (props) => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const [totalPage, setTotalPage] = useState(0)

  const { playlistsInfo, currentPage, category } = useAppSelector(
    (state) => ({
      playlistsInfo: state.song.playlistsInfo,
      currentPage: state.song.currentPage,
      category: state.song.category
    }),
    shallowEqual
  )

  useEffect(() => {
    const search = decodeURIComponent(location.search)
    //如果路径中有query参数就发送请求
    if (search && search.split('=')[1]) {
      dispatch(changeCategoryAction(search.split('=')[1]))
    } else {
      //没有路径参数就修改参数为全部
      if (category !== '全部') {
        dispatch(changeCategoryAction('全部'))
      }
    }
    dispatch(fetchCatlistDataAction())
    dispatch(fetchPlaylistsDataAction(0))
  }, [dispatch, location])

  //页数
  useEffect(() => {
    if (playlistsInfo && playlistsInfo.total !== undefined) {
      const total = Math.ceil(playlistsInfo.total / 35)
      setTotalPage(total)
    }
  }, [playlistsInfo])

  const { playlists = [], total = 0 } = playlistsInfo ?? {}

  const currentPageChange = useCallback((page: number): void => {
    dispatch(changeCurrentPageAction(page))
    dispatch(fetchPlaylistsDataAction((page - 1) * 35))
  }, [])

  return (
    <SongWrapper>
      <div className="wrap-v2 songContent">
        <SongHeader />
        <div className="songListBox">
          {!!playlists.length &&
            playlists.map((item) => {
              return <SongMenuItem key={item.id} itemData={item} right={49} />
            })}
          <span className="hideSpan"></span>
          <span className="hideSpan"></span>
          <span className="hideSpan"></span>
        </div>
        <PagePagination
          currentPage={currentPage}
          onPageChange={currentPageChange}
          pageSize={35}
          total={total}
          isFirst={currentPage === 1}
          isNext={currentPage === totalPage}
        />
      </div>
    </SongWrapper>
  )
}

export default memo(Song)
