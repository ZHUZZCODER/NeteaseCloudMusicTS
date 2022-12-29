import React, { createContext, memo, useContext, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  PlayListWrapper,
  PlayListLeftWrapper,
  PlayListRightWrapper
} from './style'
import PlaylistInfo from './c-cpns/playlist-info'
import PlaylistList from './c-cpns/playlist-list'
import PlaylistComment from './c-cpns/playlist-comment'
import LikeSong from './c-cpns/like-song'
import HotSong from './c-cpns/hot-song'
import MoreDownload from '@/components/more-download'
import { fetchPlaylistDataAction } from './store/playlist'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { isEmptyObject } from '@/utils/isEmptyObject'
import { RootObject } from './store/type'

interface IProps {
  children?: ReactNode
}

export const PlayListCtx = createContext<RootObject | null>(null)

const Demo: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  useEffect(() => {
    const { search } = location
    if (search) {
      const id = parseInt(search.split('=')[1])
      dispatch(fetchPlaylistDataAction(id))
    }
  }, [location, dispatch])

  const { playlist } = useAppSelector(
    (state) => ({
      playlist: state.playlist.playlist
    }),
    shallowEqual
  )

  return (
    <PlayListWrapper>
      {isEmptyObject(playlist) && (
        <div className="wrap-v2 playlistContent">
          <PlayListCtx.Provider value={{ playlist }}>
            <PlayListLeftWrapper>
              <PlaylistInfo />
              <PlaylistList />
              <PlaylistComment />
            </PlayListLeftWrapper>
            <PlayListRightWrapper>
              <LikeSong likeList={playlist.subscribers} />
              <HotSong />
              <MoreDownload />
            </PlayListRightWrapper>
          </PlayListCtx.Provider>
        </div>
      )}
    </PlayListWrapper>
  )
}

export default memo(Demo)
