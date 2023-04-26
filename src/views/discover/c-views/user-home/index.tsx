import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchUserHomePlaylistAction } from './store/user-home'
import { useSearchParams } from 'react-router-dom'
import SingerInfoNav from './cpns/singer-info-nav'
import { UserHomeWrapper, SingerNavWrapper } from './style'
import { shallowEqual } from 'react-redux'
import RankingSongs from './cpns/ranking-songs'

interface IProps {
  children?: ReactNode
}

const UserHome: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const [playlistItem, setPlaylistItem] = useState(null)
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

  return (
    <UserHomeWrapper>
      {!!userhomePlaylist.length && (
        <>
          <SingerNavWrapper>
            <img
              className="singerLogo"
              src={userhomePlaylist[0].creator.avatarUrl}
              alt=""
            />
            <SingerInfoNav />
          </SingerNavWrapper>
          <RankingSongs />
        </>
      )}
    </UserHomeWrapper>
  )
}

export default memo(UserHome)
