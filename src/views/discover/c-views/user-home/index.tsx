import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchUserHomePlaylistAction } from './store/user-home'
import { useSearchParams } from 'react-router-dom'
import SingerInfoNav from './cpns/singer-info-nav'
import { UserHomeWrapper, SingerNavWrapper } from './style'
import { shallowEqual } from 'react-redux'
import RankingSongs from './cpns/ranking-songs'
import SongMenuItem from '@/components/song-menu-item'
import { isArray } from '@/utils/utils'
import { DatePicker, Space } from 'antd'

interface IProps {
  children?: ReactNode
}

const UserHome: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const [playlistItem, setPlaylistItem] = useState<null | any>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { userhomePlaylist } = useAppSelector(
    (state) => ({
      userhomePlaylist: state.userHome.userhomePlaylist
    }),
    shallowEqual
  )

  useEffect(() => {
    let id: string | null | number = searchParams.get('id')
    if (id) {
      id = parseInt(id)
      dispatch(fetchUserHomePlaylistAction(id))
    }
  }, [dispatch, searchParams])

  useEffect(() => {
    if (
      isArray(userhomePlaylist) &&
      userhomePlaylist.length &&
      userhomePlaylist[0].creator
    ) {
      setPlaylistItem(userhomePlaylist[0])
    }
  }, [userhomePlaylist])

  function range(start: number, end: number) {
    const result = []
    for (let i = start; i < end; i++) {
      result.push(i)
    }
    return result
  }

  const handleDisabledDate = useCallback((date: any) => {
    return date
  }, [])

  const handleDisabledTime = useCallback((date: any) => {
    return {
      disabledHours: () => range(0, 24),
      disabledMinutes: () => range(0, 60),
      disabledSeconds: () => range(0, 60)
    }
  }, [])

  return (
    <UserHomeWrapper>
      {!!playlistItem && (
        <>
          <SingerNavWrapper>
            {/* playlistItem.creator.avatarUrl */}
            <img
              className="singerLogo"
              src={playlistItem.creator.avatarUrl}
              alt=""
            />
            <SingerInfoNav />
          </SingerNavWrapper>
          <RankingSongs />
          <SongMenuItem
            itemData={{
              picUrl: '',
              coverImgUrl: '',
              playCount: 0,
              name: '',
              id: 0
            }}
            right={0}
          />
        </>
      )}
    </UserHomeWrapper>
  )
}

export default memo(UserHome)
