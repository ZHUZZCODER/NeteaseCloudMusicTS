import React, { memo, useEffect, useCallback, useState, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { AllAlbumWrapper } from './style'
import NavHeaderV4 from '@/components/nav-header-v4'
import { albumTabList } from '@/assets/data/local_data'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchAlbumNewAction } from '../../store/album'
import { shallowEqual } from 'react-redux'
import NewAlbumItem from '@/components/new-album-item'
import PagePagination from '@/components/page-pagination'
import type { IALBUMNEWPARAMS } from '../../store/album'
import { useHandleSearchParams } from '@/hooks'
import { isEmptyObject } from '@/utils/isEmptyObject'
import localCache from '@/utils/cache'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const AllAlbum: FC<IProps> = (props) => {
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useHandleSearchParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [requestParams, setRequetParams] = useState<IALBUMNEWPARAMS>({
    offset: 1,
    limit: 35,
    area: 'ALL'
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      localCache.removeCache('albumOffset')
    }
  }, [])

  useEffect(() => {
    dispatch(fetchAlbumNewAction(requestParams))
  }, [dispatch, requestParams])

  useEffect(() => {
    if (searchParams && isEmptyObject(searchParams)) {
      let offset = 1
      const { area } = searchParams
      const localOffset = localCache.getCache('albumOffset')
      if (localOffset) offset = localOffset
      if (area) setRequetParams({ ...requestParams, area, offset })
    }
  }, [searchParams])

  const { allAlbums, allAlbumsTotal } = useAppSelector(
    (state) => ({
      allAlbums: state.album.allAlbums,
      allAlbumsTotal: state.album.allAlbumsTotal
    }),
    shallowEqual
  )

  useEffect(() => {
    const total = Math.ceil(allAlbumsTotal / 35) || 1
    setTotalPage(total)
  }, [allAlbumsTotal])

  const tabClick = useCallback((item: { name: string; area: string }) => {
    localCache.setCache('albumOffset', 1)
    setSearchParams({ area: item.area })
  }, [])

  const newAlbumClick = useCallback(
    (id: number) => {
      navigate(`/discover/albumList?id=${id}`, { replace: true })
    },
    [navigate]
  )

  const pageChange = useCallback(
    (page: number) => {
      localCache.setCache('albumOffset', page)
      const params = { ...requestParams, offset: page }
      setRequetParams(params)
      setCurrentPage(page)
    },
    [dispatch, requestParams]
  )

  return (
    <AllAlbumWrapper>
      <NavHeaderV4
        navTitle="全部新碟"
        tabList={albumTabList}
        tabClick={tabClick}
      />
      <div className="allAlbumContent">
        {allAlbums.map((item) => {
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
      <PagePagination
        currentPage={requestParams.offset}
        onPageChange={pageChange}
        pageSize={35}
        total={allAlbumsTotal}
        isFirst={currentPage === 1}
        isNext={currentPage === totalPage}
      />
    </AllAlbumWrapper>
  )
}

export default memo(AllAlbum)
