import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { UserHomeWrapper } from './style'
import CreateSongList from './c-cpns/create-song-list'
import CollectSongList from './c-cpns/collect-song-list'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchPlaylist } from './store/my-home'
import { shallowEqual } from 'react-redux'
import { isObject } from '@/utils/type'
import { isObjectKeys } from '@/utils/type'
import type { LoginStatusRes } from '@/services/service/type'

interface IProps {
  children?: ReactNode
}

const MyHome: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const { userInfo, collectPlaylist, createPlaylist } = useAppSelector(
    (state) => ({
      userInfo: state.globalStore.userInfo,
      collectPlaylist: state.myHome.collectPlaylist,
      createPlaylist: state.myHome.createPlaylist
    }),
    shallowEqual
  )
  useEffect(() => {
    if (
      isObject<LoginStatusRes>(userInfo) &&
      isObjectKeys(userInfo) &&
      userInfo.profile.userId
    ) {
      dispatch(fetchPlaylist(userInfo.profile.userId))
    }
  }, [dispatch, userInfo?.profile.userId])
  return (
    <UserHomeWrapper>
      {!!createPlaylist.length && <CreateSongList playlist={createPlaylist} />}
      {!!collectPlaylist.length && (
        <CollectSongList playlist={collectPlaylist} />
      )}
    </UserHomeWrapper>
  )
}

export default memo(MyHome)
